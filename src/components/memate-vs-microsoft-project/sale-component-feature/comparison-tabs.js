import React, { useState } from "react";
import style from './tabs-comp.module.scss';
import ToolTip from "./tool-tip";
const data = [
    {
      category: "Quoting & Invoicing",
      meMate: "Built-in quoting, client approval, auto-invoicing",
      meMateM8: "Invoicing available, quoting not included in all plans",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
     falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
      toolTip: "Built-in quoting, client approval, auto-invoicing"
    },
    {
      category: "Job & Project Management",
      meMate: "Job board, visual scheduling, task tracking, contractor assignment",
      meMateM8: "Advanced project planning with Gantt charts & dependencies",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Job board, visual scheduling, task tracking, contractor assignment"
    },
    {
      category: "CRM & Lead Tracking",
      meMate: "Lead capture, contact history, sales pipeline",
      meMateM8: "No built-in CRM functionality",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Lead capture, contact history, sales pipeline"
    },
    {
      category: "Time Tracking & Scheduling",
      meMate: "Timesheets, shift planning, team calendar",
      meMateM8: "Available in high-tier plans; not central to daily use",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Timesheets, shift planning, team calendar"
    },
    {
      category: "Internal Communication",
      meMate: "Built-in team chat, comments, tagging",
      meMateM8: "Not included — relies on external tools like Teams",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Built-in team chat, comments, tagging"
    },
    {
      category: "Real-time Reporting",
      meMate: "Profit per job, expenses, income dashboards",
      meMateM8: "Project progress reports only; no business financials",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Profit per job, expenses, income dashboards"
    },
    {
      category: "Team Management",
      meMate: "Assign to staff or subcontractors, track hours & tasks",
      meMateM8: "Resource allocation tools; complex to manage",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Assign to staff or subcontractors, track hours & tasks"
    },
    {
      category: "Ease of Use",
      meMate: "Built for SMEs; quick to learn, fast to deploy",
      meMateM8: "Steep learning curve; best for trained project managers",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Built for SMEs; quick to learn, fast to deploy"
    },
    {
      category: "Pricing Model",
      meMate: "Flat monthly fee, all features included",
      meMateM8: "Tiered pricing, licenses per user, Microsoft ecosystem required",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
    falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Flat monthly fee, all features included"
    },
    {
      category: "Best Suited For",
      meMate: "Australian trades, service businesses, project-based SMEs",
      meMateM8: "Large organisations with formal project planning teams",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Australian trades, service businesses, project-based SMEs"
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
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/Microsoft-logo.png" alt="service8" style={{width: '45px'}} />
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




























