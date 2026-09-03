'use client'
import React from 'react'
import Layout from '../../layout'
import ElectronicPageContent from '../../components/electronic'
// import { Helmet } from 'react-helmet-async'
import AppWrapper from '../../components/AppWrapper'

const ElectronicPage = ({postsLatest}) => {
  return (
    <>
    <AppWrapper>
    <Layout>
      <ElectronicPageContent postsLatest={postsLatest}/>
    </Layout>
    </AppWrapper>
    </>
  )
}

export default ElectronicPage
