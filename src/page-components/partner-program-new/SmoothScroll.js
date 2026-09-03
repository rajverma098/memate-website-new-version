"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function isSafari() {
  const ua = navigator.userAgent;
  return (
    /safari/i.test(ua) &&
    !/chrome|chromium|crios|fxios|edg|edgios|android/i.test(ua)
  );
}

function wheelDeltaPx(event) {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 16;
  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
    return event.deltaY * window.innerHeight;
  }
  return event.deltaY;
}

function isSafariTrackpad(event) {
  if (event.ctrlKey) return true;
  if (Math.abs(event.deltaX) > 0.25) return true;
  if (event.deltaMode !== WheelEvent.DOM_DELTA_PIXEL) return false;

  const dy = Math.abs(event.deltaY);
  if (dy > 0 && dy < 40) return true;
  if (Math.abs(event.deltaY - Math.round(event.deltaY)) > 0.001) return true;

  const wheelDelta = event.wheelDelta;
  if (
    typeof wheelDelta === "number" &&
    wheelDelta !== 0 &&
    wheelDelta % 120 !== 0
  ) {
    return true;
  }

  return false;
}

export default function SmoothScroll() {
  useEffect(() => {
    const safari = isSafari();
    if (safari) {
      document.documentElement.classList.add("is-safari");
    }

    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothWheel: !safari,
      smoothTouch: !safari,
      syncTouch: false,
    });

    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };
    animationFrame = requestAnimationFrame(raf);

    let inputLock = null;
    let lockTimer = null;

    const onSafariWheel = (event) => {
      if (event.ctrlKey) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const trackpad = isSafariTrackpad(event);

      if (inputLock === null) {
        inputLock = trackpad ? "trackpad" : "mouse";
      }

      if (lockTimer) window.clearTimeout(lockTimer);
      lockTimer = window.setTimeout(() => {
        inputLock = null;
        lockTimer = null;
      }, 180);

      if (inputLock === "trackpad") return;

      event.preventDefault();
      event.stopPropagation();
      lenis.scrollTo(lenis.targetScroll + wheelDeltaPx(event) * 1.2, {
        duration: 1.2,
      });
    };

    if (safari) {
      window.addEventListener("wheel", onSafariWheel, {
        passive: false,
        capture: true,
      });
    }

    return () => {
      if (lockTimer) window.clearTimeout(lockTimer);
      if (safari) {
        window.removeEventListener("wheel", onSafariWheel, { capture: true });
      }
      cancelAnimationFrame(animationFrame);
      document.documentElement.classList.remove("is-safari");
      lenis.destroy();
    };
  }, []);

  return null;
}
