"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./BusinessMap.module.css";
import ConnectSupDataSVG from "../../svg/ConnectSupData"
import ConnectInterChatSVG from "../../svg/ConnectInterChat";
import ConnectClientDataSVG from "../../svg/ConnectClientData";
import ConnectExpenseSVG from "../../svg/ConnectExpense";
import ConnectStatisticsSVG from "../../svg/ConnectStatistics";
import ConnectRequestSVG from "../../svg/ConnectRequest";
import ConnectSalesQuotesSVG from "../../svg/ConnectSalesQuotes";
import ConnectProjectSVG from "../../svg/ConnectProject";
import ConnectInvoicingSVG from "../../svg/ConnectInvoicing";
import ConnectEmployeesSVG from "../../svg/ConnectEmployees";
import ConnectContractorsSVG from "../../svg/ConnectContractors";


const DESKTOP_WIDTH = 1098;
const DESKTOP_HEIGHT = 520;
const MOBILE_WIDTH = 390;
const MOBILE_HEIGHT = 760;

const DEFAULT_NODES = [
  {
    id: "supplier",
    title: "Supplier Database",
    icon: <ConnectSupDataSVG />,
    color: "#8656df",

    position: {
      x: 479,
      y: 30,
    },

    size: {
      width: 213,
      height: 54,
    },

    tooltip: {
      position: "right",
      width: 190,
      title: "Supplier Database",
      description:
        "All your contractors and suppliers with full order history and contacts.",
    },
  },

  {
    id: "internal-chat",
    title: "Internal Chat",
    icon: <ConnectInterChatSVG />,
    color: "#8acb38",

    position: {
      x: 838,
      y: 31,
    },

    size: {
      width: 170,
      height: 53,
    },

    tooltip: {
      position: "left",
      width: 180,
      title: "Internal Chat",
      description:
        "Communicate with your team and keep your business conversations in one place.",
    },
  },

  {
    id: "client",
    title: "Client Database",
    icon: <ConnectClientDataSVG />,
    color: "#4d8fd8",

    position: {
      x: 283,
      y: 133,
    },

    size: {
      width: 193,
      height: 54,
    },

    tooltip: {
      position: "right",
      width: 180,
      title: "Client Database",
      description:
        "Keep all your client information, contacts and project details organized.",
    },
  },

  {
    id: "expense",
    title: "Expense",
    icon: <ConnectExpenseSVG />,
    color: "#ed8989",

    position: {
      x: 516,
      y: 133,
    },

    size: {
      width: 137,
      height: 54,
    },

    tooltip: {
      position: "right",
      width: 190,
      title: "Expense",
      description:
        "All your bills from team members, links to projects and company projects. They can be processed.",
    },
  },

  {
    id: "statistics",
    title: "Statistics",
    icon: <ConnectStatisticsSVG />,
    color: "#dfa02b",

    position: {
      x: 838,
      y: 133,
    },

    size: {
      width: 143,
      height: 53,
    },

    tooltip: {
      position: "left",
      width: 180,
      title: "Statistics",
      description:
        "See useful business statistics and understand how your company is performing.",
    },
  },

  {
    id: "request",
    title: "Request",
    icon: <ConnectRequestSVG />,
    color: "#ef9999",

    position: {
      x: 102,
      y: 235,
    },

    size: {
      width: 136,
      height: 52,
    },

    tooltip: {
      position: "right",
      width: 185,
      title: "Request",
      description:
        "Manage incoming requests and turn them into organized business processes.",
    },
  },

  {
    id: "sales",
    title: "Sales - Quotes",
    icon: <ConnectSalesQuotesSVG />,
    color: "#43b5e4",

    position: {
      x: 288,
      y: 235,
    },

    size: {
      width: 184,
      height: 52,
    },

    tooltip: {
      position: "right",
      width: 190,
      title: "Sales - Quotes",
      description:
        "Where all your quotes or invoices are calculated, organized and tracked.",
    },
  },

  {
    id: "project",
    title: "Project",
    icon: <ConnectProjectSVG />,
    color: "#35b96b",

    position: {
      x: 522,
      y: 235,
    },

    size: {
      width: 127,
      height: 52,
    },

    tooltip: {
      position: "right",
      width: 185,
      title: "Project",
      description:
        "Manage your projects, tasks, deadlines and progress from one central place.",
    },
  },

  {
    id: "invoicing",
    title: "Invoicing",
    icon: <ConnectInvoicingSVG />,
    color: "#36c5bb",

    position: {
      x: 698,
      y: 235,
    },

    size: {
      width: 140,
      height: 52,
    },

    tooltip: {
      position: "left",
      width: 180,
      title: "Invoicing",
      description:
        "Create, send and track invoices while keeping payments organized.",
    },
  },

  {
    id: "employees",
    title: "Employees",
    icon: <ConnectEmployeesSVG />,
    color: "#59679d",

    position: {
      x: 417,
      y: 347,
    },

    size: {
      width: 153,
      height: 53,
    },

    tooltip: {
      position: "right",
      width: 185,
      title: <ConnectContractorsSVG />,
      description:
        "Manage your employees, tasks, responsibilities and working information.",
    },
  },

  {
    id: "contractors",
    title: "Contractors",
    icon: <ConnectContractorsSVG />,
    color: "#dd5eb4",

    position: {
      x: 591,
      y: 347,
    },

    size: {
      width: 164,
      height: 53,
    },

    tooltip: {
      position: "right",
      width: 190,
      title: "Contractors",
      description:
        "Assign jobs to your contractors based on availability and project requirements.",
    },
  },
];

