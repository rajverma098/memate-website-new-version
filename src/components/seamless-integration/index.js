'use client';
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Image from "next/image";
import gsap from "gsap";

/**
 * @typedef {{ x1:number, y1:number, x2:number, y2:number, id?:string }} Line
 */

const leftTop = [
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/Google_2015_logo+1.png", alt: "Google" },
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/MYOB_Logo+1.png", alt: "MYOB" },
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/Paypal_2014_logo+1.png", alt: "PayPal" },
];

const leftBottom = [
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/Logo_Google_Analytics+1.png", alt: "Google Analytics" },
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/0_PQM2oxNUUceATC30+1.png", alt: "Amazon S3" },
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/2560px-Stripe_Logo%2C_revised_2016+1.png", alt: "Stripe" },
];

const rightTop = [
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/Asana_logo_new+1.png", alt: "Asana" },
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/Frame.png", alt: "Mailchimp" },
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/Frame+(1).png", alt: "Twilio" },
];

const rightBottom = [
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/1024px-Xero_software_logo+1.png", alt: "Xero" },
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/a.png", alt: "QuickBooks" },
  { src: "https://memate-website.s3.ap-southeast-2.amazonaws.com/andmore.png", alt: "And More" },
];

const SeamlessInegration = () => {
  const wrapperRef = useRef(null);
  const centerRef = useRef(null);

  const leftTopRefs = useRef([]);
  const leftBottomRefs = useRef([]);
  const rightTopRefs = useRef([]);
  const rightBottomRefs = useRef([]);

  const [lines, setLines] = useState([]);

  leftTopRefs.current = [];
  leftBottomRefs.current = [];
  rightTopRefs.current = [];
  rightBottomRefs.current = [];

  const add = (arr, id) => (el) => {
    if (!el) return;
    el.dataset.id = id;
    arr.current.push(el);
  };

  /* ---------------- BUILD CONNECTOR LINES ---------------- */
  useEffect(() => {
    const buildLines = () => {
      if (!wrapperRef.current || !centerRef.current) return;

      const wrap = wrapperRef.current.getBoundingClientRect();
      const center = centerRef.current.getBoundingClientRect();

      const centerLeftX = center.left - wrap.left;
      const centerRightX = centerLeftX + center.width;

      const newLines = [];

      const buildSide = (topRefs, bottomRefs, isLeft) => {
        if (!topRefs.length || !bottomRefs.length) return;

        const railY =
          (topRefs[0].getBoundingClientRect().bottom +
            bottomRefs[0].getBoundingClientRect().top) /
            2 -
          wrap.top;

        const drops = [...topRefs, ...bottomRefs].map((el) => {
          const r = el.getBoundingClientRect();
          return {
            x: r.left - wrap.left + r.width / 2,
            y:
              r.top + r.height / 2 < railY
                ? r.bottom - wrap.top
                : r.top - wrap.top,
            id: el.dataset.id,
          };
        });

        const railStartX = isLeft
          ? Math.min(...drops.map((d) => d.x))
          : centerRightX;
        const railEndX = isLeft
          ? centerLeftX
          : Math.max(...drops.map((d) => d.x));

        newLines.push({ x1: railStartX, y1: railY, x2: railEndX, y2: railY });

        drops.forEach((d) => {
          newLines.push({ x1: d.x, y1: d.y, x2: d.x, y2: railY, id: d.id });
        });
      };

      buildSide(leftTopRefs.current, leftBottomRefs.current, true);
      buildSide(rightTopRefs.current, rightBottomRefs.current, false);

      setLines(newLines);
    };

    buildLines();
    window.addEventListener("resize", buildLines);
    return () => window.removeEventListener("resize", buildLines);
  }, []);

  /* ---------------- LINE DRAW ---------------- */
  useEffect(() => {
    gsap.fromTo(
      ".connector",
      { strokeDashoffset: 600 },
      { strokeDashoffset: 0, duration: 1.4, stagger: 0.05, ease: "power2.out" }
    );
  }, [lines]);

  /* ---------------- LOGO PULSE ---------------- */
  useEffect(() => {
    const logos = gsap.utils.toArray(".logo-box");
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } });

    logos.forEach((logo) => {
      tl.to(logo, { scale: 1.08, duration: 0.6 })
        .to(logo, { scale: 1, duration: 0.6 }, "+=0.3");
    });

    return () => tl.kill();
  }, []);

  /* ---------------- MAGNETIC HOVER ---------------- */
  useEffect(() => {
    const strength = 18;

    document.querySelectorAll(".logo-box").forEach((box) => {
      box.addEventListener("mousemove", (e) => {
        const r = box.getBoundingClientRect();
        gsap.to(box, {
          x: (e.clientX - (r.left + r.width / 2)) / strength,
          y: (e.clientY - (r.top + r.height / 2)) / strength,
          duration: 0.3,
        });
      });

      box.addEventListener("mouseleave", () => {
        gsap.to(box, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1,0.4)",
        });
      });
    });
  }, []);

  /* ---------------- CENTER GLOW ---------------- */
  useEffect(() => {
    gsap.fromTo(
      centerRef.current,
      { boxShadow: "0 0 35px rgba(245,179,92,0.6)" },
      {
        boxShadow: "0 0 90px rgba(245,179,92,1)",
        repeat: -1,
        yoyo: true,
        duration: 2.5,
      }
    );
  }, []);

  return (
    <>
    <div className="introTextTop introTextTopIntegration">
      <h4>Built for Modern Australian Businesses</h4>
      <div className="flexTextwrap">
          <div className="flexTextItem">
              <p>meMate is powerful software for business management designed for service-based businesses, agencies, trades, and professional teams that need complete visibility and control over daily operations.</p> 
          </div>
          <div className="flexTextItem">
              <p>From project tracking and team coordination to invoicing and client management, meMate centralizes your workflows in one streamlined platform—helping you save time, improve efficiency, and make smarter business decisions.</p> 
          </div>
      </div>
    </div>
    <section className="integrationOuter">
      <div className="integrationWrapperAni" ref={wrapperRef}>
        <svg className="svg-lines">
          {lines.map((l, i) => (
            <line key={i} {...l} data-id={l.id} className="connector" />
          ))}
        </svg>

        <div className="side">
          <div className="row">
            {leftTop.map((l, i) => (
              <div key={i} ref={add(leftTopRefs, `lt-${i}`)} className="logo-box">
                <Image src={l.src} alt={l.alt} width={80} height={40} />
              </div>
            ))}
          </div>
          <div className="row">
            {leftBottom.map((l, i) => (
              <div key={i} ref={add(leftBottomRefs, `lb-${i}`)} className="logo-box">
                <Image src={l.src} alt={l.alt} width={80} height={40} />
              </div>
            ))}
          </div>
        </div>

        <div className="center-box" ref={centerRef}>
        <Image
  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/Group+20.png"
  alt="MeMate"
  width={120}
  height={120}
/>
        </div>

        <div className="side">
          <div className="row">
            {rightTop.map((l, i) => (
              <div key={i} ref={add(rightTopRefs, `rt-${i}`)} className="logo-box">
               <Image src={l.src} alt={l.alt} width={70} height={36} />
              </div>
            ))}
          </div>
          <div className="row">
            {rightBottom.map((l, i) => (
              <div key={i} ref={add(rightBottomRefs, `rb-${i}`)} className="logo-box">
             <Image src={l.src} alt={l.alt} width={70} height={36} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <div className="introTextTop introTextTopBottom">
      <h4>Replace Multiple Tools with One Smart System</h4>
      <p>Stop managing your business across spreadsheets, CRMs, accounting tools, and task apps.</p>
      <p>meMate is powerful small business management software designed to replace fragmented tools with one unified platform. It centralises your operations, streamlines team collaboration, and connects projects, clients, finances, and communication in a single dashboard.
</p>
    </div>
    </>
  );
};

export default SeamlessInegration;
