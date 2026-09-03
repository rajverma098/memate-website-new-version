'use client'

import React from 'react'
import Layout from '../../layout';
import MemateFaqsComponent from '../../components/memate-faqs';
import AppWrapper from '../../components/AppWrapper';
const MemateFaqsPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <MemateFaqsComponent/>
        </div>
    </Layout>
    </AppWrapper>
  )
}

export default MemateFaqsPage;
