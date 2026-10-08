"use client";

import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: "1",
    title: "Start with Business.",
    description:
      "Everything you need to win work and know which jobs make money, for $99.85 a month.",
  },
  {
    number: "2",
    title: "Add what you need.",
    description:
      "Field teams, enquiries, assets, locations and users, each priced on its own.",
  },
  {
    number: "3",
    title: "Adjust any month.",
    description:
      "Grow, scale back or pause add-ons from your account. You only pay for what you use.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>

      <div className="how-it-works-card">
        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="step-item">
                <div className="step-number">{step.number}</div>

                <p className="step-description">
                  <strong>{step.title}</strong>{" "}
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="step-line" />
              )}
            </React.Fragment>
          ))}
        </div>
        </div>
    </section>
  );
}