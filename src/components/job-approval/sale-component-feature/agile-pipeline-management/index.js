import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
            alt="Aussie job sign-off platform"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-variations-img.svg"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Advanced</p>
        <p className="sales-heading-salesF">Variations</p>
        <p className="sales-typeF">Bonus & Deduction</p>
        <p className="sales-description-salesF">
        meMate offers a simple system to adjust job<br/> prices based on specific circumstances. This<br/> feature streamlines 
        claims, ensures an official <br/>workflow, and facilitates clear communication<br/> between all parties involved.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
