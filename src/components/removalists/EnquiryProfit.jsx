"use client";
import React from "react";
import Slider from "react-slick";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./EnquiryProfit.css";
import CaptureRequests from "../../svg/CaptureRequests";
import CreateSendQuotes from "../../svg/CreateSendQuotes";
import ManageJobsTeams from "../../svg/ManageJobsTeams";
import RaiseInvoicesIcon from "../../svg/RaiseInvoicesIcon";
import SeeRealProfitabilityIcon from "../../svg/SeeRealProfitabilityIcon";

const steps = [
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
  
{
    number: "06",
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
 
];

export default function EnquiryProfit() {
  const sliderRef = React.useRef(null);

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 6,
  slidesToScroll: 2,
  variableWidth: false,
  centerMode: false,
  autoplay: true,
  pauseOnHover: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
};

  return (
  <section className="enquiry-profit">
  <div className="enquiry-profit__container">
    <div className="enquiry-profit__header">
      <h2 className="enquiry-profit__heading">
        From Enquiry <span>to Profit</span>
      </h2>

      <div className="enquiry-profit__arrows">
        <button
          type="button"
          className="enquiry-profit__arrow"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous"
        >
          <ArrowLeft size={16} strokeWidth={1.6} />
        </button>

        <button
          type="button"
          className="enquiry-profit__arrow enquiry-profit__arrow--active"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next"
        >
          <ArrowRight size={16} strokeWidth={1.6} />
        </button>
      </div>
    </div>
  </div>

  <div className="enquiry-profit__slider-wrapper">
    <Slider
      ref={sliderRef}
      {...settings}
      className="enquiry-profit__slider"
    >
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div className="enquiry-profit__slide" key={index}>
            <article className="profit-card">
              <div className="profit-card__top">
                <div className="profit-card__icon">
                  <Icon />
                </div>

                <div className="profit-card__title">
                  <h3>{step.title}</h3>
                </div>

                <span className="profit-card__number">
                  {step.number}
                </span>
              </div>

              <p className="profit-card__description">
                {step.description}
              </p>

              <div className="profit-card__divider" />

              <div className="profit-card__bottom">
                <strong className="profit-card__label">
                  {step.label}
                </strong>

                <span className="profit-card__value">
                  {step.value}
                </span>
              </div>
            </article>
          </div>
        );
      })}
    </Slider>
  </div>
</section>
  );
}