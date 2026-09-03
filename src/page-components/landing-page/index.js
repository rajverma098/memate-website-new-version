'use client'
import { useEffect } from "react";
import BussinessManagement from "../../components/bussiness-management";
import CommonChallenges from "../../components/common-challenges";
import FeaturedOn from "../../components/featured-on";
import FindOneApplication from "../../components/find-one-all";
import AutomotiveQuesitonAndAns from "./automotive-question-ans/index";
import NewsAndUpdate from "../../components/news-and-updates";
// import NextStep from "../../components/next-step"
import SeamlessInegration from "../../components/seamless-integration"; 
import SimpleVersatilePowerful from "../../components/simple-versatile-powerful";
import SuccessStories from "../../components/success-stories";
import ZeroOfferOnboarding from "../../components/zero-offer-onboarding";
import Layout from "../../layout";
// import { Helmet } from 'react-helmet-async';
import LessBusyness from "./less-busyness";
import CaseStudiesHome from "../../components/casestudies-home";
import BrandLogoSlide from "../../components/logopartner";
import HowItWork from "../../components/how-it-work";
import HomePageFeatuchers from "./HomePageFeatuchers";

// import AppWrapper from "../../components/AppWrapper";
import SmoothScroll from "./SmoothScroll";

const ORANGE_GRADIENT =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='371' height='674' viewBox='0 0 371 674' fill='none'%3E%3Cg filter='url(%23f0)'%3E%3Cellipse cx='216.899' cy='336.822' rx='47.1992' ry='167.122' fill='%23FFB259' fill-opacity='0.44'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='f0' x='0' y='0' width='433.798' height='673.644' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0'/%3E%3CfeBlend in='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='84.85'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E\")";

const SKYBLUE_GRADIENT =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='321' height='824' viewBox='0 0 321 824' fill='none'%3E%3Cg filter='url(%23f1)'%3E%3Cellipse cx='107.799' cy='411.973' rx='43.244' ry='242.273' fill='%231EB2DC' fill-opacity='0.33'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='f1' x='-105.145' y='0' width='425.888' height='823.946' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0'/%3E%3CfeBlend in='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='84.85'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E\")";


const LandingPage = ({ postsLatest }) => {
  
    useEffect(() => {
      const wrappers = document.querySelectorAll(".bgshadowwrapper");
      const salesFeatureWrapper = document.querySelector(".salesFeatureBg");
      if (!salesFeatureWrapper) return;
  
      wrappers.forEach((wrapper) => {
        wrapper.style.backgroundImage = `${SKYBLUE_GRADIENT}, ${ORANGE_GRADIENT}`;
        wrapper.style.backgroundRepeat = "no-repeat, no-repeat";
        wrapper.style.backgroundPosition = "left center, right center";
        wrapper.style.backgroundSize = "auto, auto";
        wrapper.style.zIndex = "999";
      });

      salesFeatureWrapper.style.backgroundImage = `${SKYBLUE_GRADIENT}, ${ORANGE_GRADIENT}`;
      salesFeatureWrapper.style.backgroundRepeat = "no-repeat, no-repeat";
      salesFeatureWrapper.style.backgroundPosition = "left center, right center";
      salesFeatureWrapper.style.backgroundSize = "auto, auto";
      salesFeatureWrapper.style.zIndex = "999";
    }, []);
  return (
    <>
      {/* <AppWrapper> */}
        <SmoothScroll/> 
        <Layout>
        
          <BussinessManagement />       
          <LessBusyness />     
          <FeaturedOn />     
          <FindOneApplication /> 
          <CommonChallenges /> 
          <HowItWork />
          <div className="bgshadowwrapper salesFeatureBg">
           <HomePageFeatuchers /> 
         </div>
           <ZeroOfferOnboarding />  
          <SeamlessInegration />
          <BrandLogoSlide />    
          <CaseStudiesHome />           
          {/* <SimpleVersatilePowerful /> */}
          <SuccessStories />   
          <NewsAndUpdate postsLatest={postsLatest} />
           <AutomotiveQuesitonAndAns />  
        </Layout>
      {/* </AppWrapper> */}
    </>
  );
};

export default LandingPage;