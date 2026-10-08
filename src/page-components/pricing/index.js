'use client'

import React from 'react'
import Layout from '../../layout'
import PricingComponent from '../../components/pricing';
import AppWrapper from '../../components/AppWrapper';
import SmoothScroll from "./SmoothScroll";
const PricingPage = () => {
  return (
    <AppWrapper>
    <Layout>
     <div className="bgshadowwrapper">
      <SmoothScroll/>  
        <PricingComponent/>   
      </div> 
    </Layout>
    </AppWrapper>
  )
}

export default PricingPage
