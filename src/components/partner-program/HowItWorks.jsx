"use client";

import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: "1",
    title: "Apply",
    description:
      "Tell us who you are, what you do, and the discount you'd offer mature users.",
  },
  {
    number: "2",
    title: "We Review",
    description:
      "We assess fit with our user base. If there's a match, we'll reach out within 5 business days.",
  },
  {
    number: "3",
    title: "Go Live",
    description:
      "Your listing goes live inside the meMate app. Users find you, contact you directly, and you take it from there.",
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

        <div className="how-it-works-divider" />

        <p className="how-it-works-note">
          meMate is an introduction platform. We connect users with Partners —
          we play no role in the services, pricing, or outcomes between the
          two parties. Full Partner terms are provided on application.
        </p>
      </div>
    </section>
  );
}