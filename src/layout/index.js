"use client";

import React, { useEffect, useRef } from "react";
import Header from "../components/header";
import HeaderRunYourBusiness from "../components/header2";
import HeaderNewBusiness from "../components/header3";
import Footer from "../components/footer";
import "./style.css";
import "../App.css";
import NextStep from "../components/next-step";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);
const Layout = ({ children }) => {
  const stickySectionRef = useRef(null);
  const buttonRef = useRef(null);
  const pathname = usePathname();
  const isSitemapPage = pathname === "/sitemap";
  const isrunyourbusinessPage = pathname === "/legalvision";
  const isNewBusinessPage = pathname === "/granthelp";
  const isCalculatorPage =
    pathname === "/business-valuation-calculator";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  useEffect(() => {
    const stickySection = stickySectionRef.current;
    if (!stickySection) return;
    const applyContainer =
      document.querySelector(".apply-container");
    const applyContent =
      stickySection.querySelector(".apply-content");
    if (!applyContainer || !applyContent) return;
    const ctx = gsap.context(() => {
      const updateLayout = () => {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        let stickyTop;
        if (vw <= 480) {
          // Mobile
          stickyTop = vh * 0.52;
        } else if (vw <= 768) {
          // Tablet
          stickyTop = vh * 0.50;
        } else if (vw <= 1200) {
          // Laptop
          stickyTop = vh * 0.48;
        } else {
          // Desktop
          stickyTop = vh * 0.30;
        }

        const contentHeight =
          applyContent.offsetHeight;
        const bottomSpace = 20;
        const sectionHeight =
          stickyTop +
          contentHeight / 2 +
          bottomSpace;
        gsap.set(stickySection, {
          height: sectionHeight,
          minHeight: 0,
        });
        gsap.set(applyContent, {
          position: "sticky",
          top: stickyTop,
          yPercent: -30,
        });
      };

      gsap.set(stickySection, {
        autoAlpha: 0,
      });


      gsap.set(buttonRef.current, {
        scale: 1,
      });

      updateLayout();

      gsap.fromTo(
        stickySection,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,

          ease: "none",

          scrollTrigger: {
            trigger: applyContainer,
            start: "bottom 70%",
            end: "bottom 30%",
            scrub: 0.5,
            invalidateOnRefresh: true,
            markers: false,
          },
        }
      );

      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            scale: 0.95,
          },
          {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stickySection,
              start: "top 75%",
              end: "top 50%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      let resizeTimer;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          updateLayout();
          ScrollTrigger.refresh();
        }, 150);
      };

      window.addEventListener(
        "resize",
        handleResize
      );

      const handleLoad = () => {
        updateLayout();

        ScrollTrigger.refresh();
      };

      window.addEventListener(
        "load",
        handleLoad
      );

      requestAnimationFrame(() => {
        updateLayout();

        ScrollTrigger.refresh();
      });

      return () => {
        clearTimeout(resizeTimer);
        window.removeEventListener(
          "resize",
          handleResize
        );
        window.removeEventListener(
          "load",
          handleLoad
        );
      };
    });

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  return (
    <>
      {isrunyourbusinessPage ? (
        <HeaderRunYourBusiness />
      ) : isNewBusinessPage ? (
        <HeaderNewBusiness />
      ) : (
        <Header />
      )}
      <div className="apply-container">
        <div className="children-wrapper children-wrapper-main">
          <div className="children">
            {children}
          </div>
        </div>
      </div>
      {!isSitemapPage &&
        !isrunyourbusinessPage &&
        !isNewBusinessPage &&
        !isCalculatorPage && (
          <div
            ref={stickySectionRef}
            className="sticky-section-switch">
            <div className="apply-content">
              <div className="get-started-wrapper">
                <div className="intro-sticky">
                  <NextStep text="Book a Demo" ref={buttonRef}/>
                </div>
              </div>
            </div>
          </div>
        )}
      <Footer />
    </>
  );
};

export default Layout;