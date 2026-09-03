import React, { useState } from "react";
import style from './tabs-comp.module.scss';
import ToolTip from "./tool-tip";
const data = [
    {
      category: "Quoting & Invoicing",
      meMate: "Built-in quoting, client approval, auto-invoicing",
      meMateM8: "Invoicing available, quoting not included in all plans",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
      toolTip: "Built-in quoting, client approval, auto-invoicing"
    },
    {
      category: "Job & Project Management",
      meMate: "Visual job board, scheduling, contractor assignment, progress tracking",
      meMateM8: "Enterprise-grade tools, better for large project teams",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Visual job board, scheduling, contractor assignment, progress tracking"
    },
    {
      category: "CRM & Lead Tracking",
      meMate: "Contact history, lead pipeline, reminders",
      meMateM8: "Limited CRM; add-ons or third-party apps often required",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Contact history, lead pipeline, reminders"
    },
    {
      category: "Team Scheduling & Time Tracking",
      meMate: "Built-in roster, clock-in/out, shift tracking",
      meMateM8: "Not included; may require external tools",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Built-in roster, clock-in/out, shift tracking"
    },
    {
      category: "Internal Communication",
      meMate: "Team chat, job-based notes, @mentions",
      meMateM8: "Not supported",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Team chat, job-based notes, @mentions"
    },
    {
      category: "Reporting & Analytics",
      meMate: "Real-time dashboards, job costing, expenses, profit per job",
      meMateM8: "Strong financial reports, but no job-level profitability",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Real-time dashboards, job costing, expenses, profit per job"
    },
    {
      category: "Accounting & Compliance",
      meMate: "Basic expense tracking, GST & BAS summaries, Sage  integration",
      meMateM8: "Full accounting suite, BAS, payroll, ATO compliance",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Basic expense tracking, GST & BAS summaries, Sage integration"
    },
    {
      category: "Local Support & Setup",
      meMate: "Free setup and migration, Aussie support team",
      meMateM8: "Support varies by plan, setup typically DIY or via accountant",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Free setup and migration, Aussie support team"
    },
    {
      category: "Ease of Use",
      meMate: "Built for SMEs, clean UI, no training needed",
      meMateM8: "Moderate learning curve, accounting-first interface",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      alseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Built for SMEs, clean UI, no training needed"
    },
    {
      category: "Best Suited For",
      meMate: "Aussie service businesses with national operations",
      meMateM8: "Finance-focused businesses with external job/project systems",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Aussie service businesses with national operations"
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
  <th style={{ textAlign: 'left' }}>
    <span className="darkLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg" alt="service8 logo" />
    </span></th>
  <th style={{ textAlign: 'left' }}>
    <span className="lightLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/sagelogo.png" alt="service8" style={{width: '102px'}} />
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




























