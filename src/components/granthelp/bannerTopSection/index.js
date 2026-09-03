import Link from "next/link";
import './bannerstyle.css'
import SalesIcon from "../../../svg/SalesIcon";
import ProfitabilityIcon from "../../../svg/ProfitabilityIcon";
import QuoteIcon from "../../../svg/QuoteIcon";
import CommunicationIcon from "../../../svg/CommunicationIcon";
import ReportingIcon from "../../../svg/ReportingIcon";
import CalculationIcon from "../../../svg/CalculationIcon";
import Scheduling from "../../../svg/Scheduling";
import EmployeesIcon from "../../../svg/EmployeesIcon";
import ManagementIconActive from "../../../svg/ManagementIconActive";
import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
import DarkButtonLauout from "@/layout/hover-button/darkButtonLauout";
import { motion, useAnimation, useMotionValue } from "motion/react";
import { animate } from "motion";
import { useEffect, useMemo, useRef, useState } from "react";

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) {
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch (_) {
    return false;
  }
}

const InfiniteDragCarousel = ({ images, gap = 20 }) => {
  const x = useMotionValue(0);
  const itemRef = useRef(null);
  const containerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const autoRef = useRef(null);

  const repeatedImages = useMemo(() => {
    const copies = 5;
    return Array.from({ length: copies })
      .flatMap(() => images)
      .map((src, idx) => ({ src, key: `${src}-${idx}` }));
  }, [images]);

  useEffect(() => {
    if (!itemRef.current) return;
    const width = itemRef.current.offsetWidth || 0;
    setItemWidth(width);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const update = () => setContainerWidth(element.offsetWidth || 0);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(element);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!itemWidth || images.length === 0) return;
    const wrapSize = images.length * (itemWidth + gap);
    x.set(-wrapSize);
  }, [itemWidth, images.length, gap, x]);

  useEffect(() => {
    if (!itemWidth || images.length === 0) return;
    const wrapSize = images.length * (itemWidth + gap);
    const unsubscribe = x.on("change", (current) => {
      if (current <= -2 * wrapSize) {
        x.set(current + wrapSize);
      } else if (current >= 0) {
        x.set(current - wrapSize);
      }
    });
    return unsubscribe;
  }, [itemWidth, images.length, gap, x]);

  useEffect(() => {
    if (!itemWidth || !containerWidth || images.length === 0) return;
    const step = itemWidth + gap;
    const wrapSize = images.length * step;
    const advanceRight = () => {
      const current = x.get();
      const target = current - step;
      const controls = animate(x, target, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
      controls.finished.then(() => {
        let corrected = x.get();
        if (corrected >= 0) corrected -= wrapSize;
        else if (corrected <= -2 * wrapSize) corrected += wrapSize;
        x.set(corrected);
      });
    };
    autoRef.current = setInterval(advanceRight, 4000);
    return () => {
      if (autoRef.current) {
        clearInterval(autoRef.current);
        autoRef.current = null;
      }
    };
  }, [itemWidth, containerWidth, images.length, gap, x]);

  const snapToNearestCenter = (currentX) => {
    if (!itemWidth || !containerWidth || images.length === 0) return;
    const step = itemWidth + gap;
    const wrapSize = images.length * step;
    const viewportCenter = containerWidth / 2;

    const iFloat = (viewportCenter - itemWidth / 2 - currentX) / step;
    let i = Math.round(iFloat);

    let targetX = viewportCenter - itemWidth / 2 - i * step;

    // if (targetX >= 0) targetX -= wrapSize;
    if (targetX <= -2 * wrapSize) targetX += wrapSize;

    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  return (
    <div className="adminSlideGrid" ref={containerRef}>
      <motion.div
        className="adminSlideTrack"
        drag="x"
        style={{ x, touchAction: "none" }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => {
          if (autoRef.current) {
            clearInterval(autoRef.current);
            autoRef.current = null;
          }
        }}
        onDragEnd={() => {
          snapToNearestCenter(x.get());
          if (!autoRef.current && itemWidth && containerWidth && images.length > 0) {
            const step = itemWidth + gap;
            const wrapSize = images.length * step;
            const restart = () => {
              const current = x.get();
              const target = current - step; 
              const controls = animate(x, target, {
                type: "spring",
                stiffness: 300,
                damping: 30,
              });
              controls.finished.then(() => {
                let corrected = x.get();
                if (corrected >= 0) corrected -= wrapSize;
                else if (corrected <= -2 * wrapSize) corrected += wrapSize;
                x.set(corrected);
              });
            };
            autoRef.current = setInterval(restart, 4000);
          }
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {repeatedImages.map(({ src, key }, index) => (
          <div
            className="adminSlideItem"
            key={key}
            ref={index === 0 ? itemRef : undefined}
          >
            <img src={src} width="100%" alt="Slider01" draggable={false} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const GeandHelpBannerComponent = () => {
  const controls = useAnimation();
  const targetState = { x: 0, y: 0, rotate: 0, opacity: 1 };
  const [copied, setCopied] = useState(false);
  const copiedTimerRef = useRef(null);
  const showCopied = () => {
    if (copiedTimerRef.current) {
      clearTimeout(copiedTimerRef.current);
    }
    setCopied(true);
    copiedTimerRef.current = setTimeout(() => setCopied(false), 1200);
  };
  return (
    <>
      <div className="legalvisionSectionBanner">
        <h2>Smarter. Faster. Digital.</h2>
        <h1 className="smokeyGradient">Run Your Business.</h1>
        <div className="sales-componet-content-wrapper client-component-para">
        <section className="partnerWrap">
            <ul className="leftItems">
              <motion.li
                initial={{ opacity: 0, x: -150, y: -40, rotate: 10 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}
              >
                <span>
                  <SalesIcon alt="Sales icon" />
                </span>
                <p>Sales</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -150, y: -20, rotate: 5 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}
              >
                <span>
                  <ProfitabilityIcon alt="Profitability icon" />
                </span>
                <p>Profitability</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -150, y: 20, rotate: -5 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}
              >
                <span>
                  <QuoteIcon alt="Quote icon" />
                </span>
                <p>Quote</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -150, y: 40, rotate: -10 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}
              >
                <span>
                  <CommunicationIcon alt="Communication icon" />
                </span>
                <p>Communication</p>
              </motion.li>
            </ul>
            <motion.div className="middleItem">
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/partner-banner-img.png"
                width="100%"
                alt="Mockup"
              />

              <motion.div className="activeBusiness"
              //  initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
               animate={controls}
               style={{opacity: 1}}
               viewport={{ once: true, amount: 0.3 }}
              //  onViewportEnter={() => {
              //    controls.start({
              //      ...targetState,
              //      transition: {
              //        duration: 1,
              //        delay: 0.1,
              //        ease: "easeOut",
              //      },
              //    });
              //  }}
               drag
               dragMomentum={false}
               whileDrag={{ zIndex: 1000 }}
               onDragEnd={() => {
                 controls.start({
                   ...targetState,
                   transition: {
                     type: "spring",
                     stiffness: 300,
                     damping: 25,
                   },
                 });
               }}>
                <div className="activeBorder">
                  <ManagementIconActive alt="Management icon" />
                  <p>Management</p>
                </div>
              </motion.div>
            </motion.div>
            <ul className="RightItems">
              <motion.li
                initial={{ opacity: 0, x: 150, y: -40, rotate: -10 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}
              >
                <span>
                  <ReportingIcon alt="Reporting icon" />
                </span>
                <p>Reporting</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 150, y: -20, rotate: -5 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}
              >
                <span>
                  <CalculationIcon alt="Calculation icon" />
                </span>
                <p>Calculation</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 150, y: 20, rotate: 5 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}
              >
                <span>
                  <Scheduling alt="Scheduling icon" />
                </span>
                <p>Scheduling</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 150, y: 40, rotate: 10 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}
              >
                <span>
                  <EmployeesIcon alt="Employees icon" />
                </span>
                <p>Employees</p>
              </motion.li>
            </ul>
          </section>

          <div className="legalvisionbannerbtn">
            <div className="darkButton">
              <Link href="https://app.memate.com.au/onboarding" target="_blank">
                <DarkButtonLauout text="Get started free" />
              </Link>
            </div>
            <span className="saprateSpace">OR</span>
            <div className="lightButton">
              <Link href="tel:0280802100">
                <WhiteButtonBammer text="Quick call" />
              </Link>
            </div>
          </div>
        </div>
        <p>
          Get in touch with our experts above for tailored discovery calls,
          personalized onboarding, and inquiries.
        </p>
        <motion.div
          className="downClickButton"
          animate={{
            y: [0, 12, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ display: "inline-block" }}
        >
          <motion.img
            alt="DownBlackArrow"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg"
            style={{ cursor: "pointer", }}
            onClick={() => {
              document.getElementById("legalvision")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          />
        </motion.div>
      </div>
      <div id="legalvision" className="legalvision-special-sec">
        <div className="legalvision-flex">
          <div className="legalvision-gridL">
             <div className="adminSlideWrap">
             <div className="CMaceWrap">
              <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Free_MacBook_Pro_transparent.png"
              width="100%"
              alt="Free_MacBook_Pro_1+1"
              draggable={false}
                style={{
                  pointerEvents: "none",
                  userSelect: "none",
                  WebkitUserDrag: "none",
                }}
            />
            </div>
            
            <InfiniteDragCarousel
                images={[
                  "/slide-img01.png",
                  "/management.png",
                  "/reporting.png",
                ]}
                gap={36}
              />
             </div>
           
          </div>
          <div className="legalvision-gridR">
            <span>Grant Help: </span>
            <h3>First 3 months 50% disount</h3>
            <div className="listText">
              <ul>
                <li>
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.546 0.0503374C17.3532 1.42674 12.0077 5.10762 7.07881 11.4129L4.16569 8.1801C3.71761 7.66818 2.88553 7.66818 2.43721 8.1801L0.293054 10.5811C-0.123106 11.0611 -0.090946 11.7652 0.357134 12.1814L6.95041 18.5186C7.49449 19.0307 8.39065 18.9026 8.77489 18.2306C12.2957 11.861 16.0726 7.1241 22.4741 1.68258C23.2421 1.01058 22.5379 -0.269823 21.5458 0.0505774L21.546 0.0503374Z"
                      fill="#00B300"
                    />
                  </svg>
                  Guided onboarding included
                </li>
                <li>
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.546 0.0503374C17.3532 1.42674 12.0077 5.10762 7.07881 11.4129L4.16569 8.1801C3.71761 7.66818 2.88553 7.66818 2.43721 8.1801L0.293054 10.5811C-0.123106 11.0611 -0.090946 11.7652 0.357134 12.1814L6.95041 18.5186C7.49449 19.0307 8.39065 18.9026 8.77489 18.2306C12.2957 11.861 16.0726 7.1241 22.4741 1.68258C23.2421 1.01058 22.5379 -0.269823 21.5458 0.0505774L21.546 0.0503374Z"
                      fill="#00B300"
                    />
                  </svg>
                  Training included
                </li>
              </ul>
            </div>
            <p>
              Just use this promo code when creating your account:
              <span style={{ position: "relative", display: "inline-block", marginLeft: 6 }}>
                <motion.strong
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  onClick={async () => {
                    const ok = await copyToClipboard("GH50");
                    if (ok) showCopied();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  GH50
                </motion.strong>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 28, scale: 0.98 }}
                    animate={{ opacity: 1, y: 24, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      left: "15%",
                      transform: "translateX(-50%)",
                      bottom: 0,
                      background: "#111",
                      color: "#fff",
                      borderRadius: 12,
                      padding: "4px 8px",
                      fontSize: 12,
                      lineHeight: 1,
                      pointerEvents: "none",
                      whiteSpace: "nowrap",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                    }}
                  >
                    Copied
                  </motion.span>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeandHelpBannerComponent;
