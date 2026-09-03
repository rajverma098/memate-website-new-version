'use client'
import React from 'react'
import Layout from '../../layout'
import StartupsPageContent from '../../components/startups'
// import AppWrapper from '../../components/AppWrapper'
// import { Helmet } from 'react-helmet-async'

const StartupsPage = ({postsLatest}) => {
  return (
    <>
    {/* <AppWrapper> */}
    <Layout>
      <StartupsPageContent postsLatest={postsLatest}/>
    </Layout>
    {/* </AppWrapper> */}
    </>
  )
}

export default StartupsPage
