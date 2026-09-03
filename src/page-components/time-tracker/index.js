'use client'
import React from 'react'
import Layout from '../../layout';
import TimeTrakerComponent from '../../components/time-tracker';
import AppWrapper from '../../components/AppWrapper';

const TimeTrackerPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <TimeTrakerComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default TimeTrackerPage;