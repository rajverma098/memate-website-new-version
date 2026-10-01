"use client";
import { useEffect, useState } from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
import "./ListIndustriesSlider.css";

const cards = [
  {
    id: 1,
    tags: ["Recurring jobs", "Mobile teams"],
    title: "Cleaning Companies",
    description:
      "Schedule regular cleans, send your teams out with job details, and invoice straight after each visit.",
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaningListCard01.png",
    href: "/cleaning-companies",
    theme: "#BBE8FE",
  },
  {
    id: 2,
    tags: ["Fast quotes", "Crews & trucks"],
    title: "Removalists",
    description:
      "Quote moves quickly, assign crews and vehicles, and track every job from booking to final invoice.",
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaningListCard02.png",
    href: "/removalists",
    theme: "#FFE1BD",
  },

 
];

export default function ListIndustriesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const visibleCards = isMobile ? 1 : 3.5;

  const maxIndex = Math.max(
    0,
    cards.length - visibleCards
  );
  useEffect(() => {
    setCurrentIndex((current) =>
      Math.min(current, maxIndex)
    );
  }, [maxIndex]);

  const handleNext = () => {
    setCurrentIndex((current) =>
      Math.min(current + 1, maxIndex)
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((current) =>
      Math.max(current - 1, 0)
    );
  };

  return (
    <section className="apple-facts enquiry-profit1">
      <div className="apple-facts-inner">
        <div className="enquiry-profit__container">
          <div className="enquiry-profit__header">
            <h2 className="enquiry-profit__heading">
              Industries
            </h2>
            <div className="enquiry-profit__arrows">
              <button
                type="button"
                className="enquiry-profit__arrow"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                aria-label="Previous">
                   <ArrowLeft size={16} strokeWidth={1.6} />
              
              </button>
              <button
                type="button"
                className="enquiry-profit__arrow"
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                aria-label="Next">
                <ArrowRight size={16} strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>
        <div className="apple-facts-slider">
          <div
            className="apple-facts-track listIndustriesSlider__track"
            style={{
              "--current-index": currentIndex,
            }}
          >
            {cards.map((card) => {
              return (
               <article
  key={card.id}
  className="listIndustriesSlider__card"
  style={{ backgroundColor: card.theme }}
>
                    
                 
                   <div className="listIndustriesSlider__tags">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="listIndustriesSlider__tag">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}