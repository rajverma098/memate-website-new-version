'use client'
import React from 'react'
import Layout from '../../layout';
import DeleteRequestComponent from '../../components/delete-request';
import AppWrapper from '../../components/AppWrapper';

const DeleteRequestPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <DeleteRequestComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default DeleteRequestPage;