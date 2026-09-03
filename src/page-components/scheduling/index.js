'use client'
import React from 'react'
import Layout from '../../layout';
import SchedulingComponent from '../../components/scheduling';
import AppWrapper from '../../components/AppWrapper';
const SchedulingPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <SchedulingComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default SchedulingPage;
