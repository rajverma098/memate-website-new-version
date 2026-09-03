
"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./BusinessMap.module.css";

import ConnectInterChatSVG from "../../svg/ConnectInterChat";
import ConnectClientDataSVG from "../../svg/ConnectClientData";
import ConnectExpenseSVG from "../../svg/ConnectExpense";
import ConnectStatisticsSVG from "../../svg/ConnectStatistics";
import ConnectRequestSVG from "../../svg/ConnectRequest";
import ConnectProjectSVG from "../../svg/ConnectProject";
import ConnectInvoicingSVG from "../../svg/ConnectInvoicing";
import ConnectEmployeesSVG from "../../svg/ConnectEmployees";
import ConnectContractorsSVG from "../../svg/ConnectContractors";

/*
|--------------------------------------------------------------------------
| DESIGN
|--------------------------------------------------------------------------
| Matches the supplied reference video: 1152 x 384.
*/

const DESIGN_WIDTH = 1152;
const DESIGN_HEIGHT = 384;

/*
|--------------------------------------------------------------------------
| NODES
|--------------------------------------------------------------------------
*/

const DEFAULT_NODES = [
  {
    id: "project",
    title: "Project",
    icon: <ConnectProjectSVG />,
    color: "#35B96B",
    position: {
      x: 433,
      y: 40,
    },
    size: {
      width: 126,
      height: 53,
    },
    tooltip: {
      position: "right",
      width: 190,
      title: "Project",
      description:
        "All your ongoing projects in one timeline — clear and visible.",
    },
  },

  {
    id: "chat",
    title: "Chat",
    icon: <ConnectInterChatSVG />,
    color: "#8ACB38",
    position: {
      x: 890,
      y: 40,
    },
    size: {
      width: 110,
      height: 53,
    },
    tooltip: {
      position: "left",
      width: 190,
      title: "Chat / Support",
      description:
        "Stay connected with your team and get help whenever you need it.",
    },
  },

  {
    id: "files",
    title: "Notes / Photos / Files",
    icon: <ConnectClientDataSVG />,
    color: "#4D8FD8",
    position: {
      x: 131,
      y: 143,
    },
    size: {
      width: 234,
      height: 52,
    },
    tooltip: {
      position: "right",
      width: 190,
      title: "Notes / Photos / Files",
      description:
        "Attach notes, photos and files directly to your projects for easy reference.",
    },
  },

  {
    id: "description",
    title: "Project Description / Location",
    icon: <ConnectExpenseSVG />,
    color: "#8656DF",
    position: {
      x: 414,
      y: 143,
    },
    size: {
      width: 298,
      height: 52,
    },
    tooltip: {
      position: "right",
      width: 190,
      title: "Project Description / Location",
      description:
        "Full project details including description, address and location pinning.",
    },
  },

  {
    id: "tasks",
    title: "Tasks",
    icon: <ConnectStatisticsSVG />,
    color: "#7774FF",
    position: {
      x: 890,
      y: 122,
    },
    size: {
      width: 117,
      height: 53,
    },
    tooltip: {
      position: "left",
      width: 190,
      title: "Tasks",
      description:
        "Manage and track tasks across all your active projects.",
    },
  },

  {
    id: "job",
    title: "New Job / Shift",
    icon: <ConnectRequestSVG />,
    color: "#F2A000",
    position: {
      x: 28,
      y: 245,
    },
    size: {
      width: 189,
      height: 52,
    },
    tooltip: {
      position: "top",
      width: 190,
      title: "New Job / Shift",
      description:
        "Create new jobs or shifts and assign them to your team instantly.",
    },
  },

  {
    id: "contractor",
    title: "Contractor / Employee",
    icon: <ConnectContractorsSVG />,
    color: "#DD5EB4",
    position: {
      x: 267,
      y: 245,
    },
    size: {
      width: 243,
      height: 52,
    },
    tooltip: {
      position: "top",
      width: 190,
      title: "Contractor / Employee",
      description:
        "Flexibly assign each job to a contractor or employee as needed.",
    },
  },

  {
    id: "approval",
    title: "Job Approval",
    icon: <ConnectEmployeesSVG />,
    color: "#35B96B",
    position: {
      x: 559,
      y: 245,
    },
    size: {
      width: 172,
      height: 52,
    },
    tooltip: {
      position: "top",
      width: 190,
      title: "Job Approval",
      description:
        "Review and approve completed jobs before triggering payment.",
    },
  },

  {
    id: "invoice",
    title: "Time Sheet / Invoice",
    icon: <ConnectInvoicingSVG />,
    color: "#36C5BB",
    position: {
      x: 782,
      y: 245,
    },
    size: {
      width: 226,
      height: 52,
    },
    tooltip: {
      position: "top",
      width: 190,
      title: "Time Sheet / Invoice",
      description:
        "Timesheets and invoices are generated automatically once a job is approved.",
    },
  },
];

/*
|--------------------------------------------------------------------------
| CONNECTIONS
|--------------------------------------------------------------------------
| These coordinates are based on the actual 1152 x 384 reference frame.
*/

