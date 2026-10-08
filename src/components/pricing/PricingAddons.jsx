import React from 'react';
import './PricingAddons.css';
import ChatButton from "./ChatButton"; 

const PricingAddons = () => {
  return (
    <section className="pricing-addons">
      <div className="pricing-addons-container">
        <div className="pricing-addons-header">
          <h2>One base. Add-ons you control</h2>
          <p>
            Start with Business, then add only what your business needs.<br />
            Everything connects, so nothing gets retyped.
          </p>
        </div>
        <div className="top-section">
          <div className="base-card">
            <div className="base-card-header">
              <span className="badge">THE BASE</span>
              <span className="brand-name">meMate Business</span>
            </div>
            <h3 className="base-title">Your foundation</h3>
            <p className="base-description">
              Clients, suppliers, quotes, projects, invoicing,
              expenses, real-time profit, reports and team chat, all
              in one place.
            </p>
            <div className="base-pricing">
              <span className="price">$99.85</span>
              <span className="period">/mo</span>
            </div>
            <p className="base-includes">Includes 2 desktop users</p>
          </div>
          <div className="right-side">
            <div className="addon-card work-card">
              <div className="addon-header">
                <span className="addon-dot orange">+</span>
                <span className="addon-name">meMate Work</span>
              </div>
              <h4 className="addon-title">Add it when your team hits the road</h4>
              <p className="addon-desc">
                Job scheduling, shifts, timesheets, and employee and contractor
                management.
              </p>
              <div className="addon-price">
                <span className="amount">+$62.32</span>
                <span className="period">/mo</span>
              </div>
              <p className="addon-includes">Includes 5 mobile users</p>
            </div>
            <div className="addons-row">
              <div className="addon-card addon-cardL01">
                <div className="addon-header">
                  <span className="addon-dot orange">+</span>
                  <span className="addon-name">Enquiries</span>
                </div>
                <h4 className="addon-title">Never miss a lead</h4>
                <p className="addon-desc">
                  Every enquiry lands in one inbox and turns into a quote in a click.
                </p>
                <div className="addon-price">
                  <span className="amount">+$20.63</span>
                  <span className="period">/mo</span>
                </div>
              </div>
              <div className="addon-card addon-cardL02">
                <div className="addon-header">
                  <span className="addon-dot grey">+</span>
                  <span className="addon-name">Assets</span>
                </div>
                <h4 className="addon-title">Know where your gear is</h4>
                <p className="addon-desc">
                  Tools, vehicles and equipment, with service dates.
                </p>
                <div className="addon-price">
                  <span className="amount">+$9.85</span>
                  <span className="period">/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="addon-card users-card addon-cardL03">
            <div className="addon-header">
              <span className="addon-dot dblue">+</span>
              <span className="addon-name">Users</span>
            </div>
            <h4 className="addon-title">Desktop for the office, app for the field</h4>
            <div className="two-col-pricing">
              <div>
                <span className="user-label">Desktop users</span>
                <span className="user-sub">For office staff</span>
                <div className="addon-price">
                  <span className="amount">+$14.77</span>
                  <span className="period">per desktop user</span>
                </div>
              </div>
              <div>
                <span className="user-label">Mobile app users</span>
                <span className="user-sub">For crews and contractors</span>
                <div className="addon-price">
                  <span className="amount">+$3.18</span>
                  <span className="period">per app user</span>
                </div>
              </div>
            </div>
          </div>
          <div className="addon-card addon-cardL04">
            <div className="addon-header">
              <span className="addon-dot purple">+</span>
              <span className="addon-name">Locations</span>
            </div>
            <h4 className="addon-title">Grow to more sites</h4>
            <p className="addon-desc">
              Run every branch from one account.
            </p>
            <div className="addon-price">
              <span className="amount">+$45.85</span>
              <span className="period">per location/mo</span>
            </div>
          </div>
          <div className="addon-card dotted-card addon-cardL05">
            <span className="change-label">CHANGE ANYTIME</span>
            <h4 className="addon-title">Adjust any month</h4>
            <p className="addon-desc">
              Switch add-ons on or off from your account.
            </p>
            <p className="no-lock-in">No tiers, no lock-in.</p>
          </div>
        </div>
        <div className="enterprise-bar">
          <div className="enterprise-left">
            <h4 className="enterprise-heading">Enterprise</h4>
            <p className="enterprise-desc">
              Need it custom?{' '}
              <span className="enterprise-sub">
                Your own server, custom workflows, integrations.
              </span>
            </p>
          </div>
           <ChatButton / >
        </div>
      </div>
    </section>
  );
};

export default PricingAddons;