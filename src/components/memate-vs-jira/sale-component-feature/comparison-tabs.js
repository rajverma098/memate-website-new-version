import React, { useState } from "react";
import style from './tabs-comp.module.scss';
import ToolTip from "./tool-tip";
const data = [
    {
      category: "Quoting & Invoicing",
      meMate: "Built-in quoting, approvals, invoicing & payments",
      meMateM8: "Not included — requires external tools or integrations",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
     falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
      toolTip: "Built-in quoting, approvals, invoicing & payments"
    },
    {
      category: "Job & Project Management",
      meMate: "Job board, scheduling, contractor assignment, task timelines",
      meMateM8: "Task/ticket tracking built around agile workflows",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Job board, scheduling, contractor assignment, task timelines"
    },
    {
      category: "CRM & Lead Tracking",
      meMate: "Full CRM with contact history, lead tracking, follow-ups",
      meMateM8: "No native CRM — only issue-based tracking",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Full CRM with contact history, lead tracking, follow-ups"
    },
    {
      category: "Team Scheduling & Time Tracking",
      meMate: "Roster, shift planning, timesheets, job timers",
      meMateM8: "Available via add-ons or third-party integrations",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Roster, shift planning, timesheets, job timers"
    },
    {
      category: "Internal Communication",
      meMate: "Built-in team chat, job comments, mentions",
      meMateM8: "Comments & tagging per ticket only — not general chat",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Built-in team chat, job comments, mentions"
    },
    {
      category: "Reporting & Profitability",
      meMate: "Real-time dashboards, job-level profit/loss, expenses",
      meMateM8: "Progress reports only — no financial or business-level data",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Real-time dashboards, job-level profit/loss, expenses"
    },

    {
      category: "Ease of Use",
      meMate: "Simple UI, no training needed, designed for SMEs",
      meMateM8: "Complex interface, best for technical/project teams",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Simple UI, no training needed, designed for SMEs"
    },
    {
      category: "Local Support & Setup",
      meMate: "Aussie support, free onboarding, guided setup",
      meMateM8: "Self-setup or enterprise-level implementation required",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
    falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Aussie support, free onboarding, guided setup"
    },
    {
      category: "Best Suited For",
      meMate: "Service-based SMEs: trades, consultants, installers, field teams",
      meMateM8: "Agile software development teams and technical project managers",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Service-based SMEs: trades, consultants, installers, field teams"
    },
    
   
   
  ];
const ComparisonTabs = () => {
  return (
    <div className={style.tabsComparison}>
    <div className={style.tabsTableWrap}>
      <table>
        <thead>
          <tr className="tabsTableWrapButton">
            <th></th>
 <th style={{ textAlign: 'left' }}><span className="darkLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg" alt="service8 logo" />
    </span></th>
  <th style={{ textAlign: 'left' }}>
    <span className="lightLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/jiralogo.png" alt="service8" style={{width: '95px'}} />
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




























