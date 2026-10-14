'use client'
import React from 'react'
import Layout from '../../layout';
import LandscapersComponent from '../../components/landscapers';
import AppWrapper from '../../components/AppWrapper';
import SmoothScroll from "./SmoothScroll";

const LandscapersPage = () => {

  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper salesFeatureBg">
           <SmoothScroll/>  
        <LandscapersComponent/>  
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default LandscapersPage;
