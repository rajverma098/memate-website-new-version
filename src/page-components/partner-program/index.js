'use client'
import React from 'react'
import Layout from '../../layout';
import PartnerProgramComponent from '../../components/partner-program';
import AppWrapper from '../../components/AppWrapper';
const PartnerProgramPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <PartnerProgramComponent/>
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default PartnerProgramPage;
