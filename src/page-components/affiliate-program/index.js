'use client'
import React from 'react'
import Layout from '../../layout';
import ReferAndEarnComponent from '../../components/affiliate-program';
import AppWrapper from '../../components/AppWrapper';
import SmoothScroll from "./SmoothScroll";
const ReferAndEarnPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
         <SmoothScroll/>  
        <ReferAndEarnComponent/>  
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default ReferAndEarnPage;
