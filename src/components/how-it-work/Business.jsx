import * as React from "react";
import { useState } from "react";
import DiagramTooltip from "./DiagramTooltip";

const tooltipData = [
  { heading: "Supplier Database", paragraph: "All your contractors and suppliers with full order history and contacts.", color: "#6C48C3" },
  { heading: "Sales - Quotes", paragraph: "Where all your quotes are waiting to be calculated or approved.", color: "#0284C7" },
  { heading: "Project", paragraph: "All your ongoing projects in one timeline — clear and visible.", color: "#16A34A" },
  { heading: "Internal Chat", paragraph: "For all your team to communicate internally.", color: "#65A30D" },
  { heading: "Client Database", paragraph: "All client history and contacts for all your clients, stored in one place.", color: "#2563EB" },
  { heading: "Expense", paragraph: "All your bills from all team members, linked to projects or monthly ongoings before they can be processed.", color: "#EF4444" },
  { heading: "Request", paragraph: "All requests coming into one place from your websites, forms or social media.", color: "#F97368" },
  { heading: "Invoicing", paragraph: "Create invoices, send to clients, send statements and reminders with one click.", color: "#14B8A6" },
  { heading: "Employees", paragraph: "Assign shifts to your employees with ease.", color: "#64748B" },
  { heading: "Contractors", paragraph: "Assign jobs to your contractors based on hourly or fixed rate.", color: "#DB5AA7" },
  { heading: "Statistics", paragraph: "Simple yet comprehensive — real-time stats of your business activity.", color: "#E08D16" },
];

// ------------------------------------------------------------------
// Dashed connector lines — same coords as your original.
// Each line now has its own dash + dot speed (dashDur & dotDur),
// its own delay, and its own dot color.
// ------------------------------------------------------------------
const connectorLines = [
  { d: "M518 62 V106",       color: "#6C48C3", dashDur: 14, dotDur: 4.0, delay: 0.0 }, // Supplier ↓
  { d: "M409 237 H453",      color: "#0284C7", dashDur: 22, dotDur: 6.5, delay: 0.4 }, // → Sales
  { d: "M491.809 266 V319",  color: "#DB5AA7", dashDur: 18, dotDur: 5.0, delay: 1.2 }, // Project ↓ Contractors
  { d: "M473.809 319 V266",  color: "#16A34A", dashDur: 26, dotDur: 7.5, delay: 1.6 }, // Contractors ↑ Project
  { d: "M556 266 V319",      color: "#DB5AA7", dashDur: 16, dotDur: 4.5, delay: 0.3 }, // Project ↓ Contractors (2)
  { d: "M538 319 V266",      color: "#16A34A", dashDur: 30, dotDur: 8.5, delay: 0.9 }, // Contractors ↑ Project (2)
  { d: "M585 237 H629",      color: "#14B8A6", dashDur: 20, dotDur: 6.0, delay: 1.1 }, // → Invoicing
  { d: "M519 164 V208",      color: "#3477C5", dashDur: 24, dotDur: 7.0, delay: 0.6 }, // Client ↓ Sales
  { d: "M313 208 V164",      color: "#3477C5", dashDur: 28, dotDur: 8.0, delay: 1.5 }, // Sales ↑ Client
  { d: "M175 237 H219",      color: "#0284C7", dashDur: 19, dotDur: 5.5, delay: 0.8 }, // Request → Sales
];

