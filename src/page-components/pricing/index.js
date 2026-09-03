'use client'

import React from 'react'
import Layout from '../../layout'
import PricingComponent from '../../components/pricing';
import AppWrapper from '../../components/AppWrapper';

const PricingPage = () => {
  return (
    <AppWrapper>
    <Layout>
     <div className="bgshadowwrapper">
        <PricingComponent/> 
      </div> 
    </Layout>
    </AppWrapper>
  )
}

export default PricingPage
