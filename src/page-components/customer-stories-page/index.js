'use client'
import Layout from "../../layout";
import React from "react";
import CustomerStories from "../../components/customer-stories";
import AppWrapper from "../../components/AppWrapper";
const CustomerStoriesPage = () => {


  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
     <CustomerStories />
     </div>
    </Layout>
    </AppWrapper>
  );
};
export default CustomerStoriesPage;