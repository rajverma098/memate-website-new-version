"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./ListIndustriesSlider.css";

const cards = [
  {
    id: 1,
    tags: ["Recurring jobs", "Mobile teams"],
    title: "Cleaning Companies",
    description:
      "Schedule regular cleans, send your teams out with job details, and invoice straight after each visit.",
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/industries-grid-img01.png",
    href: "/cleaning-companies",
    theme: "#BBE8FE",
  },
  {
    id: 2,
    tags: ["Fast quotes", "Crews & trucks"],
    title: "Removalists",
    description:
      "Quote moves quickly, assign crews and vehicles, and track every job from booking to final invoice.",
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/industries-grid-img2.png",
    href: "/removalists",
    theme: "#FFE1BD",
  },
  {
    id: 3,
    tags: ["Landscapers & Lawn", "Scheduling & Crews"],
    title: "Landscapers",
    description:
      "Schedule recurring jobs, quote on the spot and manage your crew — from the first enquiry to the final invoice.",
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/industries-grid-img3.png",
    href: "/landscaping-business-software",
    theme: "#BBE8FE",
  },
  {
    id: 4,
    tags: ["Vehicle wrap", "Contractor & Invoicing"],
    title: "Car Detailing",
    description:
      "Business management software for Australian car detailing and vehicle wrapping businesses.",
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/industries-grid-img4.png",
    href: "/car-detailing-software",
    theme: "#FFE1BD",
  },
];

export default function ListIndustriesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const update = () => {
      setIsMobile(mq.matches);
      // Reset slider position when leaving mobile
      if (!mq.matches) setCurrentIndex(0);
    };

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const maxIndex = Math.max(0, cards.length - 1);

  const handleNext = () => {
    setCurrentIndex((c) => Math.min(c + 1, maxIndex));
  };
  const handlePrevious = () => {
    setCurrentIndex((c) => Math.max(c - 1, 0));
  };

  return (
    <section className="apple-facts enquiry-profit1">
      <div className="apple-facts-inner">
        <div className="enquiry-profit__container">
          <div className="enquiry-profit__header">
            <h2 className="enquiry-profit__heading">Industries</h2>

            {isMobile && (
              <div className="enquiry-profit__arrows">
                <button
                  type="button"
                  className="enquiry-profit__arrow"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  aria-label="Previous"
                >
                  <ArrowLeft size={16} strokeWidth={1.6} />
                </button>
                <button
                  type="button"
                  className="enquiry-profit__arrow"
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  aria-label="Next"
                >
                  <ArrowRight size={16} strokeWidth={1.6} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="apple-facts-slider">
          <div
            className="apple-facts-track listIndustriesSlider__track"
            style={{ "--current-index": String(currentIndex) }}
          >
            {cards.map((card) => (
              <article
                key={card.id}
                className="listIndustriesSlider__card"
                style={{ backgroundColor: card.theme }}
              >
                <div className="listIndustriesSlider__tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="listIndustriesSlider__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="listIndustriesSlider__imageWrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="listIndustriesSlider__image"
                  />
                  <a
                    href={card.href}
                    className="listIndustriesSlider__readMore"
                  >
                    <span>Read more</span>
                    <span className="listIndustriesSlider__readMoreArrow">
                      <ArrowRight size={16} strokeWidth={1.6} />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}