'use client'
import React from 'react'
import Layout from '../../layout';
import FeatureseComponent from '../../components/features'; 
import AppWrapper from '../../components/AppWrapper';
const FeaturesPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <FeatureseComponent/>
        </div>
    </Layout>
    </AppWrapper>
  )
}

export default FeaturesPage;
