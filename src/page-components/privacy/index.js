'use client'
import React from 'react'
import Layout from '../../layout';
import PrivacyComponent from '../../components/privacy';
import AppWrapper from '../../components/AppWrapper';
const PrivacyPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <PrivacyComponent/> 
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default PrivacyPage;