const Business = (props) => {
  const [activeBox, setActiveBox] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const showTooltip = (index, event) => {
    const bounds = event.currentTarget.ownerSVGElement.getBoundingClientRect();
    setActiveBox(index);
    setTooltip({
      title: tooltipData[index].heading,
      description: tooltipData[index].paragraph,
      color: tooltipData[index].color,
      x: `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
      y: `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
    });
  };
  const hideTooltip = () => {
    setActiveBox(null);
    setTooltip(null);
  };

  return (
    <div className="business-diagram">
      <style>{`
        /* --- slow-motion flow dot --- */
        @keyframes flowDotSlow {
          0%   { offset-distance: 0%;   opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .flow-dot-slow {
          offset-rotate: 0deg;
          animation-name: flowDotSlow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <svg
        width={1100}
        height={600}
        viewBox="0 0 1100 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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

        {/* ============================================
            CARDS (identical to your file)
            ============================================ */}

        {/* CARD 0 — SUPPLIER DATABASE */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(0, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={413} y={7} width={211} height={52} rx={12} fill={activeBox === 0 ? "#825FD8" : "#F7F3FD"} />
          <rect x={413.5} y={7.5} width={210} height={51} rx={11.5} stroke="#825FD8" strokeDasharray="2 2" />
          <g stroke={activeBox === 0 ? "#ffffff" : "#6C48C3"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <circle cx="443" cy="26" r="2.5" />
            <circle cx="437" cy="38" r="2.5" />
            <circle cx="449" cy="38" r="2.5" />
            <path d="M443 28.5V33M443 33L439 35.5M443 33l4 2.5" />
          </g>
          <text x={463} y={37} fill={activeBox === 0 ? "#ffffff" : "#6C48C3"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Supplier Database
          </text>
        </g>

        {/* CARD 1 — SALES - QUOTES */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(1, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={222} y={211} width={184} height={52} rx={12} fill={activeBox === 1 ? "#0284C7" : "#F0F9FF"} />
          <rect x={222.5} y={211.5} width={183} height={51} rx={11.5} stroke={activeBox === 1 ? "#ffffff" : "#38BDF8"} strokeDasharray="2 2" />
          <g stroke={activeBox === 1 ? "#ffffff" : "#0284C7"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <rect x="240" y="227" width="18" height="20" rx="2" />
            <path d="M245 233h8M245 238h8M245 243h5" />
          </g>
          <text x={270} y={241} fill={activeBox === 1 ? "#ffffff" : "#0284C7"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Sales - Quotes
          </text>
        </g>

        {/* CARD 2 — PROJECT */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(2, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={456} y={211} width={126} height={52} rx={12} fill={activeBox === 2 ? "#16A34A" : "#F0FDF4"} />
          <rect x={456.5} y={211.5} width={125} height={51} rx={11.5} stroke="#22C55E" strokeDasharray="2 2" />
          <g stroke={activeBox === 2 ? "#ffffff" : "#22C55E"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M476 227h6l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2z" />
          </g>
          <text x={506} y={241} fill={activeBox === 2 ? "#ffffff" : "#16A34A"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Project
          </text>
        </g>

        {/* CARD 3 — INTERNAL CHAT */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(3, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={772} y={7} width={170} height={52} rx={12} fill={activeBox === 3 ? "#65A30D" : "#F6FFE9"} />
          <rect x={772.5} y={7.5} width={169} height={51} rx={11.5} stroke="#84CC16" strokeDasharray="2 2" />
          <g stroke={activeBox === 3 ? "#ffffff" : "#65A30D"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M792 25h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-3 3v-3h-2a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z" />
            <path d="M808 28h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v3l-3-3" />
          </g>
          <text x={828} y={37} fill={activeBox === 3 ? "#ffffff" : "#65A30D"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Internal Chat
          </text>
        </g>

        {/* CARD 4 — CLIENT DATABASE */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(4, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={217} y={109} width={193} height={52} rx={12} fill={activeBox === 4 ? "#2563EB" : "#F1F5FD"} />
          <rect x={217.5} y={109.5} width={192} height={51} rx={11.5} stroke="#3477C5" strokeDasharray="2 2" />
          <g stroke={activeBox === 4 ? "#ffffff" : "#3477C5"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <circle cx="243" cy="129" r="3" />
            <path d="M237 141a6 6 0 0 1 12 0" />
            <circle cx="253" cy="130" r="2.5" />
            <path d="M251 141a5 5 0 0 1 6-4" />
          </g>
          <text x={268} y={139} fill={activeBox === 4 ? "#ffffff" : "#3477C5"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Client Database
          </text>
        </g>

        {/* CARD 5 — EXPENSE */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(5, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={450} y={109} width={137} height={52} rx={12} fill={activeBox === 5 ? "#EF4444" : "#FEF2F2"} />
          <rect x={450.5} y={109.5} width={136} height={51} rx={11.5} stroke="#DC2626" strokeDasharray="2 2" />
          <g stroke={activeBox === 5 ? "#ffffff" : "#EF4444"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M468 133l9-7 9 7v9a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-9z" />
            <path d="M477 130v5M474.5 132.5h5" />
          </g>
          <text x={494} y={139} fill={activeBox === 5 ? "#ffffff" : "#EF4444"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Expense
          </text>
        </g>

        {/* CARD 6 — REQUEST */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(6, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={37} y={211} width={135} height={52} rx={12} fill={activeBox === 6 ? "#F97368" : "#FFF2F1"} />
          <rect x={37.5} y={211.5} width={134} height={51} rx={11.5} stroke="#FE9D98" strokeDasharray="2 2" />
          <g stroke={activeBox === 6 ? "#ffffff" : "#F97368"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M57 227h18l-7 9v7l-4 2v-9l-7-9z" />
          </g>
          <text x={85} y={241} fill={activeBox === 6 ? "#ffffff" : "#F97368"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Request
          </text>
        </g>

        {/* CARD 7 — INVOICING */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(7, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={632} y={211} width={140} height={52} rx={12} fill={activeBox === 7 ? "#14B8A6" : "#F0FDFA"} />
          <rect x={632.5} y={211.5} width={139} height={51} rx={11.5} stroke="#2DD4BF" strokeDasharray="2 2" />
          <g stroke={activeBox === 7 ? "#ffffff" : "#14B8A6"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M652 227h12a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2v-14a2 2 0 0 1 2-2z" />
            <path d="M655 232h6M655 236h6" />
          </g>
          <text x={680} y={241} fill={activeBox === 7 ? "#ffffff" : "#14B8A6"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Invoicing
          </text>
        </g>

        {/* CARD 8 — EMPLOYEES */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(8, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={350} y={323} width={155} height={52} rx={12} fill={activeBox === 8 ? "#64748B" : "#EAECF5"} />
          <rect x={350.5} y={323.5} width={154} height={51} rx={11.5} stroke="#4E5BA6" strokeDasharray="2 2" />
          <g stroke={activeBox === 8 ? "#ffffff" : "#64748B"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <rect x="370" y="339" width="9" height="18" rx="1" />
            <path d="M373 344h3M373 349h3M373 354h3" />
            <circle cx="389" cy="345" r="2.5" />
            <path d="M385 354a4 4 0 0 1 8 0" />
          </g>
          <text x={402} y={353} fill={activeBox === 8 ? "#ffffff" : "#64748B"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Employees
          </text>
        </g>

        {/* CARD 9 — CONTRACTORS */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(9, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={525} y={323} width={163} height={52} rx={12} fill={activeBox === 9 ? "#DB5AA7" : "#FCE7F6"} />
          <rect x={525.5} y={323.5} width={162} height={51} rx={11.5} stroke="#FAA7E0" strokeDasharray="2 2" />
          <g stroke={activeBox === 9 ? "#ffffff" : "#DB5AA7"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <circle cx="550" cy="344" r="3.5" />
            <path d="M543 357a7 7 0 0 1 14 0" />
          </g>
          <text x={570} y={353} fill={activeBox === 9 ? "#ffffff" : "#DB5AA7"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Contractors
          </text>
        </g>

        {/* CARD 10 — STATISTICS */}
        <g className="business-card" onMouseEnter={(e) => showTooltip(10, e)} onMouseLeave={hideTooltip} style={{ cursor: "pointer" }}>
          <rect x={772} y={109} width={143} height={52} rx={12} fill={activeBox === 10 ? "#E08D16" : "#FEF4E4"} />
          <rect x={772.5} y={109.5} width={142} height={51} rx={11.5} stroke="#FBA427" strokeDasharray="2 2" />
          <g stroke={activeBox === 10 ? "#ffffff" : "#E08D16"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M792 139v-9M797 139V125M802 139v-6M807 139v-9" />
          </g>
          <text x={818} y={139} fill={activeBox === 10 ? "#ffffff" : "#E08D16"} fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Statistics
          </text>
        </g>

        {/* ============================================
            DASHED LINES — each with its OWN speed
            ============================================ */}
        {connectorLines.map((c, i) => (
          <path
            key={`line-${i}`}
            d={c.d}
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.7"
            style={{
              strokeDasharray: "4 6",
              animation: `dashMove ${c.dashDur}s linear infinite`,
              animationDelay: `${c.delay}s`,
            }}
          />
        ))}

        {/* ============================================
            SLOW DOTS — each with its OWN speed
            ============================================ */}
        {connectorLines.map((c, i) => (
          <circle
            key={`dot-${i}`}
            r="3"
            fill={c.color}
            filter="url(#dot-glow)"
            className="flow-dot-slow"
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
            className="flow-dot-slow"
            style={{
              offsetPath: `path("${c.d}")`,
              animationDuration: `${c.dotDur}s`,
              animationDelay: `${c.delay + c.dotDur / 2}s`,
            }}
          />
        ))}

        {/* keyframes injected here so animation names resolve */}
        <style>{`
          @keyframes dashMove {
            to { stroke-dashoffset: -200; }
          }
        `}</style>

        <defs>
          <clipPath id="clip0_4025_352791"><rect width={20} height={20} fill="white" transform="translate(433 23)" /></clipPath>
          <clipPath id="clip1_4025_352791"><rect width={20} height={20} fill="white" transform="translate(242 227)" /></clipPath>
          <clipPath id="clip2_4025_352791"><rect width={20} height={20} fill="white" transform="translate(476 227)" /></clipPath>
          <clipPath id="clip3_4025_352791"><rect width={20} height={20} fill="white" transform="translate(237 125)" /></clipPath>
          <clipPath id="clip4_4025_352791"><rect width={20} height={20} fill="white" transform="translate(652 227)" /></clipPath>
          <clipPath id="clip5_4025_352791"><rect width={20} height={20} fill="white" transform="translate(370 339)" /></clipPath>
          <clipPath id="clip6_4025_352791"><rect width={20} height={20} fill="white" transform="translate(545 339)" /></clipPath>
          <clipPath id="clip7_4025_352791"><rect width={20} height={20} fill="white" transform="translate(792 125)" /></clipPath>
        </defs>
      </svg>

      <DiagramTooltip tooltip={tooltip} />
    </div>
  );
};

export default Business;