const DEFAULT_CONNECTIONS = [
  /*
   * Project -> Project Description / Location
   */
  {
    id: "project-description",
    type: "path",
    d: `
      M 496 93
      L 496 112
      C 496 122 504 126 515 126
      L 562 126
      C 562 132 562 137 562 143
    `,
  },

  /*
   * Project -> Contractor / Employee
   * Long left-side route.
   */
  {
    id: "project-left-route",
    type: "path",
    d: `
      M 433 66
      L 411 66
      C 397 66 388 75 388 89
      L 388 232
      C 388 240 388 245 388 245
    `,
  },

  /*
   * Project -> Time Sheet / Invoice
   * Long right-side route.
   */
  {
    id: "project-right-route",
    type: "path",
    d: `
      M 559 66
      L 804 66
      C 836 66 854 82 854 112
      L 854 232
      C 854 240 854 245 854 245
    `,
  },

  /*
   * Chat -> Tasks
   */
//   {
//     id: "chat-tasks",
//     type: "line",
//     x1: 945,
//     y1: 93,
//     x2: 945,
//     y2: 122,
//   },

  /*
   * Tasks -> Time Sheet / Invoice
   */
//   {
//     id: "tasks-invoice",
//     type: "path",
//     d: `
//       M 890 148
//       L 873 148
//       C 861 148 854 158 854 171
//       L 854 226
//       C 854 238 854 245 854 245
//     `,
//   },

  /*
   * Notes / Photos / Files -> Contractor / Employee
   */
  {
    id: "files-contractor",
     type: "line",
        x1: 430,
        y1: 170,
        x2: 300,
        y2: 170,
  },

  /*
   * Project Description / Location -> Contractor / Employee
   */
  {
    id: "description-contractor",
    type: "path",
    d: `
      M 563 195
      L 563 208
      C 563 215 555 219 544 219
      L 500 219
      C 488 219 482 229 482 245
    `,
  },

  /*
   * New Job / Shift -> Contractor / Employee
   */
  {
    id: "job-contractor",
    type: "line",
    x1: 217,
    y1: 271,
    x2: 267,
    y2: 271,
  },

  /*
   * Contractor / Employee -> Job Approval
   */
  {
    id: "contractor-approval",
    type: "line",
    x1: 510,
    y1: 271,
    x2: 559,
    y2: 271,
  },

  /*
   * Job Approval -> Time Sheet / Invoice
   */
  {
    id: "approval-invoice",
    type: "line",
    x1: 731,
    y1: 271,
    x2: 782,
    y2: 271,
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function BusinessMap({
  nodes = DEFAULT_NODES,
  connections = DEFAULT_CONNECTIONS,
  width = "100%",
  maxWidth = DESIGN_WIDTH,
  background = true,
  className = "",
}) {
  const [activeNode, setActiveNode] = useState(null);
  const [containerWidth, setContainerWidth] = useState(DESIGN_WIDTH);

  useEffect(() => {
    const updateWidth = () => {
      setContainerWidth(
        Math.min(
          DESIGN_WIDTH,
          window.innerWidth
        )
      );
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const actualWidth = useMemo(() => {
    if (typeof width === "number") {
      return Math.min(width, maxWidth);
    }

    return Math.min(containerWidth, maxWidth);
  }, [width, maxWidth, containerWidth]);

  const scale = actualWidth / DESIGN_WIDTH;

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={{
        width:
          typeof width === "number"
            ? width
            : "100%",
        maxWidth,
      }}
    >
      <div
        className={`${styles.scene} ${
          background
            ? styles.withBackground
            : ""
        }`}
        style={{
          width: actualWidth,
          height: DESIGN_HEIGHT * scale,
        }}
      >
        <div
          className={styles.canvas}
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transform: `scale(${scale})`,
          }}
        >
          <ConnectionLayer
            connections={connections}
            width={DESIGN_WIDTH}
            height={DESIGN_HEIGHT}
          />

          {nodes.map((node) => (
            <BusinessNode
              key={node.id}
              node={node}
              active={activeNode === node.id}
              onMouseEnter={() =>
                setActiveNode(node.id)
              }
              onMouseLeave={() =>
                setActiveNode(null)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| CONNECTION LAYER
|--------------------------------------------------------------------------
*/

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
      {connections.map((connection) => {
        if (connection.type === "path") {
          return (
            <path
              key={connection.id}
              d={connection.d}
              className={styles.connection}
            />
          );
        }

        return (
          <line
            key={connection.id}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            className={styles.connection}
          />
        );
      })}
    </svg>
  );
}

/*
|--------------------------------------------------------------------------
| BUSINESS NODE
|--------------------------------------------------------------------------
*/

function BusinessNode({
  node,
  active,
  onMouseEnter,
  onMouseLeave,
}) {
  const tooltip = node.tooltip || {};

  return (
    <div
      className={`${styles.nodeWrapper} ${
        active
          ? styles.nodeActive
          : ""
      }`}
      style={{
        left: node.position.x,
        top: node.position.y,
        width: node.size.width,
        height: node.size.height,
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
          position={
            tooltip.position || "right"
          }
          width={
            tooltip.width || 190
          }
        />
      )}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| TOOLTIP
|--------------------------------------------------------------------------
*/

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
        "--tooltip-color": node.color,
      }}
    >
      <div
        className={styles.tooltipTitle}
        style={{
          color: node.color,
        }}
      >
        {node.tooltip?.title ||
          node.title}
      </div>

      <div className={styles.tooltipText}>
        {node.tooltip?.description}
      </div>
    </div>
  );
}

