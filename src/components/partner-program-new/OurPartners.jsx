"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurPartners.css";

const categories = [
  "All Partners",
  "Finance & Banking",
  "Legal & Compliance",
  "Insurance",
  "Accounting & Tax",
  "Marketing & Sales",
  "Human Resources",
];

const partners = [
  {
    category: "Marketing & Sales",
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/NoirCreative-bg-img.png",
    title: "Social Media Management",
    logo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/NoirCreative-logo.png",
    company: "Noir Creative",
    description: "Professional SMM",
  },
  {
    category: "IT Support",
    image:
     "https://memate-website.s3.ap-southeast-2.amazonaws.com/itsupport-bg-img.png",
    title: "IT Support",
    logo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/itsupport-logo.png",
    company: "Company name",
    description: "Quality never goes out of style",
  },
  {
    category: "Marketing & Sales",
    image:
    "https://memate-website.s3.ap-southeast-2.amazonaws.com/thead-bg-img.png",
    title: "Websites & Digital Support",
    logo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/thead-logo.png",
    company: "theAd",
    description: "Your Go-To Digital Agency",
    discount: "10",
  },
  {
    category: "Marketing & Sales",
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/shorted-bg-img.png",
    title: "Photo & Video",
    logo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/shorted-logo.png",
    company: "Sorted Media",
    description: "For high-quality photography and videography",
    discount: "7.5",
  },
  {
    category: "IT Support",
    image:
     "https://memate-website.s3.ap-southeast-2.amazonaws.com/itsupport-bg-img.png",
    title: "IT Support",
    logo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/itsupport-logo.png",
    company: "Company name",
    description: "Quality never goes out of style",
  },
    {
    category: "Marketing & Sales",
    image:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/shorted-bg-img.png",
    title: "Photo & Video",
    logo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/shorted-logo.png",
    company: "Sorted Media",
    description: "For high-quality photography and videography",
    discount: "7.5",
  },
];

export default function OurPartners() {
  const sliderRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All Partners");

  const filteredPartners =
    activeCategory === "All Partners"
      ? partners
      : partners.filter((item) => item.category === activeCategory);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    centerPadding: '60px',
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: false,
    responsive: [
      {
      breakpoint: 3000,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-heading">
          Our partners
        </h2>
        <div className="partners-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`partner-tab ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="partners-slider-wrapper">
        <Slider
          ref={sliderRef}
          key={activeCategory}
          {...settings}
        >
          {filteredPartners.map((partner, index) => (
            <div className="partner-slide" key={index}>
              <div className="partner-card">
                <div className="partner-image">
                  <img
                    src={partner.image}
                    alt={partner.title}
                  />
                  <div className="partner-overlay" />
                  <h3>
                    {partner.title}
                  </h3>
                  {/* {partner.discount && (
                    <div className="discount-badge">
                      <strong>{partner.discount}</strong>
                      <span><em>%</em><em>off</em></span>
                    </div>
                  )} */}
                  {partner.discount && (
  <div className="discount-badge">
    <strong>{partner.discount}</strong>
    <span>
      <em>%</em>
      <em>off</em>
    </span>
  </div>
)}
                </div>
                <div className="partner-content">
                 <div className="partner-logo">
                  <img
                    src={partner.logo}
                    alt={`${partner.company} logo`}
                  />
                </div>
                  <h4>
                    {partner.company}
                  </h4>
                  <p>
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}