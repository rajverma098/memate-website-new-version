"use client";

import * as React from "react";
import { useState } from "react";
import DiagramTooltip from "./DiagramTooltip";

// ------------------------------------------------------------------
// Card metadata — box coords match your original layout exactly
// ------------------------------------------------------------------
const tooltipData = [
  { title: "Project Description / Location", description: "Full project details including description, address and location pinning.", color: "#825fd8", bg: "#f7f3fd", stroke: "#825fd8", textColor: "#6c48c3", icon: "folder",    box: { x: 400, y: 100, width: 297, height: 52 } },
  { title: "Project",                        description: "All your ongoing projects in one timeline — clear and visible.",        color: "#22c55e", bg: "#f0fdf4", stroke: "#22c55e", textColor: "#1da750", icon: "folder",    box: { x: 419, y: 0,  width: 126, height: 52 } },
  { title: "Tasks",                          description: "Manage and track tasks across all your active projects.",               color: "#818cf8", bg: "#eef2ff", stroke: "#818cf8", textColor: "#4f46e5", icon: "chart",     box: { x: 876, y: 70,  width: 117, height: 52 } },
  { title: "Notes / Photos / Files",         description: "Attach notes, photos and files directly to your projects for easy reference.", color: "#3477c5", bg: "#f1f5fd", stroke: "#3477c5", textColor: "#3477c5", icon: "paperclip", box: { x: 129, y: 100, width: 224, height: 52 } },
  { title: "Time Sheet / Invoice",           description: "Timesheets and invoices are generated automatically once a job is approved.", color: "#2dd4bf", bg: "#f0fdfa", stroke: "#2dd4bf", textColor: "#0f9887", icon: "invoice",   box: { x: 768, y: 204, width: 227, height: 52 } },
  { title: "Contractor / Employee",          description: "Flexibly assign each job to a contractor or employee as needed.",       color: "#f670c7", bg: "#fce7f6", stroke: "#faa7e0", textColor: "#d24ea3", icon: "person",    box: { x: 252, y: 204, width: 242, height: 52 } },
  { title: "Job Approval",                   description: "Review and approve completed jobs before triggering payment.",           color: "#34d399", bg: "#ecfdf5", stroke: "#34ce95", textColor: "#059669", icon: "check",     box: { x: 545, y: 204, width: 172, height: 52 } },
  { title: "New Job / Shift",                description: "Create new jobs or shifts and assign them to your team instantly.",     color: "#f59e0b", bg: "#fffbeb", stroke: "#ef9b0b", textColor: "#d97706", icon: "briefcase", box: { x: 25,  y: 204, width: 178, height: 52 } },
  { title: "Chat",                 description: "Stay connected with your team and get help whenever you need it.",       color: "#84cc16", bg: "#f6ffe9", stroke: "#84cc16", textColor: "#71aa19", icon: "chat",      box: { x: 876, y: 0,  width: 121, height: 52 } },
];

// ------------------------------------------------------------------
// Dashed connector paths — from your original file
// ------------------------------------------------------------------
const connectorLines = [
  { d: "M498.5 230 H542.5",                                              color: "#825fd8", dotDur: 5.0, delay: 0.0 },
  { d: "M205.5 230 H250",                                                color: "#f670c7", dotDur: 6.5, delay: 0.4 },
  { d: "M353.5 128 H398",                                                color: "#3477c5", dotDur: 5.0, delay: 1.2 },
  { d: "M483 57 V75 C483 81 488 84 495 84 H534 C543 84 550 91 550 100",  color: "#22c55e", dotDur: 7.5, delay: 1.6 },
  { d: "M465 200 C466 171 458 175 538 175 550 175 549 175 549 154",     color: "#34d399", dotDur: 4.5, delay: 0.3 },
  { d: "M720.5 230 H764.85",                                             color: "#2dd4bf", dotDur: 8.5, delay: 0.9 },
  { d: "M544 25 C872 27 842 -1 840 207",                                 color: "#818cf8", dotDur: 6.0, delay: 1.1 },
  { d: "M374 200 V94 C375 22 373 23 395 23 H415",                        color: "#f59e0b", dotDur: 7.0, delay: 0.6 },
];

