"use client";

import { useEffect, useState } from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
// import "./EnquiryProfit.css";

const features = [
  {
    image:
      'https://memate-website.s3.ap-southeast-2.amazonaws.com/car-detailing-allinone-img01.jpg',
    title: (
      <>
        Never Miss <br /> a Request
      </>
    ),
    description:
      "Every enquiry captured the moment it comes in — even when you're heads-down on a full wrap.",
  },
  {
    image:
      'https://memate-website.s3.ap-southeast-2.amazonaws.com/car-detailing-allinone-img02.jpg',
    title: (
      <>
        Quote Accurately, <br /> Win More Jobs
      </>
    ),
    description:
      'Set your pricing once. Send locked, professional quotes in minutes — no more guessing and losing jobs on margin.',
  },
  {
    image:
      'https://memate-website.s3.ap-southeast-2.amazonaws.com/car-detailing-allinone-img03.jpg',
    title: (
      <>
        Every Job <br /> On Track
      </>
    ),
    description:
      'See every job, every tech and every deadline on one live schedule — no calls, no surprises.',
  },
  {
    image:
      'https://memate-website.s3.ap-southeast-2.amazonaws.com/car-detailing-allinone-img04.jpg',
    title: (
      <>
        Team &amp; Contractors, <br /> Always Aligned
      </>
    ),
    description:
      'Assign work to staff or contractors, track progress and communicate — all without a single group chat.',
  },
  {
    image:
      'https://memate-website.s3.ap-southeast-2.amazonaws.com/car-detailing-allinone-img05.jpg',
    title: (
      <>
        Know Your Numbers, <br /> Hit Your Targets
      </>
    ),
    description:
      'Live visibility across revenue, costs and margins. Set monthly targets and watch your whole business move toward them — in real time.',
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