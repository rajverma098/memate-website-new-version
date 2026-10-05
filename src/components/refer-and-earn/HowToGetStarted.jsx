import React, { useState } from 'react';
import './HowToGetStarted.css';

const HowToGetStarted = () => {
  const [activeTab, setActiveTab] = useState('affiliates');

  return (
    <section className="howToWrap">
      <div className="ht-container">
        <h2 className="smokeyGradient">How to get started</h2>
        <div className="ht-tabs">
          <button 
            className={`ht-tab ${activeTab === 'affiliates' ? 'ht-tab-active' : ''}`}
            onClick={() => setActiveTab('affiliates')}
          >
            Affiliates
          </button>
          <button 
            className={`ht-tab ${activeTab === 'customers' ? 'ht-tab-active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            meMate customers
          </button>
        </div>
        <div className="ht-steps-container">
          
          {/* Affiliates Steps */}
          {activeTab === 'affiliates' && (
            <div className="ht-steps">
              <div className="ht-step">
                <div className="ht-num">1</div>
                <p className="ht-text">
                  <strong>Submit your affiliate request</strong> through the form below
                </p>
              </div>
              <div className="ht-dash">—</div>
              <div className="ht-step">
                <div className="ht-num">2</div>
                <p className="ht-text">
                  <strong>Our Affiliate Manager will contact</strong> you for a short phone or Zoom call
                </p>
              </div>
              <div className="ht-dash">—</div>
              <div className="ht-step">
                <div className="ht-num">3</div>
                <p className="ht-text">
                  <strong>We'll walk you through meMate,</strong> show how it works and how it can help your clients or audience
                </p>
              </div>
              <div className="ht-dash">—</div>
              <div className="ht-step">
                <div className="ht-num">4</div>
                <p className="ht-text">
                  <strong>We'll set up your affiliate page and link,</strong> and send you regular statements showing your referrals and payments
                </p>
              </div>
            </div>
          )}

          {/* meMate Customers Steps */}
          {activeTab === 'customers' && (
            <div className="ht-steps">
              <div className="ht-step">
                <div className="ht-num">1</div>
                <p className="ht-text">
                  <strong>Log in</strong> and open <strong>Settings → Refer & Earn</strong>
                </p>
              </div>
              <div className="ht-dash">—</div>
              <div className="ht-step">
                <div className="ht-num">2</div>
                <p className="ht-text">
                  <strong>Share your link</strong> with a business you think would benefit
                </p>
              </div>
              <div className="ht-dash">—</div>
              <div className="ht-step">
                <div className="ht-num">3</div>
                <p className="ht-text">
                  <strong>Get paid</strong> $100 at 35 days and $200 at 100 days after they subscribe.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;