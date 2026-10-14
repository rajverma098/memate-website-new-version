"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

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

export default function BusinessFeatures() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          variableWidth: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section className="business-features">
      <div className="business-features__container">
        <div className="business-features__header">
          <h2>
            Run Your Business, <span>All in One Place</span>
          </h2>

          <div className="business-features__arrows">
            <button
              type="button"
              className="slider-arrow slider-arrow--prev"
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous"
            >
              <ArrowLeft size={16} strokeWidth={1.6} />
            </button>

            <button
              type="button"
              className="slider-arrow slider-arrow--next"
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next"
            >
               <ArrowRight size={16} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>

      <div className="business-features__slider-wrapper">
        <Slider
          ref={sliderRef}
          {...settings}
          className="business-features__slider"
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
        </Slider>
      </div>
    </section>
  );
}