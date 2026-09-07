"use client";

import React from "react";
import "./BusinessFeatures.css";

const features = [
  {
    title: (
      <>
        One Platform
        <br />
        to Manage Everything
      </>
    ),
    description:
      "Replace multiple apps with a single company management software that handles daily operations from quoting to invoicing, job tracking to reporting.",
  },
  {
    title: (
      <>
        Designed for
        <br />
        Real Business Workflows
      </>
    ),
    description:
      "MeMate adapts to how your business works — not the other way around. Create workflows that fit your team, your industry, and your growth plans.",
  },
  {
    title: (
      <>
        Clarity, Control
        <br />
        & Accountability
      </>
    ),
    description:
      "Gain real-time visibility into projects, workloads, cash flow, and profitability with dashboards that help you make confident decisions.",
  },
];

const LessMoreBusinessGrid = () => {
  return (
    <section className="business-features">
      <div className="business-features__container">
        {features.map((feature, index) => (
          <div className="business-feature" key={index}>
            <h3 className="business-feature__title">{feature.title}</h3>

            <p className="business-feature__description">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LessMoreBusinessGrid;