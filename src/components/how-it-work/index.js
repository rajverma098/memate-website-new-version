"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Tabs from "./Tabs";
import "./HowItWorks.css";
import BackgroundShape from "./BackgroundShape";

const Business = dynamic(() => import("./Business"), {
  ssr: false,
  loading: () => <div className="diagram-loading" aria-live="polite">Loading...</div>,
});

const WorkTabs = dynamic(() => import("./WorkTabs"), {
  ssr: false,
  loading: () => <div className="diagram-loading" aria-live="polite">Loading...</div>,
});

function isSafariBrowser() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return (
    /safari/i.test(ua) &&
    !/chrome|chromium|crios|fxios|edg|edgios|android/i.test(ua)
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [safariLite, setSafariLite] = useState(false);

  useLayoutEffect(() => {
    const safari = isSafariBrowser();
    setSafariLite(safari);
    if (safari) {
      document.documentElement.classList.add("is-safari");
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const tabs = [
    {
      id: "business",
      label: "Business",
      Component: Business,
    },
    {
      id: "work",
      label: "Work",
      Component: WorkTabs,
    },
    {
      id: "enquiry",
      label: "Enquiry",
    },
    {
      id: "assets",
      label: "Assets",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`how-it-works-wrapper hero-section${isInView ? " is-in-view" : ""}`}
    >
       {safariLite ? (
         <div className="hero-bg hero-bg-lite" aria-hidden="true" />
       ) : (
         <BackgroundShape className="hero-bg" />
       )}
     <div className="hero-content">
      <div className="how-it-works-header">
              <h2>meMate</h2>
              <div className="sales-heading-works gradientText"> How it works </div>
            </div>
            <Tabs tabs={tabs} />
      </div>
    </section>
  );
}