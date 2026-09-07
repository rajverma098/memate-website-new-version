"use client";
import { useEffect, useState } from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
import CaptureRequests from "../../svg/CaptureRequests";
import CreateSendQuotes from "../../svg/CreateSendQuotes";
import ManageJobsTeams from "../../svg/ManageJobsTeams";
import RaiseInvoicesIcon from "../../svg/RaiseInvoicesIcon";
import SeeRealProfitabilityIcon from "../../svg/SeeRealProfitabilityIcon";
import "./EnquiryProfit.css";

const cards = [
  {
    number: "01",
    icon: CaptureRequests,
    title: (
      <>
       Capture 
        <br />
        Requests
      </>
    ),
    description:
      "Capture new leads, customer enquiries and repeat bookings in one organised place. Keep every request visible, track follow-ups and move prospects smoothly through your sales process without searching through emails or messages. ",
    label: "New request:",
    value: "Residential - End-of-Lease · 3 bed",
  },

  {
    number: "02",
    icon: CreateSendQuotes,
    title: (
      <>
        Create
        <br />
        & Send Quotes
      </>
    ),
    description:
      "Create professional quotes quickly with meMate using pre-configured products and services. Set fixed, hourly or recurring pricing, build accurate budgets, and send quotes to customers for easy approval—all in one place. ",
    label: "Quote sent:",
    value: "$480 · Awaiting approval",
  },

  {
    number: "03",
    icon: ManageJobsTeams,
    title: (
      <>
        Manage Cleaning 
        <br />
       Jobs and Teams
      </>
    ),
    description:
      "Manage cleaning jobs and teams with meMate. Schedule jobs, assign cleaners, track timesheets and monitor progress from one organised system.",
    label: "In progress:",
    value: "3 Cleaners · On-site 45 min",
  },

  {
    number: "04",
    icon: RaiseInvoicesIcon,
    title: (
      <>
        Create Invoices 
        <br />
        and Track Payments 
      </>
    ),
    description:
      "meMate connects quotes, jobs and customer details, while payment tracking and reminders help your team stay on top of outstanding payments. As cleaning business invoicing software, meMate keeps billing connected to your workflow so you can invoice faster and manage payments more efficiently.",
    label: "Paid:",
    value: "✓ $480 · 2 hrs after sending",
  },

  {
    number: "05",
    icon: SeeRealProfitabilityIcon,
    title: (
      <>
       See Real 
        <br />
        Profitability
      </>
    ),
    description:
      "A job may generate a healthy invoice but require more labour hours, contractor payments or other expenses than expected. meMate connects project budgets, expenses, labour and contractor costs so you can monitor operational profitability at project level.",
    label: "Margin:",
    value: "64% · Revenue $480 · Cost $173",
  },
];

export default function AppleFactsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const visibleCards = isMobile ? 1 : 3.5;

  const maxIndex = Math.max(
    0,
    cards.length - visibleCards
  );
  useEffect(() => {
    setCurrentIndex((current) =>
      Math.min(current, maxIndex)
    );
  }, [maxIndex]);

  const handleNext = () => {
    setCurrentIndex((current) =>
      Math.min(current + 1, maxIndex)
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((current) =>
      Math.max(current - 1, 0)
    );
  };

  return (
    <section className="apple-facts enquiry-profit">
      <div className="apple-facts-inner">
        <div className="enquiry-profit__container">
          <div className="enquiry-profit__header">
            <h2 className="enquiry-profit__heading">
              From Enquiry <span>to Profit</span>
            </h2>
            <div className="enquiry-profit__arrows">
              <button
                type="button"
                className="enquiry-profit__arrow"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                aria-label="Previous">
                   <ArrowLeft size={16} strokeWidth={1.6} />
              
              </button>
              <button
                type="button"
                className="enquiry-profit__arrow"
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                aria-label="Next">
                <ArrowRight size={16} strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>
        <div className="apple-facts-slider">
          <div
            className="apple-facts-track"
            style={{
              "--current-index": currentIndex,
            }}
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.number}
                  className="profit-card apple-fact-card">
                  <div className="profit-card__top">
                    <div className="profit-card__icon">
                      <Icon />
                    </div>
                    <div className="profit-card__title">
                      <h3>{card.title}</h3>
                    </div>
                    <span className="profit-card__number">
                      {card.number}
                    </span>
                  </div>
                  <p className="profit-card__description">
                    {card.description}
                  </p>
                  <div className="profit-card__divider" />

                  <div className="profit-card__bottom">

                    <strong className="profit-card__label">
                      {card.label}
                    </strong>
                    <span className="profit-card__value">
                      {card.value}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}