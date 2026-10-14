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
      "Never lose a lead while you’re out on a job. Every enquiry lands in one inbox and gets followed up — not buried in voicemail or forgotten.",
    label: "New request:",
    value: "Lawn Mowing · Weekly · Mosman",
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
      "Send a professional quote in minutes, not days. The faster you quote, the more jobs you win — before they call someone else.",
    label: "Quote sent:",
    value: "$320 · Awaiting approval",
  },

  {
    number: "03",
    icon: ManageJobsTeams,
    title: (
      <>
        Manage Jobs 
        <br />
        & Crews
      </>
    ),
    description:
      "Schedule recurring rounds, assign crew and track every job in real time — no more group chats, phone calls or double-booked days.",
    label: "In progress:",
    value: "2 Crew · On-site 40 min",
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
      "Stop chasing payments. One click invoices the moment a job is done — with automatic reminders so you get paid without the follow-up.",
    label: "Paid:",
    value: "✓$320 · 1 hr after sending",
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
      "Add fuel, labour and equipment costs per job. Know exactly what you’re making — per job, per client, per week — in real time.",
    label: "Margin:",
    value: "61% · Revenue $320 · Cost $125",
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