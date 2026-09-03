'use client'
import React from 'react'
import Layout from '../../layout';
import SubprocessorsComponent from '../../components/subprocessors';
import AppWrapper from '../../components/AppWrapper';
const SubprocessorsPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <SubprocessorsComponent/>   
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default SubprocessorsPage;
