import React from "react";
import "./style.css";
import Link from "next/link";
import TronButton from "../../../layout/hover-button/tourn-but";
import WhiteNormalButton from "../../../layout/hover-button/WhiteNormalButton";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";

const FeatureCard = (props) => {
 
  return (
    <>
      <div className="all-in-one allinonefeatueWrap" >
        <div className="strean-line">
       <div className={`main-operation${props.className ? ` ${props.className}` : ''}`}>
            <div className="operation-left">
              <p className="all-text">{props.subHeading}</p>
              <div className="smallH2Heading">{props.topHeading}</div>
              <div className="mediumHeadText">{props.mainHeading}</div>

              <div className="operation-desp">
                <p>{props.description}</p>
              </div>
              <div className="request-btn request-btn-bg" 
   >
         <DarkMemateBlackBut
          link2="/features"
          className="alignLeft"
          buttonTextlight="See All Features"
          showButton2={true}
        />
      </div>
            </div>

            <div className="operation-right">
              {/* <h1> {props.titleImage} </h1> */}
              {/* <div className="boost-image">{props.maxImage}</div> */}
              <div className="boost-image">{props.maxImage}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
