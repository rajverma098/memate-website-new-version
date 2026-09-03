// 'use client';

import { Helmet } from 'react-helmet-async';
// import AppWrapper from '../../components/AppWrapper';
// import AboutMematePage from '../../page-components/about-memate';

export default function MetaGenerator() {
  return (
    <>
    {/* <AppWrapper> */}
        <Helmet>
            <title>About Us | MeMate | All-in-One Business Management Software</title>
            <meta titlename="description" content="Learn about MeMate, Australia’s all-in-one business platform empowering SMEs with CRM, ERP, and project management tools to simplify business management." />
            <meta property="og:title" content="About Us | MeMate | All-in-One Business Management Software" />
            <meta property="og:description" content="Learn about MeMate, Australia’s all-in-one business platform empowering SMEs with CRM, ERP, and project management tools to simplify business management." />
        </Helmet>
      
    {/* </AppWrapper> */}
    </>
  );
}

// export default MetaGenerator;