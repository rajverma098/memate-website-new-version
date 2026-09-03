// 'use client';

import React from 'react';
// import AppWrapper from '../../components/AppWrapper';
import AddYourCompanyPage from '../../page-components/add-your-company';
export const metadata = {
    title: 'Add Your Company | MeMate Business Directory Australia',
    description: 'Add your company to MeMate today! Boost visibility, connect with clients, and grow your business online. Start now with MeMate. Join now and grow your business.',
    openGraph: {
        title: 'Add Your Company | MeMate Business Directory Australia',
        description: 'Add your company to MeMate today! Boost visibility, connect with clients, and grow your business online. Start now with MeMate. Join now and grow your business.',
    },
    alternates: {
    canonical: 'https://memate.com.au/add-your-company',
  },
}


export default function AddYourCompany() {
    return (
        // <AppWrapper>
            <AddYourCompanyPage />
        // </AppWrapper>
    );
}