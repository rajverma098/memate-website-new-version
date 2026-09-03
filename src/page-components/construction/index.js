'use client'
import React from 'react'
import Layout from '../../layout';
import ConstructionComponent from '../../components/construction';
// import AppWrapper from '../../components/AppWrapper';
const ConstructionPage = ({postsLatest}) => {
  return (
    // <AppWrapper>
    <Layout>
        <ConstructionComponent postsLatest={postsLatest}/>
    </Layout>
    // </AppWrapper>
  )
}

export default ConstructionPage;