// ------------------------------------------------------------------
// Icons — 20×20 stroke icons
// ------------------------------------------------------------------
const Icon = ({ name, color, size = 20 }) => {
  const c = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: color, strokeWidth: 1.6,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "folder":
      return (<svg {...c}><path d="M4 7a2 2 0 0 1 2-2h3l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"/></svg>);
    case "chart":
      return (<svg {...c}><path d="M5 21V9M12 21V4M19 21v-9"/></svg>);
    case "paperclip":
      return (<svg {...c}><path d="M20 12l-8 8a4 4 0 0 1-6-6l8-8a3 3 0 1 1 4 4L10 18a1.5 1.5 0 0 1-2-2l7-7"/></svg>);
    case "invoice":
      return (<svg {...c}><path d="M5 4h12a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V6a2 2 0 0 1 2-2z"/><path d="M9 9h6M9 13h6"/></svg>);
    case "person":
      return (<svg {...c}><circle cx="12" cy="8" r="3"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>);
    case "check":
      return (<svg {...c}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12l3 3 5-6"/></svg>);
    case "briefcase":
      return (<svg {...c}><rect x="3" y="8" width="18" height="11" rx="2"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>);
    case "chat":
      return (<svg {...c}><path d="M4 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-3 3v-3H6a2 2 0 0 1-2-2V6z"/><path d="M18 8h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3-3"/></svg>);
    default: return null;
  }
};

const WorkTabs = (props) => {
  const [activeBox, setActiveBox] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const handleEnter = (index, event) => {
    const bounds = event.currentTarget.ownerSVGElement.getBoundingClientRect();
    const item = tooltipData[index];
    setActiveBox(index);
    setTooltip({
      ...item,
      x: `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
      y: `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
    });
  };
  const handleLeave = () => {
    setActiveBox(null);
    setTooltip(null);
  };

  return (
    <div className="workTabsWrapper">
      <style>{`
        @keyframes flowDot {
          0%   { offset-distance: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .flow-dot {
          offset-rotate: 0deg;
          animation-name: flowDot;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -200; }
        }
      `}</style>

      <svg
        width={1100}
        height={500}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1100 500"
        preserveAspectRatio="xMidYMid meet"
        {...props}
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {connectorLines.map((c, i) => (
            <path key={`flow-path-${i}`} id={`flow-path-${i}`} d={c.d} />
          ))}
          <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ---------- DASHED CONNECTOR LINES ---------- */}
        {connectorLines.map((c, i) => (
          <path
            key={`line-${i}`}
            d={c.d}
            fill="none"
            stroke="white"
            strokeWidth="1"
            opacity="0.75"
            style={{
              strokeDasharray: "3 5",
              animation: `dashMove 18s linear infinite`,
              animationDelay: `${c.delay}s`,
            }}
          />
        ))}

        {/* ---------- CARDS ---------- */}
        {tooltipData.map((item, index) => {
          const isActive = activeBox === index;
          const { x, y, width, height } = item.box;

          return (
            <g
              key={index}
              onMouseEnter={(e) => handleEnter(index, e)}
              onMouseLeave={handleLeave}
              style={{ cursor: "pointer" }}
            >
              {/* Card body */}
              <rect
                x={x} y={y} width={width} height={height}
                rx={12}
                fill={isActive ? item.color : item.bg}
                stroke={isActive ? item.color : item.stroke}
                strokeWidth="1.2"
                strokeDasharray={isActive ? "0" : "2 2"}
                style={{ transition: "fill .15s ease, stroke .15s ease" }}
              />

              {/* Icon */}
              <g transform={`translate(${x + 14}, ${y + 16})`}>
                <Icon
                  name={item.icon}
                  color={isActive ? "#ffffff" : item.textColor}
                  size={20}
                />
              </g>

              {/* Label */}
              <text
                x={x + 42}
                y={y + height / 2 + 5}
                fontSize="13"
                fontWeight="600"
                fontFamily="system-ui, -apple-system, sans-serif"
                fill={isActive ? "#ffffff" : item.textColor}
                style={{ pointerEvents: "none", userSelect: "none" }}
              >
                {item.title}
              </text>
            </g>
          );
        })}

        {/* ---------- MOVING DOTS ---------- */}
        {connectorLines.map((c, i) => (
          <circle
            key={`dot-${i}`}
            r="3"
            fill={c.color}
            filter="url(#dot-glow)"
            className="flow-dot"
            style={{
              offsetPath: `path("${c.d}")`,
              animationDuration: `${c.dotDur}s`,
              animationDelay: `${c.delay}s`,
            }}
          />
        ))}
        {connectorLines.map((c, i) => (
          <circle
            key={`dot2-${i}`}
            r="2"
            fill={c.color}
            fillOpacity="0.55"
            className="flow-dot"
            style={{
              offsetPath: `path("${c.d}")`,
              animationDuration: `${c.dotDur}s`,
              animationDelay: `${c.delay + c.dotDur / 2}s`,
            }}
          />
        ))}
      </svg>

      <DiagramTooltip tooltip={tooltip} />
    </div>
  );
};

export default WorkTabs;