import React, { useState } from "react";
import style from './tabs-comp.module.scss';
import ToolTip from "./tool-tip";
const data = [
    {
      category: "Client Management",
      meMate: "Comprehensive client details, history, and contacts in one place.",
      meMateM8: "Basic client management focused on job details and communication.",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
      // xcircleFill: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
      // slashcircleFill: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
      toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Supplier Management",
      meMate: "Complete supplier list with expense history.",
      meMateM8: "Not a dedicated feature.",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Complete supplier list with expense history."
    },
    {
      category: "Project Management",
      meMate: "Advanced project management with timelines, expenses, and history.",
      meMateM8: "Job management with a focus on checklists and job completion",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Advanced project management with timelines, expenses, and history."
    },
    {
      category: "Quoting & Invoicing",
      meMate: "Automated updates via email/SMS with templates.",
      meMateM8: "Quoting and invoicing directly from the field.",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Automated updates via email/SMS with templates."
    },
    {
      category: "Communication",
      meMate: "Automated updates via email/SMS with templates.",
      meMateM8: "Email, SMS, and on-the-way messages.",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Automated updates via email/SMS with templates."
    },
    {
      category: "Scheduling",
      meMate: "Job scheduling with profitability tracking. ",
      meMateM8: "Job dispatch with real-time staff visibility on the map.",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Job scheduling with profitability tracking. "
    },
    {
      category: "Reporting",
      meMate: "Over 20 built-in reports for business analytics. ",
      meMateM8: "Basic job reports, focused on job history and invoicing.",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Over 20 built-in reports for business analytics. "
    },
    {
      category: "Employee Management",
      meMate: "Onboard employees with contact details in one place.",
      meMateM8: "Focused on field staff location and job allocation",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Onboard employees with contact details in one place."
    },
    {
      category: "Collaboration",
      meMate: "Manage jobs, fixed or hourly payment trackers, job approvals.",
      meMateM8: "Manage jobs, track staff locations, and communicate via app.",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Manage jobs, fixed or hourly payment trackers, job approvals."
    },
    {
      category: "Functionality",
      meMate: "Task management, internal chat, timesheets. ",
      meMateM8: "Limited to job-related tasks, checklist completion, and forms.",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Task management, internal chat, timesheets. "
    },
    {
      category: "Value Add-ons",
      meMate: "Calendar, calculators for pricing, budgeting.",
      meMateM8: "Online booking, asset management, and accounting integration.",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Calendar, calculators for pricing, budgeting."
    },
    {
      category: "Best For",
      meMate: "Established businesses with an office-based workflow. ",
      meMateM8: "On-the-go tradespeople needing field flexibility. ",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Established businesses with an office-based workflow. "
    },
   
   
  ];
const ComparisonTabs = () => {
  return (
    <div className={style.tabsComparison}>
    <div className={style.tabsTableWrap}>
      <table>
        <thead>
          <tr className="tabsTableWrapButton">
  <th colSpan="2" ><span className="darkLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg" alt="service8 logo" />
    </span></th>
  <th style={{ textAlign: 'left' }}>
    <span className="lightLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/serviem8-logo.png" alt="service8" />
    </span></th>
</tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><span className={style.toolTip}>{item.category} <ToolTip toolTip= {item.meMate} /></span></td>
              <td><em><img src={item.trueIcon} /><p>{item.meMate}</p></em></td>
              <td><em><img src={item.falseIcon} /><p>{item.meMateM8}</p></em></td>     
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ComparisonTabs




























