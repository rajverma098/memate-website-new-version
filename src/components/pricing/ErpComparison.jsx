import React from 'react';
import './ErpComparison.css';

const ErpComparison = () => {
  return (
    <section className="erp-compare">
      <div className="erp-compare-container">
        <div className="erp-header">
          <h2 className="main-heading">
            All-in-one, without the ERP price tag
          </h2>
          <p className="sub-heading">
            Big-business systems cost thousands a month, plus a setup project, before<br />
            your team even logs in. meMate doesn't.
          </p>
        </div>
        <div className="erp-card">
          <h3 className="card-title">
            Monthly subscription for about 10 users, AUD
          </h3>
          <div className="card-body">
            <div className="rows-column">
              <div className="compare-row">
              <div className="compareIn">
<div className="row-label">
                  <span className="brand-memate smokeyGradient">
                   meMate
                  </span>
                  <span className="brand-sub">Business + Work</span>
                </div>
                <div className="row-label">
                  <span className="brand-erp">Typical ERP</span>
                  <span className="brand-sub">MYOB Acumatica, SAP B1</span>
                </div>
                </div>
                
               <div className="graph-wrapper">
        <div className="graph-row">
            <div className="bar-and-amount">
            <div className="chip-orange"></div>
            <span className="value-amount">$162</span>
            </div>
            <span className="value-sub">+ $0 setup</span>
        </div>
        <div className="graph-row">
            <div className="bar-and-amount">
            <div className="bar-grey">
            <div className="bargreyProgress">

            </div>
            </div>
            <span className="value-amount">$2,000–$2,710</span>
            </div>
            <span className="value-sub">+ $30,000–$40,000+ setup project</span>
        </div>
       </div>
              </div>
             
            </div>
            <div className="arrow-column">
              <svg
                width="24"
                height="130"
                viewBox="0 0 24 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4 L20 65 L2 126"
                  stroke="#D9DBE3"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="statement-column">
              <p className="statement-label">A typical ERP</p>
              <p className="statement-highlight">costs 12-16×</p>
              <p className="statement-sub">more per month</p>
            </div>
          </div>
          <p className="card-footnote">
            Bars drawn to scale. Partner-published estimates, Sept 2026.
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default ErpComparison;