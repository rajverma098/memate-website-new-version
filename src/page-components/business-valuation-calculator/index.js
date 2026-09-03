'use client'
import React, { useEffect, useRef } from "react";
import Layout from '../../layout';
import ValuationCalculatorComponent from '../../components/business-valuation-calculator';
import AutomotiveQuesitonAndAns from '../../components/business-valuation-calculator/automotive-question-ans';
import AppWrapper from '../../components/AppWrapper';
import NextStep from '@/components/next-step'; 

import "../../layout/style.css";
import "../../App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const ValuationCalculatorPage = () => {

  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
    <div className="apply-container ">
    <ValuationCalculatorComponent/>   
      </div>
   <NextStep text="Book a Demo"  />
        <AutomotiveQuesitonAndAns />  
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default ValuationCalculatorPage;












