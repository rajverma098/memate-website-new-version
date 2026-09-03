// import { useState, useEffect } from 'react';  
import "./style.css";
import MiddleSection from "./knowledge-base-middle-section";
// import { Helmet } from 'react-helmet-async';
const KnowledgeBaseMain = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/knowledgeBaseMain.png";

const KnowledgeBaseComponent = () => {


  return (
    <>
      <div className="kb-main-section">
        <div className="kb-main-heading">knowledge <br /> base</div>
        <h1 className="metatags">meMate Help Centre | Tutorials & Feature Walkthroughs</h1>
        <div className="kb-main-image KnowledgeBaseMain">
          <img src={KnowledgeBaseMain} alt="contact us main image"  />
        </div>
      </div>
      <MiddleSection />
      <div>
      </div>
    </>
  );
};

export default KnowledgeBaseComponent;
