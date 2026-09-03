import React from "react";
import Images from "../../assests/images";
import "./styles.css";
import Link from "next/link";
import TronRequestADemo from "../../layout/hover-button/TronRequestADemo";
import DarkMemateBlackBut from "../../layout/hover-button/DarkMemateBlackBut";
import WhiteButtonBammer from "../../layout/hover-button/WhiteButtonBammer";
import Image from "next/image";
const BussinessManagement = () => {
  return (
    <div className="home-page-content filtercolorbox">
      <div className="home-container-wrapper">
        <div
          className="home-page-section"
        >
          <div className="home-platform">
            <h1>All-in-One Business Management Software Platform</h1>
          </div>
          <div className="gradientHeading  header-text smokeyGradient">
            to run your business
          </div>
        </div>

        <div className="image-wrapper">
          <div className="macBook-image">
            <div className="big-img-mac">
              <div className="big-img-macMain">
                  <Image
                    alt="Business Management Software"
                    src={Images.landingHero}                           
                    priority                      
                    placeholder="empty"         
                    width={1200} height={600} sizes="100vw" style={{ width: "100%", height: "auto" }}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-use">
        <p>
        Easy-to-Use Business Management Software: to Start
          <br /> Run and Succeed in Your Business{" "}
        </p>
      </div>
      <div className="businesses-mode fontFamilyRomanHead">
       <span>
          Made for Small to Medium Businesses & Business Projects, Offering
          Simplicity & Control
        </span>
      </div>
     <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      link2="https://app.memate.com.au/onboarding"
      buttonTextdark="Show Me How It Works"
      buttonTextlight="Start Free Trial"
      showButton1={true}
      showButton2={true}
    />
    </div>
  );
};

export default BussinessManagement;
