'use client'
import React from 'react'
import Layout from '../../layout';
import AffiliateProgramComponent from '../../components/affiliate-program';
import AppWrapper from '../../components/AppWrapper';
const PartnerProgramPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <AffiliateProgramComponent/>
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default PartnerProgramPage;
