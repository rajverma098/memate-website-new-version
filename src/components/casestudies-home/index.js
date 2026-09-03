"use client";

import React, { useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import PlayIconStoke from "../../svg/PlayIconStoke";
import "./case-studies.css";

const caseStudies = [
  {
    slug: "camera-fix",
    poster:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/videoPoster-bg.jpg",
    mobilePoster:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Img.jpg",
    video:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMate+x+Camerafix-vertical_1215-subs.mp4",
    mobileVideo:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/MeMate_x_Camerafix-vertical.mp4",
    title: "Helps us to manage large volume of repairs",
    name: "Porsha",
    role: "Manager",
    logo:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/img-logo+2.png",
  },

  {
    slug: "case-study-provinyl-car-wrapping-business-software",
    poster:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/pro-vinyl-poster.jpg",
    mobilePoster:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/pro-vinyl-poster.jpg",
    video:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/potrait-memate-provinyl.mp4",
    mobileVideo:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/potrait-memate-provinyl.mp4",
    title: "Helps us to manage large volume of repairs",
    name: "Jiri",
    role: "Owner",
    logo:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/img-logo-w_cqeu5t.png",
  },
];

const CaseStudiesHome = () => {
  const router = useRouter();
  const pathname = usePathname();

  const videoRefs = useRef([]);

  // GLOBAL PAGE TOP ON ROUTE CHANGE
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  // HOVER PLAY
  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];

    if (video) {
      video.play().catch(() => {});
    }
  };

  // HOVER STOP
const handleMouseLeave = (index) => {
  const video = videoRefs.current[index];

  if (video) {
    video.pause();

    // RESET VIDEO
    video.currentTime = 0;

    // FORCE POSTER IMAGE SHOW
    video.load();
  }
};

  // PAGE NAVIGATION
  const handleClick = (slug) => {
    // OPEN FROM TOP
    window.scrollTo(0, 0);

    router.push(`/customer-stories/${slug}`);
  };

  return (
    <div className="CaseStudiesSection">
      <div className="section-heading">
        <div className="simpleH2Heading sequel_sans">
        <h5>Hundreds of Australian Businesses <span>Already Made the Switch</span></h5>
         <p>See how they use it to run their business every single day.</p>
        </div>
      </div>

      <div className="CaseStudiesGrid">
        {caseStudies.map((item, index) => (
          <div className="CaseStudiesItem" key={index}>
            <div
              className="imageBox"
              role="button"
              tabIndex={0}
              aria-label={`Open ${item.slug} case study`}
              style={{
                outline: "none",
                cursor: "pointer",
              }}
              onClick={() => handleClick(item.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClick(item.slug);
                }
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* DESKTOP VIDEO */}
              <div className="desktopVersionVideo">
               <video
                ref={(el) => (videoRefs.current[index] = el)}
                width="100%"
                height="100%"
                muted
                loop
                playsInline
                preload="none"
                controls={false}
                poster={item.poster}
              >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* TEXT OVERLAY */}
                <div className="overlyBox overlyBoxText">
                  <p>“{item.title}”</p>

                  <div className="flextText">
                    <span>
                      <em>{item.name},</em> {item.role}
                    </span>

                    <img
                      src={item.logo}
                      alt={item.slug}
                    />
                  </div>
                </div>

                {/* PLAY BUTTON */}
                <div className="overlyBox flextPopupVideo">
                  <div className="flextTextVideo">
                    <span>Play</span>
                    <PlayIconStoke />
                  </div>
                </div>
              </div>

              {/* MOBILE VIDEO */}
              <div className="MobileVersionVideo">
                <video
                  width="100%"
                  height="100%"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  controls={false}
                  poster={item.mobilePoster}
                >
                  <source
                    src={item.mobileVideo}
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.
                </video>

                <div className="overlyBox flextPopupVideo">
                  <div className="flextTextVideo">
                    <span>Play</span>
                    <PlayIconStoke />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesHome;