'use client'
import React from 'react'
import Layout from '../../layout';
import AboutMemateComponent from '../../components/about-memate';
import AppWrapper from '../../components/AppWrapper';

const AboutMematePage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <AboutMemateComponent/> 
        </div>
    </Layout>
    </AppWrapper>
  )
}

export default AboutMematePage;
