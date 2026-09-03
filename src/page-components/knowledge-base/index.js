'use client'
import React from 'react'
import Layout from '../../layout';
import KnowledgeBaseComponent from '../../components/knowledge-base'
import AppWrapper from '../../components/AppWrapper';
const KnowledgeBasePage = () => {
  return (
    <AppWrapper>
      <Layout>
        <KnowledgeBaseComponent/>
      </Layout>
    </AppWrapper>
  )
}

export default KnowledgeBasePage;
