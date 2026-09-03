'use client'
import React from 'react'
import Layout from '../../layout'
import AddYourCompany from '../../components/supplier-database/add-your-company';
import AppWrapper from '../../components/AppWrapper';

const AddYourCompanyPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <AddYourCompany />
    </Layout>
    </AppWrapper>
  )
}

export default AddYourCompanyPage
