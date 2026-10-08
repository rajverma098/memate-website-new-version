import React from 'react';
import './BetterStart.css';

const BetterStart = () => {
  return (
    <section className="betterStartWrap">
      <div className="bs-header">
        <h2 className="smokeyGradient">a better start for them</h2>
        <p>Your referral isn't just a link. It's a smoother switch to meMate.</p>
      </div>
      <div className="bs-cards">
        <div className="bs-card bs-card-gradient">
          <div className="bs-card-header">
            <span className="bs-check">✓</span>
            <h3 className="bs-card-title">Free data migration</h3>
          </div>
          <p className="bs-card-text">
            We'll move their customers, suppliers, products and services across from their current system or spreadsheets, so they don't start from zero.
          </p>
        </div>
        <div className="bs-card bs-card-dark">
          <div className="bs-card-header">
            <span className="bs-check">✓</span>
            <h3 className="bs-card-title">60 days of priority support</h3>
          </div>
          <p className="bs-card-text">
            Their questions go to the front of the queue for the first 60 days while they get set up.
          </p>
        </div>
        <div className="bs-card bs-card-light">
          <div className="bs-card-header">
            <span className="bs-check bs-check-dark">✓</span>
            <h3 className="bs-card-title bs-card-title-dark">Free trial</h3>
          </div>
          <p className="bs-card-text bs-card-text-dark">
            They can try meMate before paying anything.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetterStart;