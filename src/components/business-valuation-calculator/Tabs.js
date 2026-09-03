"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Tabs({ steps, activeStep, setActiveStep }) {
  const tooltips = [
    "Used to understand trends, not exact accounting figures.",
    "Helps assess how transferable the business is to a new owner.",
    "Different industries carry different risk and growth profiles.",
    "These inputs influence buyer confidence and perceived risk.",
  ];

  const tooltipRef = useRef(null);
  const arrowRef = useRef(null);

  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    above: true,
    left: 0,
    top: 0,
    arrowLeft: 0,
  });

  const TOOLTIP_OFFSET = 12;
  const TOOLTIP_EST_HEIGHT = 80;

  const lastCursorRef = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleMouseMove = (e, index) => {
    const tooltipEl = tooltipRef.current;
    const arrowEl = arrowRef.current;

    if (!tooltipEl || !arrowEl) return;

    const cursorX = e.clientX;
    const cursorY = e.clientY;
    lastCursorRef.current = { x: cursorX, y: cursorY };

    // Prefer above cursor; only show below when there's no space above
    const spaceAbove = cursorY - TOOLTIP_EST_HEIGHT - TOOLTIP_OFFSET;
    const showAbove = spaceAbove >= 0;

    const top = showAbove
      ? cursorY - TOOLTIP_EST_HEIGHT - TOOLTIP_OFFSET
      : cursorY + TOOLTIP_OFFSET;

    setTooltip({
      visible: true,
      text: tooltips[index],
      above: showAbove,
      left: cursorX,
      top,
      arrowLeft: 0,
    });
  };

  // Update arrow position after tooltip renders with new content
  useEffect(() => {
    if (!tooltip.visible || !tooltipRef.current || !arrowRef.current) return;

    const { x: cursorX } = lastCursorRef.current;
    const rect = tooltipRef.current.getBoundingClientRect();
    let arrowX = cursorX - rect.left;
    arrowX = Math.max(12, Math.min(rect.width - 12, arrowX));

    arrowRef.current.style.left = arrowX + "px";
    arrowRef.current.classList.toggle("tooltip-arrow-below", !tooltip.above);
  }, [tooltip.visible, tooltip.text, tooltip.above]);

  const handleLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
    arrowRef.current?.classList.remove("tooltip-arrow-below");
  };

  return (
    <div className="memate-tabs-wrapper">
      <div className="memate-progress">
        <div className="progress-line"></div>
        {steps.map((_, index) => (
          <div
            key={index}
            className={`progress-circle 
            ${index < activeStep ? "done" : ""} 
            ${index === activeStep ? "active" : ""}`}
            >
            {index < activeStep && (
              <svg width="13" height="9" viewBox="0 0 13 9">
                <path
                  d="M11.5002 0.833344L4.16683 8.16668L0.833496 4.83334"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="memate-tabs">
        {steps.map((label, index) => (
          <div
            key={label}
            className="tab-hover-wrapper"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleLeave}>
            <button
              onClick={() => setActiveStep(index)}
              className={`memate-tab-btn ${
                activeStep === index ? "active-tab1" : ""
              }`}>
              <span className="tab-title">{label}</span>
              <span className="tab-subtitle">
                {index === 0 && "Foundational, feels safe"}
                {index === 1 && "Operational reality"}
                {index === 2 && "Risk & multiple"}
                {index === 3 && "This is where the magic"}
              </span>
            </button>
          </div>
        ))}
      </div>
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={tooltipRef}
            className="tab-tooltip-popup"
            style={{
              position: "fixed",
              left: tooltip.left,
              top: tooltip.top,
              opacity: tooltip.visible ? 1 : 0,
              visibility: tooltip.visible ? "visible" : "hidden",
            }}>
            {tooltip.text}
            <div ref={arrowRef} className="tooltip-arrow"></div>
          </div>,
          document.body
        )}
    </div>
  );
}