const DEFAULT_CONNECTIONS = [
  {
    id: "supplier-expense",
    type: "vertical",
    x1: 590,
    y1: 84,
    x2: 590,
    y2: 133,
  },

  {
    id: "client-sales",
    type: "vertical",
    x1: 379,
    y1: 187,
    x2: 379,
    y2: 235,
  },

  {
    id: "expense-project",
    type: "vertical",
    x1: 584,
    y1: 187,
    x2: 584,
    y2: 235,
  },

  {
    id: "request-sales",
    type: "horizontal",
    x1: 238,
    y1: 261,
    x2: 288,
    y2: 261,
  },

  {
    id: "sales-project",
    type: "horizontal",
    x1: 472,
    y1: 261,
    x2: 522,
    y2: 261,
  },

  {
    id: "project-invoicing",
    type: "horizontal",
    x1: 649,
    y1: 261,
    x2: 698,
    y2: 261,
  },

  {
    id: "project-employees",
    type: "vertical",
    x1: 539,
    y1: 287,
    x2: 539,
    y2: 347,
  },

  {
    id: "project-contractors",
    type: "vertical",
    x1: 620,
    y1: 287,
    x2: 620,
    y2: 347,
  },

  {
    id: "project-middle",
    type: "vertical",
    x1: 558,
    y1: 287,
    x2: 558,
    y2: 347,
    
  },
  {
    id: "project-right",
    type: "vertical",
    x1: 600,
    y1: 287,
    x2: 600,
    y2: 347,
    
  },
];

const MOBILE_POSITIONS = {
  supplier: {
    x: 20,
    y: 25,
  },

  "internal-chat": {
    x: 200,
    y: 25,
  },

  client: {
    x: 20,
    y: 125,
  },

  expense: {
    x: 233,
    y: 125,
  },

  statistics: {
    x: 123,
    y: 225,
  },

  request: {
    x: 20,
    y: 325,
  },

  sales: {
    x: 202,
    y: 325,
  },

  project: {
    x: 131,
    y: 435,
  },

  invoicing: {
    x: 125,
    y: 535,
  },

  employees: {
    x: 20,
    y: 635,
  },

  contractors: {
    x: 203,
    y: 635,
  },
};


const MOBILE_CONNECTIONS = [

  {
    id: "mobile-supplier-client",
    type: "vertical",

    x1: 96,
    y1: 79,

    x2: 96,
    y2: 125,
  },

  {
    id: "mobile-chat-expense",
    type: "vertical",

    x1: 285,
    y1: 78,

    x2: 285,
    y2: 125,
  },

  {
    id: "mobile-client-statistics",
    type: "vertical",

    x1: 116,
    y1: 179,

    x2: 165,
    y2: 225,
  },

  {
    id: "mobile-expense-statistics",
    type: "vertical",

    x1: 301,
    y1: 179,

    x2: 220,
    y2: 225,
  },

  {
    id: "mobile-statistics-request",
    type: "vertical",

    x1: 165,
    y1: 278,

    x2: 88,
    y2: 325,
  },

  {
    id: "mobile-statistics-sales",
    type: "vertical",

    x1: 220,
    y1: 278,

    x2: 294,
    y2: 325,
  },

  {
    id: "mobile-request-project",
    type: "vertical",

    x1: 88,
    y1: 377,

    x2: 194,
    y2: 435,
  },

  {
    id: "mobile-sales-project",
    type: "vertical",

    x1: 294,
    y1: 377,

    x2: 194,
    y2: 435,
  },

  {
    id: "mobile-project-invoicing",
    type: "vertical",

    x1: 194,
    y1: 487,

    x2: 195,
    y2: 535,
  },

  {
    id: "mobile-invoicing-employees",
    type: "vertical",

    x1: 195,
    y1: 587,

    x2: 95,
    y2: 635,
  },

  {
    id: "mobile-invoicing-contractors",
    type: "vertical",

    x1: 195,
    y1: 587,

    x2: 285,
    y2: 635,
  },
];

