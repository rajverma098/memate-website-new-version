'use client'
import React from 'react'
import Layout from '../../layout';
import PartnerProgramComponentNew from '../../components/partner-program-new';
import AppWrapper from '../../components/AppWrapper';
import SmoothScroll from "./SmoothScroll";
const PartnerProgramPageNew = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
         <SmoothScroll/>  
        <PartnerProgramComponentNew/>
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default PartnerProgramPageNew;
