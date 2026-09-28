"use client";

import { useEffect, useState } from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
// import "./EnquiryProfit.css";

const features = [
  {
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img01.jpg",
    title: (
      <>
        Never Miss <br /> a Request
      </>
    ),
    description:
      "Every enquiry captured and tracked from the moment it comes in.",
  },
  {
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img02.jpg",
    title: (
      <>
        Quote Faster, <br /> Win More Jobs
      </>
    ),
    description:
      "Send professional quotes in minutes — straight from your phone.",
  },
  {
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img03.jpg",
    title: (
      <>
       Every Job <br /> On Track
      </>
    ),
    description:
      "Manage every project from start to finish without lifting a phone call.",
  },
  {
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img04.jpg",
     title: (
      <>
        Your Team,<br /> Always Aligned
      </>
    ),
    description:
      "Assign jobs, track progress and communicate — all in one place.",
  },
  {
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img05.jpg",
    title: "Run Your Business",
     title: (
      <>
        See Your Whole <br /> Business At a Glance
      </>
    ),
    description:
      "Real time visibility across every job, quote and payment. Always.",
  },
  {
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img03.jpg",
    title: (
      <>
       Every Job <br /> On Track
      </>
    ),
    description:
      "Manage every project from start to finish without lifting a phone call.",
  },
];



export default function BusinessFeaturesSlider() {
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
    features.length - visibleCards
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
    <section className="apple-facts enquiry-profit">
      <div className="apple-facts-inner">
  <div className="enquiry-profit__container">
    <div className="enquiry-profit__header">
      <h2 className="enquiry-profit__heading">
        Run Your Business, <span>All in One Place</span>
      </h2>
       <div className="enquiry-profit__arrows">
          <button
            type="button"
            className={`enquiry-profit__arrow ${
              currentIndex === 0 ? "disabled" : ""
            }`}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
             <ArrowRight size={16} strokeWidth={1.6} />
          
          </button>
          <button
            type="button"
            className={`enquiry-profit__arrow ${
              currentIndex === maxIndex ? "disabled" : ""
            }`}
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Next">
           <ArrowLeft size={16} strokeWidth={1.6} />
          </button>
        </div>
    </div>
    
  </div>
        <div className="apple-facts-slider">

    <div
  className="apple-facts-track"
  style={{
              "--current-index": currentIndex,
            }}
>
   {features.map((item, index) => (
            <div className="business-features__slide" key={index}>
              <article className="business-card">
                <div className="business-card__image">
                  <img src={item.image} alt={item.title} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            </div>
          ))}
            </div>
        </div>
      </div>
    </section>
  );
}