export default function BusinessMap({
  nodes = DEFAULT_NODES,

  connections = DEFAULT_CONNECTIONS,

  size = {
    width: DESKTOP_WIDTH,
    height: DESKTOP_HEIGHT,
  },

  position = {
    x: 0,
    y: 0,
  },

  space = {
    x: 0,
    y: 0,
  },

  lineAnimationDuration = 1.5,

  background = true,

  className = "",
}) {
  const [activeNode, setActiveNode] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);


  const designWidth = isMobile
    ? MOBILE_WIDTH
    : DESKTOP_WIDTH;

  const designHeight = isMobile
    ? MOBILE_HEIGHT
    : DESKTOP_HEIGHT;


  const scale = useMemo(() => {
    const requestedWidth = size?.width || designWidth;

    return requestedWidth / designWidth;
  }, [size?.width, designWidth]);


  const activeConnections = isMobile
    ? MOBILE_CONNECTIONS
    : connections;

  const finalHeight = isMobile
    ? designHeight * scale
    : (size?.height || designHeight);

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={{
        marginLeft: position.x,
        marginTop: position.y,

        paddingLeft: space.x,
        paddingTop: space.y,
      }}
    >
      <div
        className={`${styles.scene} ${
          background ? styles.withBackground : ""
        }`}
        style={{
          width: isMobile
            ? "100%"
            : size.width,

          height: finalHeight,
        }}
      >
        <div
          className={styles.canvas}
          style={{
            width: designWidth,
            height: designHeight,

            transform: `scale(${scale})`,

            transformOrigin: "top left",

            "--line-duration": `${lineAnimationDuration}s`,
          }}
        >

          <ConnectionLayer
            connections={activeConnections}
            width={designWidth}
            height={designHeight}
          />

          {nodes.map((node) => {
            const mobilePosition =
              MOBILE_POSITIONS[node.id];

            return (
              <BusinessNode
                key={node.id}
                node={node}
                isMobile={isMobile}
                mobilePosition={mobilePosition}
                active={activeNode === node.id}
                onMouseEnter={() =>
                  setActiveNode(node.id)
                }
                onMouseLeave={() =>
                  setActiveNode(null)
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}


function ConnectionLayer({
  connections,
  width,
  height,
}) {
  return (
    <svg
      className={styles.connectionLayer}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {connections.map((line) => (
        <line
          key={line.id}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          className={styles.connection}
        />
      ))}
    </svg>
  );
}


function BusinessNode({
  node,
  isMobile,
  mobilePosition,
  active,
  onMouseEnter,
  onMouseLeave,
}) {
  const tooltip = node.tooltip || {};


  const position =
    isMobile && mobilePosition
      ? mobilePosition
      : node.position;


  const width = isMobile
    ? Math.min(node.size.width, 170)
    : node.size.width;

  const height = isMobile
    ? 52
    : node.size.height;


  let tooltipPosition =
    tooltip.position || "right";

  if (isMobile) {
    tooltipPosition = "bottom";
  }

  return (
    <div
      className={`${styles.nodeWrapper} ${
        active ? styles.nodeActive : ""
      }`}
      style={{
        left: position.x,
        top: position.y,

        width,
        height,

        "--node-color": node.color,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >

      <div className={styles.nodeBox}>
        <div
          className={styles.nodeIcon}
          style={{
            color: node.color,
          }}
        >
          {node.icon}
        </div>

        <div
          className={styles.nodeTitle}
          style={{
            color: node.color,
          }}
        >
          {node.title}
        </div>
      </div>

      {active && (
        <NodeTooltip
          node={node}
          position={tooltipPosition}
          width={isMobile ? 230 : tooltip.width || 190}
        />
      )}
    </div>
  );
}


function NodeTooltip({
  node,
  position,
  width,
}) {
  return (
    <div
      className={`${styles.tooltip} ${
        styles[`tooltip-${position}`]
      }`}
      style={{
        width,
      }}
    >
      <div
        className={styles.tooltipTitle}
        style={{
          color: node.color,
        }}
      >
        {node.tooltip?.title || node.title}
      </div>

      <div className={styles.tooltipText}>
        {node.tooltip?.description}
      </div>
    </div>
  );
}