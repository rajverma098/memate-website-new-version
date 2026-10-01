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
  const mobileVideoRefs = useRef([]);

  /*
   * Scroll to top when route changes
   */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  /*
   * Safari video configuration
   */
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;

      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.loop = true;
    });

    mobileVideoRefs.current.forEach((video) => {
      if (!video) return;

      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.loop = true;
    });
  }, []);

  /*
   * DESKTOP - HOVER PLAY
   */
  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    /*
     * Reset to beginning without calling video.load().
     *
     * Calling load() can cause playback problems in Safari.
     */
    try {
      if (video.readyState >= 1) {
        video.currentTime = 0;
      }
    } catch (error) {
      // Ignore Safari media errors
    }

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  /*
   * DESKTOP - HOVER STOP
   */
  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    video.pause();

    /*
     * Reset video position.
     *
     * DO NOT call video.load().
     */
    try {
      if (video.readyState >= 1) {
        video.currentTime = 0;
      }
    } catch (error) {
      // Ignore Safari media errors
    }
  };

  /*
   * MOBILE VIDEO PLAY
   */
  const handleMobileVideoPlay = (index) => {
    const video = mobileVideoRefs.current[index];

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  /*
   * NAVIGATION
   */
  const handleClick = (slug) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    router.push(`/customer-stories/${slug}`);
  };

  /*
   * KEYBOARD NAVIGATION
   */
  const handleKeyDown = (event, slug) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick(slug);
    }
  };

  return (
    <div className="CaseStudiesSection">

      {/* SECTION HEADING */}
      <div className="section-heading">
        <div className="simpleH2Heading sequel_sans">
          <h5>Case studies</h5>
        </div>
      </div>

      {/* CASE STUDIES */}
      <div className="CaseStudiesGrid">

        {caseStudies.map((item, index) => (
          <div
            className="CaseStudiesItem"
            key={item.slug}
          >
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
              onKeyDown={(event) =>
                handleKeyDown(event, item.slug)
              }
              onMouseEnter={() =>
                handleMouseEnter(index)
              }
              onMouseLeave={() =>
                handleMouseLeave(index)
              }
            >

              {/* ==================================================
                  DESKTOP VIDEO
              ================================================== */}

              <div className="desktopVersionVideo">

                <video
                  ref={(element) => {
                    videoRefs.current[index] = element;
                  }}
                  width="100%"
                  height="100%"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls={false}
                  poster={item.poster}
                  onLoadedMetadata={(event) => {
                    const video = event.currentTarget;

                    /*
                     * Safari-safe properties.
                     */
                    video.muted = true;
                    video.defaultMuted = true;
                    video.playsInline = true;
                    video.loop = true;
                  }}
                >
                  <source
                    src={item.video}
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.
                </video>

                {/* TEXT OVERLAY */}
                <div className="overlyBox overlyBoxText">
                  <p>
                    “{item.title}”
                  </p>

                  <div className="flextText">
                    <span>
                      <em>{item.name},</em>{" "}
                      {item.role}
                    </span>

                    <img
                      src={item.logo}
                      alt={`${item.name} ${item.role}`}
                      loading="lazy"
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

              {/* ==================================================
                  MOBILE VIDEO
              ================================================== */}

              <div className="MobileVersionVideo">

                <video
                  ref={(element) => {
                    mobileVideoRefs.current[index] =
                      element;
                  }}
                  width="100%"
                  height="100%"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  controls={false}
                  poster={item.mobilePoster}
                  onLoadedMetadata={(event) => {
                    const video = event.currentTarget;

                    video.muted = true;
                    video.defaultMuted = true;
                    video.playsInline = true;
                    video.loop = true;

                    /*
                     * Safari may block autoplay even when
                     * muted, so explicitly call play().
                     */
                    const playPromise =
                      video.play();

                    if (
                      playPromise !== undefined
                    ) {
                      playPromise.catch(() => {});
                    }
                  }}
                  onCanPlay={(event) => {
                    const video =
                      event.currentTarget;

                    if (video.paused) {
                      const playPromise =
                        video.play();

                      if (
                        playPromise !== undefined
                      ) {
                        playPromise.catch(() => {});
                      }
                    }
                  }}
                >
                  <source
                    src={item.mobileVideo}
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.
                </video>

                {/* PLAY BUTTON */}
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