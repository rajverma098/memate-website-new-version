
"use client";
import React, {useCallback,useEffect,useMemo,useRef,useState,} from "react";
import "./OurPartners.css";
import { partnersData } from "../../api/partners";

const CARD_WIDTH = 320;
const CARD_GAP = 24;
// const AUTO_PLAY_DELAY = 2800;
const SLIDE_DURATION = 700;
const MOBILE_BREAKPOINT = 767;

export default function OurPartners() {
  const [categories, setCategories] = useState([]);
  const [partners, setPartners] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Partners");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  console.log('viewportWidth: ', viewportWidth);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const sliderTouchStart = useRef(0);

  useEffect(() => {
    const updateSize = () => {
      setViewportWidth(window.innerWidth);
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    const loadPartners = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await partnersData();

        if (!mounted) return;

        if (!Array.isArray(data)) {
          throw new Error("Partners API must return an array.");
        }

        const sortedCategories = [...data].sort(
          (a, b) =>
            Number(a?.display_order || 0) -
            Number(b?.display_order || 0)
        );

        setCategories(sortedCategories);
        const uniquePartners = new Map();
        sortedCategories.forEach((category) => {
          if (!Array.isArray(category?.partners)) {
            return;
          }

          const sortedCategoryPartners = [...category.partners].sort(
            (a, b) =>
              Number(a?.display_order || 0) -
              Number(b?.display_order || 0)
          );

          sortedCategoryPartners.forEach((partner) => {
            if (!partner) return;

            const partnerKey =
              partner.id ??
              partner.business_name ??
              partner.website_url;

            if (!uniquePartners.has(partnerKey)) {
              uniquePartners.set(partnerKey, {
                ...partner,
                category_id: category.id,
                category_title: category.title,
              });
            }
          });
        });

        setPartners(Array.from(uniquePartners.values()));
      } catch (err) {
        console.error("Error loading partners:", err);

        if (!mounted) return;

        setCategories([]);
        setPartners([]);
        setError("Unable to load partners right now.");
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadPartners();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredPartners = useMemo(() => {
    if (activeCategory === "All Partners") {
      return partners;
    }

    const seen = new Set();

    return partners.filter((partner) => {
      if (partner.category_title !== activeCategory) {
        return false;
      }

      const key =
        partner.id ??
        partner.business_name ??
        partner.website_url;

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);

      return true;
    });
  }, [partners, activeCategory]);

  const partnerCount = filteredPartners.length;

  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    });
  }, [activeCategory]);


  const slideWidth =
    viewportWidth > 0 && viewportWidth <= MOBILE_BREAKPOINT
      ? viewportWidth
      : CARD_WIDTH + CARD_GAP;

  const translateX = currentIndex * slideWidth;

  const handleNext = useCallback(() => {
    if (!partnerCount) {
      return;
    }

    setIsTransitioning(true);

    setCurrentIndex((current) => {
      if (current >= partnerCount - 1) {
        return 0;
      }

      return current + 1;
    });
  }, [partnerCount]);


  const handlePrevious = useCallback(() => {
    if (!partnerCount) {
      return;
    }

    setIsTransitioning(true);

    setCurrentIndex((current) => {
      if (current <= 0) {
        return partnerCount - 1;
      }

      return current - 1;
    });
  }, [partnerCount]);

  useEffect(() => {
    if (!partnerCount) {
      setCurrentIndex(0);
      return;
    }

    if (currentIndex >= partnerCount) {
      setCurrentIndex(partnerCount - 1);
    }
  }, [partnerCount, currentIndex]);


  // useEffect(() => {
  //   if (
  //     !partnerCount ||
  //     isPaused ||
  //     selectedPartner ||
  //     partnerCount <= 1
  //   ) {
  //     return;
  //   }

  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, AUTO_PLAY_DELAY);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [
  //   partnerCount,
  //   isPaused,
  //   selectedPartner,
  //   handleNext,
  // ]);

  const openPartnerPopup = useCallback((partner) => {
    setSelectedPartner(partner);
    document.body.style.overflow = "hidden";
  }, []);

  const closePartnerPopup = useCallback(() => {
    setSelectedPartner(null);
    document.body.style.overflow = "";
  }, []);


  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && selectedPartner) {
        closePartnerPopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedPartner, closePartnerPopup]);


  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleTouchStart = (event) => {
    sliderTouchStart.current =
      event.changedTouches[0].clientX;

    setIsPaused(true);
  };

  const handleTouchEnd = (event) => {
    const touchEnd =
      event.changedTouches[0].clientX;

    const distance =
      sliderTouchStart.current - touchEnd;

    const minimumSwipe = 50;

    if (Math.abs(distance) >= minimumSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    setIsPaused(false);
  };


  const handleCardKeyDown = (event, partner) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      openPartnerPopup(partner);
    }
  };

  const handleCategoryChange = (category) => {
    if (category === activeCategory) {
      return;
    }

    setIsPaused(false);
    setActiveCategory(category);
  };

  return (
    <>
      <section className="partners-section">
        <div className="partners-container">
          <h2 className="partners-heading"> Our partners </h2>
          <div className="partners-tabs">
            <button type="button" className={`partner-tab ${activeCategory === "All Partners" ? "active" : "" }`}
              onClick={() =>
                handleCategoryChange("All Partners")
              }>All Partners</button>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`partner-tab ${
                  activeCategory === category.title
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleCategoryChange(category.title)
                }>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="partners-slider-wrapper">
          {loading ? (
            <div className="partners-loading">
              Loading partners...
            </div>
          ) : error ? (
            <div className="partners-empty">
              {error}
            </div>
          ) : !partnerCount ? (
            <div className="partners-empty">
              No partners found.
            </div>
          ) : (
            <div className="custom-slider"
              onMouseEnter={() =>
                setIsPaused(true)
              }
              onMouseLeave={() =>
                setIsPaused(false)
              }
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}>
              <button
                type="button"
                className="slider-arrow slider-prev"
                onClick={handlePrevious}
                aria-label="Previous partners">←
              </button>
              <div className="slider-viewport">
                <div className="slider-track"
                  style={{
                    transform: `translate3d(-${translateX}px, 0, 0)`,
                    transition: isTransitioning
                      ? `transform ${SLIDE_DURATION}ms cubic-bezier(.22,1,.36,1)`
                      : "none",}}>
                  {filteredPartners.map((partner) => (
                    <article
                      className="partner-slide"
                      key={
                        partner.id ??
                        `${partner.business_name}-${partner.website_url}`
                      }>
                      <div className="partner-card"
                        onClick={() =>
                          openPartnerPopup(partner)
                        }
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) =>
                          handleCardKeyDown(
                            event,
                            partner
                          )
                        }>
                        <div className="partner-image">
                          {partner.banner_image_url && (
                            <img
                              src={
                                partner.banner_image_url
                              }
                              alt={
                                partner.banner_title ||
                                partner.business_name ||
                                "Partner"
                              }/>
                          )}
                          <div className="partner-overlay" />
                          {partner.banner_title && (
                            <h3>
                              {partner.banner_title}
                            </h3>
                          )}
                          {Number(
                            partner.discount_percent
                          ) > 0 && (
                            <div className="discount-badge">
                              <strong>
                                {
                                  partner.discount_percent
                                }
                              </strong>

                              <span>
                                <em>%</em>
                                <em>off</em>
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="partner-content">
                          <div className="partner-logo">
                            {partner.business_logo_url && (
                              <img
                                src={
                                  partner.business_logo_url
                                }
                                alt={`${partner.business_name || "Partner"} logo`}
                              />
                            )}
                          </div>
                          <h4>
                            {partner.business_name}
                          </h4>
                          {partner.business_slogan && (
                            <p>
                              {partner.business_slogan}
                            </p>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <button type="button" className="slider-arrow slider-next"
                onClick={handleNext}
                aria-label="Next partners">→</button>
            </div>
          )}
        </div>
      </section>
      {selectedPartner && (
        <div
          className="partner-modal-overlay"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closePartnerPopup();
            }
          }}>
          <div className="partner-modal"
            role="dialog"
            aria-modal="true"
            aria-label={
              selectedPartner.business_name
            }>
            <div className="partner-modal-header">
              <h2>{selectedPartner.category_title}</h2>
              <button type="button" className="modal-close"
                onClick={closePartnerPopup}
                aria-label="Close">×</button>
            </div>

            <div className="partner-modal-body">
              <div className="partner-modal-info">
                <div className="modal-partner-logo">
                  {selectedPartner.business_logo_url && (
                    <img
                      src={
                        selectedPartner.business_logo_url
                      }
                      alt={
                        selectedPartner.business_name ||
                        "Partner"
                      }/>
                  )}
                </div>
                <div className="modal-partner-heading">
                  <h3>{selectedPartner.business_name}</h3>
                  {selectedPartner.business_slogan && (
                    <p>{selectedPartner.business_slogan}</p>
                  )}
                </div>
                {Number(
                  selectedPartner.discount_percent
                ) > 0 && (
                  <div className="modelAdditionalServiceOffer">
                    <span className="modelAdditionalServiceOfferValue">
                      <b>
                        {selectedPartner.discount_percent}
                      </b>
                      <span className="modelAdditionalServiceOfferSuffix">
                        <span>%</span>
                        <span>off</span>
                      </span>
                    </span>
                    <small>
                      Discount for memate Users
                    </small>
                  </div>
                )}
              </div>
              {selectedPartner.website_url && (
                <div className="modal-website">
                  <a
                    href={
                      selectedPartner.website_url
                    }
                    target="_blank"
                    rel="noopener noreferrer">
                    {selectedPartner.website_url
                      .replace(
                        /^https?:\/\//,
                        ""
                      )
                      .replace(/\/$/, "")}
                  </a>
                  <span>
                    Discount for memate Users{" "}
                    <a
                      href="https://app.memate.com.au/partner-terms-and-conditions.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ( T & C )
                    </a>
                  </span>
                </div>
              )}
              <div className="modal-details-grid">
                <div className="modal-services">
                  <h3>Services</h3>
                  <ul>
                    {selectedPartner.services_text
                      ?.split("\n")
                      .map((item) => item.trim())
                      .filter(Boolean)
                      .slice(0, 8)
                      .map((service, index) => (
                        <li key={index}>
                          {service}
                        </li>
                      ))}
                  </ul>
                  {selectedPartner.services_text
                    ?.split("\n")
                    .map((item) => item.trim())
                    .filter(Boolean).length > 8 && (
                    <details>
                      <summary>
                        See more
                      </summary>
                      <ul>
                        {selectedPartner.services_text
                          ?.split("\n")
                          .map((item) => item.trim())
                          .filter(Boolean)
                          .slice(8)
                          .map(
                            (service, index) => (
                              <li key={index}>
                                {service}
                              </li>
                            )
                          )}
                      </ul>
                    </details>
                  )}
                </div>
                <div className="modal-about">
                  <h3>About</h3>
                  <p>{selectedPartner.about || "No information available."}</p>
                </div>
              </div>
            </div>
            <div className="popupFooterClose">
              <button type="button" className="modal-close1"
                onClick={closePartnerPopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
