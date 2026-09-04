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
      "New leads, client enquiries and repeat bookings land in one organised inbox. Nothing falls through the cracks.",
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
      "Build professional quotes in minutes — fixed price, hourly or recurring. Clients approve with one click.",
    label: "Quote sent:",
    value: "$480 · Awaiting approval",
  },

  {
    number: "03",
    icon: ManageJobsTeams,
    title: (
      <>
        Manage Jobs
        <br />
        & Teams
      </>
    ),
    description:
      "Schedule jobs, assign cleaners, track who's on-site and get real-time progress updates — no more calls to check in.",
    label: "In progress:",
    value: "3 Cleaners · On-site 45 min",
  },

  {
    number: "04",
    icon: RaiseInvoicesIcon,
    title: (
      <>
        Raise
        <br />
        Invoices
      </>
    ),
    description:
      "One click turns a completed job into a professional invoice. Send it instantly, get paid faster — with automatic reminders.",
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
      "Add expenses, labour and contractor costs per job. Know your true margin — per job, per client, per week — in real time.",
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