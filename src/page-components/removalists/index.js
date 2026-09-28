'use client'
import React from 'react'
import Layout from '../../layout';
import RemovalistsComponent from '../../components/removalists';
import AppWrapper from '../../components/AppWrapper';
import SmoothScroll from "./SmoothScroll";

const RemovalistsPage = () => {

  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper salesFeatureBg">
           <SmoothScroll/>  
        <RemovalistsComponent/> 
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default RemovalistsPage;
