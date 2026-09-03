'use client';

import { useEffect } from "react";
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/supplier-management";
import AppWrapper from "../../components/AppWrapper";
import SmoothScroll from "../granthelp/SmoothScroll";
import PricingModelCommon from "@/components/pricingmodelcommon";

const ORANGE_GRADIENT =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='371' height='674' viewBox='0 0 371 674' fill='none'%3E%3Cg filter='url(%23f0)'%3E%3Cellipse cx='216.899' cy='336.822' rx='47.1992' ry='167.122' fill='%23FFB259' fill-opacity='0.44'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='f0' x='0' y='0' width='433.798' height='673.644' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0'/%3E%3CfeBlend in='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='84.85'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E\")";

const SKYBLUE_GRADIENT =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='321' height='824' viewBox='0 0 321 824' fill='none'%3E%3Cg filter='url(%23f1)'%3E%3Cellipse cx='107.799' cy='411.973' rx='43.244' ry='242.273' fill='%231EB2DC' fill-opacity='0.33'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='f1' x='-105.145' y='0' width='425.888' height='823.946' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0'/%3E%3CfeBlend in='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='84.85'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E\")";

const SupplierManagementPage = () => {

  useEffect(() => {
    const wrappers = document.querySelectorAll(".bgshadowwrapper");
    const salesFeatureWrapper = document.querySelector(".salesFeatureBg");
    if (!salesFeatureWrapper) return;

    wrappers.forEach((wrapper, index) => {
      const isEven = index % 2 === 0;

      wrapper.style.backgroundImage = isEven || !isEven
        ? `${SKYBLUE_GRADIENT}, ${ORANGE_GRADIENT}`
        : `${SKYBLUE_GRADIENT}, ${ ORANGE_GRADIENT}`;

      wrapper.style.backgroundRepeat = "no-repeat, no-repeat";
      wrapper.style.backgroundPosition = isEven
        ? "left center, right center"
        : "left center, right center";

      wrapper.style.backgroundSize = "auto, auto";
      wrapper.style.zIndex = "999";
      // wrapper.style.transform = "translateY(200px)";
      // wrapper.style.animation = "gradientAnimation 10s ease-in-out infinite";
      const yPositions = ["0%", "25%", "50%", "75%", "100%"]; 

    const images = [
      ...yPositions.map(() => SKYBLUE_GRADIENT), 
      ...yPositions.map(() => ORANGE_GRADIENT), 
    ].join(", ");

    const positions = [
      ...yPositions.map((y) => `left ${y}`),
      ...yPositions.map((y) => `right ${y}`),
    ].join(", ");

    salesFeatureWrapper.style.backgroundImage = images;
    salesFeatureWrapper.style.backgroundRepeat = "no-repeat";
    salesFeatureWrapper.style.backgroundPosition = positions;
    salesFeatureWrapper.style.backgroundSize = "auto";
    salesFeatureWrapper.style.zIndex = "999";
    });
  }, []);

  return (
    <AppWrapper>
      <Layout>
        <SmoothScroll/>

        <div className="bgshadowwrapper">
          <SalesComponent />
        </div> 

        <div className="bgshadowwrapper salesFeatureBg">
          <SalesComponentFeature />
        </div>

        <div className="bgshadowwrapper">
         <PricingModelCommon />
        </div>

        <div className="bgshadowwrapper">
          <QuestionAnswer />
        </div>

      </Layout>
    </AppWrapper>
  );
};

export default SupplierManagementPage;
