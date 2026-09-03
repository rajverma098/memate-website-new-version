"use client";

import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import MobileScrollSection from "./MobileScrollSection";
import DashboardStats from "./DashboardStats";

const OVERCOME_IMAGE =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img24-min.jpg";

export default function CommonChallengesSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`common-box-wrapper common-challenges-section${
        inView ? " is-in-view" : ""
      }`}
    >
      <div className="common-box1">
        <div className="challenges-text">
          <h3>
            Streamline Your Business <br />
            and Enjoy Full Control
          </h3>
          <p>
            Track, analyze, and manage all your business activities in one clear,
            organized place.
          </p>
        </div>
        <div className="streamlineimggrid streamlineimggrid12">
          <ScrollAnimation />
          <MobileScrollSection />
          <div className="gridboxstreamline item3">
            <DashboardStats visible={inView} />
          </div>
          <div className="gridboxstreamline item4">
            <img
              alt="Overcome challenges caused by manual processes"
              src={OVERCOME_IMAGE}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "auto" }}
            />
            <h4>
              Overcome scaling challenges <br /> caused by manual processes
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
