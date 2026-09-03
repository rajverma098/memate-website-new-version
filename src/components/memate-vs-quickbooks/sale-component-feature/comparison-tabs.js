import React, { useState } from "react";
import style from './tabs-comp.module.scss';
import ToolTip from "./tool-tip";
const data = [
    {
      category: "Quoting & Invoicing",
      meMate: "Integrated quoting with client approval, auto-invoicing & payments",
      meMateM8: "Invoicing only - no quoting or approval workflow",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
     falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
      toolTip: "Integrated quoting with client approval, auto-invoicing & payments"
    },
    {
      category: "Job & Project Management",
      meMate: "Job boards, scheduling, contractor assignment, status tracking",
      meMateM8: "Not supported",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Job boards, scheduling, contractor assignment, status tracking"
    },
    {
      category: "CRM & Lead Tracking",
      meMate: "Pipeline, contact history, reminders, follow-ups",
      meMateM8: "Basic client list only no CRM functionality",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Pipeline, contact history, reminders, follow-ups"
    },
    {
      category: "Team Scheduling & Time Tracking",
      meMate: "Timesheets, rosters, shift planning",
      meMateM8: "Limited to payroll time entries",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Timesheets, rosters, shift planning"
    },
    {
      category: "Internal Communication",
      meMate: "Built-in chat, job comments, @mentions",
      meMateM8: "Not included",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Built-in chat, job comments, @mentions"
    },
    {
      category: "Reporting & Profitability",
      meMate: "Real-time dashboards, per-job profit, budget vs actual",
      meMateM8: "Financial reports only no job-level tracking",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Real-time dashboards, per-job profit, budget vs actual"
    },
    {
      category: "Accounting & Compliance",
      meMate: "Basic tracking + Xero/Quickbooks integration for full compliance",
      meMateM8: "Full accounting suite with tax, payroll, ATO reports",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Basic tracking + Xero/MYOB integration for full compliance"
    },
    {
      category: "Ease of Use",
      meMate: "Built for SMEs; no learning curve",
      meMateM8: "Simple Ul, but requires pairing with other tools for jobs",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Built for SMEs; no learning curve"
    },
    {
      category: "Local Support & Setup",
      meMate: "Free setup, Aussie-based team",
      meMateM8: "Self-setup, support via helpdesk or accountants",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
    falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Free setup, Aussie-based team"
    },
    {
      category: "Best Suited For",
      meMate: "Trades, services, multi-location businesses needing job + team control",
      meMateM8: "Businesses focused solely on bookkeeping and finance",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Trades, services, multi-location businesses needing job + team control"
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
  <th style={{ textAlign: 'left' }} colSpan="" ><span className="darkLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg" alt="service8 logo" />
    </span></th>
  <th style={{ textAlign: 'left' }}>
    <span className="lightLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/quickbooklogo.png" alt="service8" style={{width: '157px'}} />
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




























