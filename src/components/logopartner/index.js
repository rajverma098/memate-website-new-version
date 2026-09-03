import "./brandLogoSlider.css";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";

const LOGOS = [
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/theadLogo.svg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/legalvisionLogo.svg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/sortedLogo.svg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/payComLogo_rfgxh7.svg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/grantHelpLogo.svg",
];

const BrandLogoSlide = () => {
  const DIRECTION = -1; 
  const SPEED_PX_PER_SEC = 40;
  const COPIES = 4;

  const initialItems = useMemo(() => {
    const arr = [];
    let id = 0;
    for (let c = 0; c < COPIES; c++) {
      for (const src of LOGOS) {
        arr.push({ id: id++, src });
      }
    }
    return arr;
  }, []);

  const [logos, setLogos] = useState(initialItems);
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef(null);
  const x = useMotionValue(0);

  const getGapPx = () => {
    if (!trackRef.current) return 0;
    const cs = getComputedStyle(trackRef.current);
    const gapStr = cs.columnGap || cs.gap || "0";
    const parsed = parseFloat(gapStr);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  useAnimationFrame((_, delta) => {
    if (isPaused) return;

    const step = (SPEED_PX_PER_SEC * delta) / 1000 * DIRECTION;
    let next = x.get() + step;

    const trackEl = trackRef.current;
    if (!trackEl) {
      x.set(next);
      return;
    }

    const gapPx = getGapPx();

    if (DIRECTION > 0) {
      let guard = 0;
      while (next >= 0 && trackEl.lastElementChild && guard < 8) {
        const lastEl = trackEl.lastElementChild;
        const lastWidth = Math.round(
          lastEl.getBoundingClientRect().width || 0
        );

        flushSync(() => {
          setLogos((arr) => {
            if (arr.length <= 1) return arr;
            const last = arr[arr.length - 1];
            return [last, ...arr.slice(0, -1)];
          });
        });

        next -= lastWidth + gapPx;
        guard++;
      }
    } else {
      let firstEl = trackEl.firstElementChild;
      let guard = 0;

      while (firstEl && guard < 8) {
        const firstWidth = Math.round(
          firstEl.getBoundingClientRect().width || 0
        );
        const threshold = -(firstWidth + gapPx);

        if (next <= threshold) {
          flushSync(() => {
            setLogos((arr) => {
              if (arr.length <= 1) return arr;
              const [head, ...rest] = arr;
              return [...rest, head];
            });
          });

          next -= threshold;
          firstEl = trackEl.firstElementChild;
          guard++;
        } else {
          break;
        }
      }
    }

    x.set(Math.round(next));
  });

  return (
    <div className="brandLogoSlider">
      <span>Our partners</span>

      <div
        className="brandLogoWrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="brandLogoTrack"
          ref={trackRef}
          style={{ x }}
        >
          {logos.map((item) => (
            <div className="logoItem" key={item.id}>
              <img
                src={item.src}
                alt="Partner logo"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandLogoSlide;
