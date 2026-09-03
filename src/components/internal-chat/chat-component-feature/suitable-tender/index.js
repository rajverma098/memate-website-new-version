import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Intuitive</p>
        <p className="sales-heading-salesF">Complete Chat<br/> History </p>
        <p className="sales-typeF">in One Place</p>
        <p className="sales-description-salesF">
        Never lose track of a conversation—every<br/> message, file, and update is stored and organized<br/> by project for easy reference anytime.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="branch management software"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/internalchat06-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default SuitableTender;
