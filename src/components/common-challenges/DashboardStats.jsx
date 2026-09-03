"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./DashboardStats.css";

const stats = [
  { title: "Expense to be paid", value: 3, amount: 3453.0, box: "pink" },
  { title: "Invoices Due", value: 12, amount: 54320.99, box: "blue" },
  { title: "Quotes Won", value: 12, amount: 12387.4, box: "blue", icon: true },
  { title: "Active Quotes", value: 4, amount: 12387.4, box: "blue", icon: true },
  {
    title: "Job waiting for approval",
    value: 23,
    amount: 10415.0,
    box: "yellow",
  },
  { title: "Active Projects", value: 4, amount: 7540.0, box: "blue" },
];

function StatBox({ item, small = false, animate = false }) {
  return (
    <div className={`stat-box ${small ? "small-box" : "big-box"}`}>
      {item.icon && <span className="icon-btn">+</span>}
      <p className={`stat-title${small ? " small" : ""}`}>{item.title}</p>
      <div className={`number-box ${item.box}`}>
        {!animate ? (
          <div className="skeleton-number"></div>
        ) : (
          <CountUp
            start={0}
            end={item.value}
            duration={2}
            className={`stat-number${small ? " small-number" : ""}`}
          />
        )}
      </div>
      <p className={`stat-amount${small ? " light" : ""}`}>
        {!animate ? (
          <span className="skeleton-line"></span>
        ) : (
          <>
            $
            <CountUp
              start={0}
              end={item.amount}
              duration={2.5}
              decimals={2}
            />
          </>
        )}
      </p>
    </div>
  );
}

export default function DashboardStats({ visible = false }) {
  const hasStartedRef = useRef(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (visible && !hasStartedRef.current) {
      hasStartedRef.current = true;
      setAnimate(true);
    }
  }, [visible]);

  return (
    <div className="dashboard-wrapper">
      <div className={`dashboard-card${animate ? " fade-in" : ""}`}>
        <div className="top-grid">
          {stats.slice(0, 2).map((item, index) => (
            <StatBox key={index} item={item} animate={animate} />
          ))}
        </div>
        <div className="bottom-grid">
          {stats.slice(2).map((item, index) => (
            <StatBox key={index} item={item} small animate={animate} />
          ))}
        </div>
      </div>
      <h2 className="footer-text">
        See and predict unprofitable <br />
        business activities.
      </h2>
    </div>
  );
}
