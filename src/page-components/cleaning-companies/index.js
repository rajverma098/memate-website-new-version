'use client'
import React from 'react'
import Layout from '../../layout';
import CleaningBusinessComponent from '../../components/cleaning-companies';
import AppWrapper from '../../components/AppWrapper';
import SmoothScroll from "./SmoothScroll";

const CleaningBusinessPage = () => {

  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper salesFeatureBg">
           <SmoothScroll/>  
        <CleaningBusinessComponent/> 
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default CleaningBusinessPage;
