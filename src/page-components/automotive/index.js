'use client'
import React from 'react'
import Layout from '../../layout'
import AutomotivePageContent from '../../components/automotive'
import AppWrapper from '../../components/AppWrapper'
// import { Helmet } from 'react-helmet-async'

const AutomotivePage = ({postsLatest}) => {
  return (
    <>
    {/* <AppWrapper> */}
    <Layout>
      <AutomotivePageContent postsLatestMainIndustry={postsLatest} postsLatest={postsLatest}/>
    </Layout>
    {/* </AppWrapper> */}
    </>
  )
}

export default AutomotivePage
