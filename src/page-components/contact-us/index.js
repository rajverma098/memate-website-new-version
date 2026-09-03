'use client'
import React from 'react'
import Layout from '../../layout'
import ContactUsComponent from '../../components/contact-us';
import AppWrapper from '../../components/AppWrapper';

const ContactUsPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <div className="bgshadowwrapper">
      <ContactUsComponent/>    
      </div> 
    </Layout>
    </AppWrapper>
  )
}

export default ContactUsPage
