import React from "react";
import "./style.css";
import SkyNews from "../../svg/SkyNews";
import TheAustralian from "../../svg/TheAustralian";
import AbcDotCom from "../../svg/AbcDotCom";
import TheGardian from "../../svg/TheGardian";
const FeaturedOn = () => {
  return (
    <div className="featured-section">
      <div className="featured-text">
        <p>Featured on:</p>
        <div className="brand-names">
          <SkyNews type="image/svg+xml"/>
          <TheAustralian type="image/svg+xml"/>
          <AbcDotCom type="image/svg+xml"/>
          <TheGardian type="image/svg+xml"/>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
