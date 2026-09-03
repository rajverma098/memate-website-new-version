import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
import "./style.css";
import Link from "next/link";
import { useEffect, useRef } from "react";

const TryToBestComponent = () => {
  const sectionRef = useRef(null);
  const videoARef = useRef(null);
  const videoBRef = useRef(null);
  const intervalRef = useRef(null);
  const isCyclingRef = useRef(false);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const startCycle = () => {
      if (!videoARef.current || !videoBRef.current || isCyclingRef.current)
        return;

      isCyclingRef.current = true;
      activeIndexRef.current = 0;

      const playCurrent = () => {
        const forwardVideo = videoARef.current;
        const reverseVideo = videoBRef.current;

        if (!forwardVideo || !reverseVideo) return;

        const isForward = activeIndexRef.current === 0;
        const current = isForward ? forwardVideo : reverseVideo;
        const other = isForward ? reverseVideo : forwardVideo;

        try {
          current.currentTime = 0;
        } catch {
        }

        current.style.opacity = "1";
        other.style.opacity = "0";

        other.pause();

        current
          .play()
          .catch(() => {
          });
      };

      playCurrent();

      intervalRef.current = setInterval(() => {
        activeIndexRef.current = (activeIndexRef.current + 1) % 2;
        playCurrent();
      }, 5000);
    };

    const stopCycle = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (videoARef.current) {
        videoARef.current.pause();
      }
      if (videoBRef.current) {
        videoBRef.current.pause();
      }
      isCyclingRef.current = false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCycle();
          } else {
            stopCycle();
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      stopCycle();
    };
  }, []);

  return (
    <>
      <div className="trytobestSection" ref={sectionRef}>
        <div className="trytobestL">
          <div className="img_box">
            <video
              ref={videoARef}
              width="100%"
              height="100%"
              muted
              playsInline
              src="/try-the-best-video.mp4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 1,
                transition: "opacity 0s linear",
              }}
            >
              Your browser does not support the video tag.
            </video>
            <video
              ref={videoBRef}
              width="100%"
              height="100%"
              muted
              playsInline
              src="/try-the-best-video-reversed.mp4"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0,
                transition: "opacity 0s linear",
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="trytobestR">
          <span>Try the Best </span>
          <p>Business Management Software</p>
          <div className="lightButton">
            <Link href="https://memate.com.au/" target="_blank">
              <WhiteButtonBammer text="Find more" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TryToBestComponent;
