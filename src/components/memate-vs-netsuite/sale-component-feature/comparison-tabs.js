import React, { useState } from "react";
import style from './tabs-comp.module.scss';
import ToolTip from "./tool-tip";
const data = [
    {
      category: "Quoting & Invoicing",
      meMate: "Built-in quoting tools, auto-invoicing, client approvals",
      meMateM8: "Available, but often requires setup/customisation",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
      toolTip: "Built-in quoting tools, auto-invoicing, client approvals"
    },
    {
      category: "Project & Job Management",
      meMate: "Visual job board, scheduling, contractor assignment, progress tracking",
      meMateM8: "Enterprise-grade tools, better for large project teams",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Visual job board, scheduling, contractor assignment, progress tracking"
    },
    {
      category: "CRM & Lead Tracking",
      meMate: "Simple CRM with pipeline, contact history, and reminders",
      meMateM8: "Job management with a focus on checklists and job completion",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Simple CRM with pipeline, contact history, and reminders"
    },
    {
      category: "Team Scheduling & Time Tracking",
      meMate: "Staff clock-in/out, shift planner, task timers",
      meMateM8: "Available via modules or legalvision tools",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Staff clock-in/out, shift planner, task timers"
    },
    {
      category: "Internal Communication",
      meMate: "Built-in messaging, job comments, tagging, @mentions",
      meMateM8: "Limited — usually handled via third-party integrations",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
     falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Built-in messaging, job comments, tagging, @mentions"
    },
    {
      category: "Reporting & Analytics",
      meMate: "Real-time job profitability, expenses, client stats",
      meMateM8: "Robust reports, but requires configuration and training",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Real-time job profitability, expenses, client stats "
    },
    {
      category: "Local Support & Setup",
      meMate: "Free onboarding, Australian-based team, data migration included",
      meMateM8: "Setup through NetSuite legalvisions; paid onboarding",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Free onboarding, Australian-based team, data migration included"
    },
    {
      category: "Ease of Use",
      meMate: "Easy to learn, clean interface, built for SMEs",
      meMateM8: "Complex interface, more suited to IT-managed environments",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Easy to learn, clean interface, built for SMEs"
    },
    {
      category: "Pricing Transparency",
      meMate: "Flat monthly plans, no hidden fees",
      meMateM8: "Tiered pricing, often custom and high for full features",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Flat monthly plans, no hidden fees"
    },
    {
      category: "Best Suited For",
      meMate: "Aussie service businesses with national operations",
      meMateM8: "Large enterprises with global structures and teams",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
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
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/netsuite.png" alt="service8" />
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




























