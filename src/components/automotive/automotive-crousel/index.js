import React, { useState, useEffect } from "react";
import "./style.css";
import IndustryImages from "../../../assests/industry-images";

const carouselData = [
  {
    heading: "“meMate has completely transformed how we manage repairs and customer communication. The system tracks every job, and clients are updated automatically, cutting our follow-up time in half. We’ve also seen a 30% improvement in overall project efficiency. Highly recommend for any repair business.”",
    logoText: "AO",
    title: "Camera Fix",
    subtitle: "Alex, Owner, Camera Fix",
    rating: 5
  },
  {
    heading: "“Since implementing meMate, our quoting process has become lightning fast. We can generate accurate quotes in under a minute, and customers love the easy approval process. It’s helped us reduce underquoting and boosted our profits by 20%. Game-changer for our car wrapping services!”",
    logoText: "DP",
    title: "PROvinyl",
    subtitle: "Danny, PROvinyl",
    rating: 5
  },
  {
    heading: "“Managing multiple contractors used to be a headache, but meMate’s contractor management tools have made it simple. We now assign tasks, track progress, and get invoices all in one place. It’s helped us run smoother projects and save on admin costs.”",
    logoText: "LD",
    title: "Elite Life",
    subtitle: "Liam, Director, Elite Life",
    rating: 5
  },
  {
    heading: "“With meMate, our team collaboration has never been better. The internal chat and task management features have kept everyone on the same page, improving our turnaround time by 40%. It’s a must-have tool for any creative agency.”",
    logoText: "MC",
    title: "theAd",
    subtitle: "Max, Co-Founder, theAd",
    rating: 5
  },
  {
    heading: "“Thanks to meMate, we’ve been able to track expenses and profitability for each project with incredible accuracy. We’ve tightened our budget control and increased profitability by 25%. It’s a great fit for media production companies.”",
    logoText: "MS",
    title: "Sorted Media",
    subtitle: "Mike, Sorted Media",
    rating: 5
  }
];

const AutomotiveCrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSlide = carouselData[currentIndex];

  return (
    <div
      className="industry-crousel-wrapper"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="industry-crousel-content">
        <span className="industry-crousel-heading">
          {currentSlide.heading}
        </span>
        <div className="industry-crousel-body-content">
          <div className="industry-circle-logo">
            <span>{currentSlide.logoText}</span>
          </div>

          <p className="industry-crousel-1-heading">{currentSlide.title}</p>
          <p className="industry-crousel-1-sub-heading">{currentSlide.subtitle}</p>
          <div className="industry-crousel-star-rating">
            {[...Array(currentSlide.rating)].map((_, i) => (
              <img
                key={i}
                src={IndustryImages.starIcon}
                style={{ height: "20px", width: "20px" }}
                alt="star"
              />
            ))}
          </div>
          <div className="crousel-indication">
            {carouselData.map((_, index) => (
              <div
                key={index}
                className={
                  index === currentIndex
                    ? "crousel-selected-page"
                    : "crousel-non-selected-page"
                }
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomotiveCrousel;
