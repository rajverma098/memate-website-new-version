'use client'
import React from 'react'
import Layout from '../../layout';
import MemateWikiComponent from '../../components/memate-wiki';
import AppWrapper from '../../components/AppWrapper';
const MemateWikiPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <MemateWikiComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default MemateWikiPage;
