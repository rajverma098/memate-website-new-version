import React from 'react';
import './EarnReward.css';
import CheckBlackIcon from "../../svg/CheckBlackIcon";
import CheckIcon from "../../svg/CheckIcon";

const EarnReward = () => {
  return (
    <section className="earnRewardWrap">
      <div className="er-header">
        <h2 className="smokeyGradient">simple, fixed reward</h2>
        <p>One reward, the same for everyone. You'll always know exactly what you earn.</p>
      </div>
      <div className="er-cards">
        <div className="er-card">
            <div className="carder">
            <div className="carderHead">
            <h3 className="er-price">$100</h3>
              <p className="er-days">After 35 days</p>
            </div>
          <div className="er-content">
            <div className="er-check"><CheckBlackIcon /></div>
            <p className="er-text">
              Paid once your referred business has been on a paid meMate subscription for 35 days.
            </p>
          </div>
          </div>
        </div>
        <div className="er-symbol">+</div>
        <div className="er-card">
          <div className="carder">
             <div className="carderHead">
            <h3 className="er-price">$200</h3>
          <p className="er-days">After 100 days</p>
          </div>
          <div className="er-content">
            <div className="er-check"><CheckBlackIcon /></div>
            <p className="er-text">
              Paid once they reach 100 days on a paid subscription.
            </p>
          </div>
          </div>
        </div>
        <div className="er-symbol">=</div>
        <div className="er-card er-card-gradient">
            <div className="carder">
                <div className="carderHead">
          <h3 className="er-price">$300</h3>
          </div>
          <div className="er-content">
            <div className="er-check er-check-light"> <CheckIcon /></div>
            <p className="er-text">
              Total per referred business No tiers, no targets, no fine print about percentages.
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className="er-divider"></div>
      <div className="er-footer">
        <h3 className="er-footer-title">Refer 5 businesses → <strong>$1,500</strong></h3>
        <h3 className="er-footer-title">Refer 10 → <strong>$3,000</strong></h3>
        <p className="er-note">
          Rewards are per new business account and include GST. Free trial days don't count towards the 35 and 100 days. Paid by bank transfer.
        </p>
      </div>
    </section>
  );
};

export default EarnReward;