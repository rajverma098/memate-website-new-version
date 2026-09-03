"use client";

import React, { useEffect, useRef, useState } from "react";
import "./macbookCarousel.css";

export default function MacbookCarousel() {
  const slides = ["https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slide-img01.png", "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slide-img01.png", "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slide-img01.png"];

  // const [index, setIndex] = useState(0);
  // const slideRef = useRef(null);

  // const delay = 6000;

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % slides.length);
  //   }, delay);
  //   return () => clearInterval(id);
  // }, [slides.length]);

  // useEffect(() => {
  //   if (!slideRef.current) return;
  //   slideRef.current.style.transform = `translateX(-${index * 100}%)`;
  // }, [index]);

  return (
    <div className="macbook-wrapper">
      <div className="macbook-frame">
        <img
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Free_MacBook_Pro_transparent.png"
          className="macbook-image"
          alt="macbook-frame"
        />
        {/* <div className="macbook-screenn"> */}
        <div className="carousel-containerr">
          <img className="img1" src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slide-img01.png" alt="slide-1" />
          <img className="img2" src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slide-img01.png" alt="slide-2" />
          <img className="img3" src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slide-img01.png" alt="slide-3" />
          {/* </div> */}
          </div>
        {/* <div className="macbook-screen">
          <div className="carousel-container">
            <div className="carousel-track" ref={slideRef}>
              {slides.map((src, i) => (
                <div className="carousel-slide" key={i}>
                  <img src={src} className="carousel-img" alt={`slide-${i}`} />
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${index === i ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                ></button>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
