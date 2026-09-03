'use client'
import React from 'react'
import Layout from '../../layout';
import StatisticComponent from '../../components/statistic';
import AppWrapper from '../../components/AppWrapper';


const StatisticPage = () => {
  return (
    <>   
  <AppWrapper>
    <Layout>
        <StatisticComponent/>
    </Layout>
    </AppWrapper>
    </>
  )
}

export default StatisticPage;
