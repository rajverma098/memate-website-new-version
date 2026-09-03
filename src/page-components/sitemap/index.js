'use client';
import React from 'react'
import Layout from '../../layout';
import SitemapComponent from '../../components/sitemap';
import AppWrapper from '../../components/AppWrapper';
const SitemapPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <SitemapComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default SitemapPage;
