import React from 'react';
import './SpApps.css';
import {ArrowLeft,ArrowRight} from "lucide-react";
import CheckBlackIcon from "../../svg/CheckBlackIcon";
const SpApps = () => {
  return (
    <section className="sp-apps">
      <div className="sp-apps-container">
        <div className="sp-apps-header">
          <h2 className="main-heading">
            Stop paying for five apps that don't talk<br />
            to each other
          </h2>
          <p className="sub-heading">
            Most small businesses juggle a CRM, a quoting tool, a job app, a timesheet
            app, spreadsheets and a group chat. meMate replaces them with one
            system and one login, so a quote becomes a job, then an invoice, without
            anyone retyping it.
          </p>
        </div>
        <div className="comparison-row">
          <div className="apps-cluster">
            <div className="app-bubbles">
             <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/Appstack-img.png' alt='meMate business management apps' />
            
            </div>
            <p className="cluster-label">5 apps · 5 logins · 5 bills</p>
          </div>
          <div className="arrow-divider">
            <span><ArrowRight size={26} strokeWidth={1.6} /></span>
          </div>
          <div className="memate-card">
            <div className="memate-logo">
              <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/memate-logo-img-sp.png' alt='meMate business software logo' />
            </div>
            <p className="memate-label">1 app · from $99.85</p>
          </div>
        </div>
        <div className="comparison-table">
          <div className="table-header-row">
            <span className="col-left">WHAT YOU USE TODAY</span>
            <span className="col-mid"></span>
            <span className="col-right">MEMATE REPLACES IT WITH</span>
          </div>
          <div className="table-row">
            <span className="col-left">CRM or a contacts spreadsheet</span>
            <span className="col-mid"><ArrowRight size={18} strokeWidth={1.6} /></span>
            <span className="col-right">
              <span className="check-icon"><CheckBlackIcon /></span>
              Client and supplier management
            </span>
          </div>
          <div className="table-row">
            <span className="col-left">Quoting tool or Word templates</span>
            <span className="col-mid"><ArrowRight size={18} strokeWidth={1.6} /></span>
            <span className="col-right">
              <span className="check-icon"><CheckBlackIcon /></span>
              Quotes and quote calculator
            </span>
          </div>
          <div className="table-row">
            <span className="col-left">Job or scheduling app</span>
            <span className="col-mid"><ArrowRight size={18} strokeWidth={1.6} /></span>
            <span className="col-right">
              <span className="check-icon"><CheckBlackIcon /></span>
              Job scheduling and shifts
            </span>
          </div>
          <div className="table-row">
            <span className="col-left">Timesheet app</span>
            <span className="col-mid"><ArrowRight size={18} strokeWidth={1.6} /></span>
            <span className="col-right">
              <span className="check-icon"><CheckBlackIcon /></span>
              Timesheets and time tracker
            </span>
          </div>
          <div className="table-row">
            <span className="col-left">Project board</span>
            <span className="col-mid"><ArrowRight size={18} strokeWidth={1.6} /></span>
            <span className="col-right">
              <span className="check-icon"><CheckBlackIcon /></span>
              Project management
            </span>
          </div>
          <div className="table-row">
            <span className="col-left">WhatsApp or group chats</span>
            <span className="col-mid"><ArrowRight size={18} strokeWidth={1.6} /></span>
            <span className="col-right">
              <span className="check-icon"><CheckBlackIcon /></span>
              Internal chat, SMS and email
            </span>
          </div>
          <div className="table-row">
            <span className="col-left">Profit spreadsheet</span>
            <span className="col-mid"><ArrowRight size={18} strokeWidth={1.6} /></span>
            <span className="col-right">
              <span className="check-icon"><CheckBlackIcon /></span>
              Real-time profitability and reports
            </span>
          </div>
        </div>
        <div className="bottom-highlight">
          <p>
            Add up what you pay today. If it's more than <strong>$162</strong> a month, meMate pays for
            itself from day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpApps;