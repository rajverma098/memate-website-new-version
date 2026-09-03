'use client'
import React from 'react'
import Layout from '../../layout';
import ResourcesComponent from '../../components/resources';
import AppWrapper from '../../components/AppWrapper';
const ResourcesPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <div className="bgshadowwrapper">
        <ResourcesComponent/>
        </div>
    </Layout>
    </AppWrapper>
  )
}

export default ResourcesPage;
