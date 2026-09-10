"use client";
import React, {useEffect,useMemo,useState,} from "react";
import "./OurPartners.css";
import { partnersData } from "@/data/partnersData";
const CARD_WIDTH = 320;
const CARD_GAP = 24;
const AUTO_PLAY_DELAY = 2800;
const SLIDE_DURATION = 700;

export default function OurPartners() {
  const [categories, setCategories] = useState([]);
  const [partners, setPartners] = useState([]);
  console.log('partners: ', partners);
  const [activeCategory, setActiveCategory] = useState("All Partners");
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      setViewportWidth(width);
      setIsMobile(width <= 767);
    };

    updateSize();
    window.addEventListener(
      "resize",
      updateSize
    );
    return () => {
      window.removeEventListener(
        "resize",
        updateSize
      );
    };
  }, []);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        setLoading(true);
        // const data = await Partners();
        const data = partnersData;
        if (!Array.isArray(data)) {
          throw new Error(
            "Partners data must be an array."
          );
        }
        setCategories(data);
        const allPartners =
          data.flatMap((category) => {
            if (
              !Array.isArray(
                category.partners
              )
            ) {
              return [];
            }
            return category.partners.map(
              (partner) => ({
                ...partner,
                category_id: category.id,
                category_title: category.title,
              })
            );
          });
        setPartners(allPartners);
      } catch (error) {
        console.error(
          "Error loading partners:",
          error
        );
        setCategories([]);
        setPartners([]);
      } finally {
        setLoading(false);
      }
    };
    loadPartners();
  }, []);

  const filteredPartners = useMemo(() => {
    if (
      activeCategory ===
      "All Partners"
    ) {
      return partners;
    }
    return partners.filter(
      (partner) =>
        partner.category_title === activeCategory
    );
  }, [
    partners,
    activeCategory,
  ]);

  const cardsThatFit = useMemo(() => {
    if (isMobile) {
      return 1;
    }
    if (!viewportWidth) {
      return 3;
    }

    const availableWidth =
      Math.min(
        viewportWidth,
        1440
      );

    return Math.max(
      1,
      Math.floor(
        (
          availableWidth +
          CARD_GAP
        ) /
        (
          CARD_WIDTH +
          CARD_GAP
        )
      )
    );

  }, [
    viewportWidth,
    isMobile,
  ]);

  const partnerCount = filteredPartners.length;
  const infinitePartners = useMemo(() => {
    if (!partnerCount) {
      return [];
    }
    return [
      ...filteredPartners,
      ...filteredPartners,
      ...filteredPartners,
    ];
  }, [
    filteredPartners,
    partnerCount,
  ]);

  useEffect(() => {
    if (!partnerCount) {
      setCurrentIndex(0);
      return;
    }

    setIsTransitioning(false);
    setCurrentIndex(
      partnerCount
    );
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    });
  }, [
    activeCategory,
    partnerCount,
  ]);

  const translateX =
    currentIndex *
    (
      CARD_WIDTH +
      CARD_GAP
    );

  const handleNext = () => {
    if (!partnerCount) {
      return;
    }
    setIsTransitioning(true);
    setCurrentIndex(
      (current) =>
        current + 1
    );
  };

  const handlePrevious = () => {
    if (!partnerCount) {
      return;
    }
    setIsTransitioning(true);
    setCurrentIndex(
      (current) =>
        current - 1
    );
  };

  useEffect(() => {
    if (!partnerCount) {
      return;
    }

    if (
      currentIndex >=
      partnerCount * 2
    ) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(
          partnerCount
        );
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, SLIDE_DURATION);
      return () => {
        clearTimeout(timer);
      };
    }
    if (
      currentIndex <
      partnerCount
    ) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(
          partnerCount * 2 - 1
        );
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, SLIDE_DURATION);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [
    currentIndex,
    partnerCount,
  ]);

  // useEffect(() => {

  //   if (
  //     !partnerCount ||
  //     isPaused ||
  //     selectedPartner
  //   ) {
  //     return;
  //   }

  //   const interval =
  //     setInterval(() => {

  //       handleNext();

  //     }, AUTO_PLAY_DELAY);

  //   return () => {
  //     clearInterval(interval);
  //   };

  // }, [
  //   partnerCount,
  //   isPaused,
  //   selectedPartner,
  // ]);

  const openPartnerPopup = (partner) => {
    setSelectedPartner(partner);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setFormErrors({});
    document.body.style.overflow =
      "hidden";
  };
  const closePartnerPopup = () => {
    setSelectedPartner(null);
    setFormErrors({});
    document.body.style.overflow =
      "";
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (
        event.key === "Escape" &&
        selectedPartner
      ) {
        closePartnerPopup();
      }
    };
    document.addEventListener(
      "keydown",
      handleEscape
    );
    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [selectedPartner]);

  const handleFormChange = (event) => {
    const {
      name,
      value,
    } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
    setFormErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName =
        "Please enter your first name.";
    }
    if (!formData.lastName.trim()) {
      errors.lastName =
        "Please enter your last name.";
    }
    if (!formData.email.trim()) {

      errors.email =
        "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      errors.email =
        "Please enter a valid email.";
    }
    if (!formData.phone.trim()) {
      errors.phone =
        "Please enter your phone number.";
    }
    if (!formData.message.trim()) {
      errors.message =
        "Please add a short message.";
    }
    setFormErrors(errors);
    return (
      Object.keys(errors).length === 0
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {

      setSubmitting(true);

      console.log({
        partner_id:
          selectedPartner?.id,
        partner:
          selectedPartner?.business_name,
        ...formData,
      });

      alert(
        "Your request has been submitted successfully."
      );
      closePartnerPopup();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="partners-section">
        <div className="partners-container">
          <h2 className="partners-heading">Our partners</h2>
          <div className="partners-tabs">
            <button type="button" className={`partner-tab ${ activeCategory === "All Partners" ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(
                  "All Partners"
                );
              }}
            >All Partners</button>
            {categories.map(
              (category) => (
                <button
                  type="button"
                  key={category.id}
                  className={`partner-tab ${
                    activeCategory ===
                    category.title
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(
                      category.title
                    );
                  }}>
                  {category.title}
                </button>
              )
            )}
          </div>
        </div>
        <div className="partners-slider-wrapper">
          {loading ? (
            <div className="partners-loading">
              Loading partners...
            </div>
          ) : !partnerCount ? (
            <div className="partners-empty">
              No partners found.
            </div>
          ) : (
            <div
              className="custom-slider"
              onMouseEnter={() =>
                setIsPaused(true)
              }
              onMouseLeave={() =>
                setIsPaused(false)
              }
              onTouchStart={() =>
                setIsPaused(true)
              }
              onTouchEnd={() =>
                setIsPaused(false)
              }
            >
              <button
                type="button"
                className="slider-arrow slider-prev"
                onClick={
                  handlePrevious
                }
                aria-label="Previous partners"
              >
                ←
              </button>
              <div className="slider-viewport">
                <div
                  className="slider-track"
                  style={{
                    transform:
                      `translate3d(-${translateX}px, 0, 0)`,
                    transition:
                      isTransitioning
                        ? `transform ${SLIDE_DURATION}ms ease`
                        : "none",
                  }}
                >
                  {infinitePartners.map(
                    (
                      partner,
                      index
                    ) => (

                      <article
                        className="partner-slide"
                        key={`${partner.id}-${index}`}>
                        <div
                          className="partner-card"
                          onClick={() =>
                            openPartnerPopup(
                              partner
                            )
                          }
                          role="button"
                          tabIndex={0}
                          onKeyDown={(
                            event
                          ) => {

                            if (
                              event.key ===
                                "Enter" ||
                              event.key ===
                                " "
                            ) {
                              event.preventDefault();
                              openPartnerPopup(
                                partner
                              );
                            }
                          }}
                        >
                          <div className="partner-image">
                            <img
                              src={
                                partner.banner_image_url
                              }
                              alt={
                                partner.banner_title ||
                                partner.business_name ||
                                "Partner"
                              }
                            />
                            <div className="partner-overlay" />
                            {partner.banner_title && (
                              <h3>
                                {
                                  partner.banner_title
                                }
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
                              {
                                partner.business_name
                              }
                            </h4>
                            {partner.business_slogan && (
                              <p>
                                {
                                  partner.business_slogan
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      </article>
                    )
                  )}
                </div>
              </div>
              <button
                type="button"
                className="slider-arrow slider-next"
                onClick={
                  handleNext
                }
                aria-label="Next partners"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>
      {selectedPartner && (
        <div
          className="partner-modal-overlay"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closePartnerPopup();
            }
          }}
        >
          <div
            className="partner-modal"
            role="dialog"
            aria-modal="true"
          >
            <div className="partner-modal-header">
              <h2>Request a Callback</h2>
              <button
                type="button"
                className="modal-close"
                onClick={
                  closePartnerPopup
                }
              >
                ×
              </button>
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
                        selectedPartner.business_name
                      }
                    />
                  )}
                </div>
                <div className="modal-partner-heading">
                  <h3>
                    {
                      selectedPartner.business_name
                    }
                  </h3>
                  <p>
                    {
                      selectedPartner.business_slogan
                    }
                  </p>
                </div>
              </div>
              {selectedPartner.website_url && (
                <div className="modal-website">
                  <a
                    href={
                      selectedPartner.website_url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedPartner.website_url
                      .replace(
                        /^https?:\/\//,
                        ""
                      )
                      .replace(
                        /\/$/,
                        ""
                      )}
                  </a>
                </div>
              )}
              <div className="modal-details-grid">
                <div className="modal-services">
                  <h3>Services</h3>
                  <ul>
                    {selectedPartner
                      .services_text
                      ?.split("\n")
                      .filter(Boolean)
                      .slice(0, 8)
                      .map(
                        (
                          service,
                          index
                        ) => (
                          <li
                            key={index}
                          >
                            {service}
                          </li>
                        )
                      )}
                  </ul>
                  {selectedPartner
                    .services_text
                    ?.split("\n")
                    .filter(Boolean)
                    .length > 8 && (
                    <details>
                      <summary>
                        See more
                      </summary>
                      <ul>
                        {selectedPartner
                          .services_text
                          ?.split("\n")
                          .filter(Boolean)
                          .slice(8)
                          .map(
                            (
                              service,
                              index
                            ) => (

                              <li
                                key={index}
                              >
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
                  <p>
                    {
                      selectedPartner.about ||
                      "No information available."
                    }
                  </p>
                </div>
              </div>
              <div className="partner-form-section">
                <h3>Get in Touch</h3>
                <form
                  onSubmit={
                    handleSubmit
                  }
                  noValidate
                >
                  <div className="form-row">
                    <div className="form-field">
                      <label>
                        First Name{" "}
                        <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={
                          formData.firstName
                        }
                        onChange={
                          handleFormChange
                        }
                        placeholder="First Name"
                      />
                      {formErrors.firstName && (
                        <small>
                          {
                            formErrors.firstName
                          }
                        </small>
                      )}
                    </div>
                    <div className="form-field">
                      <label>
                        Last Name{" "}
                        <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={
                          formData.lastName
                        }
                        onChange={
                          handleFormChange
                        }
                        placeholder="Last Name"
                      />
                      {formErrors.lastName && (
                        <small>
                          {
                            formErrors.lastName
                          }
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>
                        Email{" "}
                        <span>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={
                          formData.email
                        }
                        onChange={
                          handleFormChange
                        }
                        placeholder="Email"
                      />
                      {formErrors.email && (
                        <small>
                          {
                            formErrors.email
                          }
                        </small>
                      )}
                    </div>
                    <div className="form-field">
                      <label>
                        Phone{" "}
                        <span>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={
                          formData.phone
                        }
                        onChange={
                          handleFormChange
                        }
                        placeholder="+61"
                      />

                      {formErrors.phone && (
                        <small>
                          {
                            formErrors.phone
                          }
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="form-field">
                    <label>
                      Message{" "}
                      <span>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={
                        formData.message
                      }
                      onChange={
                        handleFormChange
                      }
                      placeholder="Message"
                      rows={5}
                    />

                    {formErrors.message && (
                      <small>
                        {
                          formErrors.message
                        }
                      </small>
                    )}
                  </div>
                  <div className="form-submit">
                    <button
                      type="submit"
                      disabled={
                        submitting
                      }>
                      {submitting
                        ? "Submitting..."
                        : "Request a Call back"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}