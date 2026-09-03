"use client";
import React from "react";
import Layout from "../../layout";
import IndustriesComponent from "../../components/industries";
import AppWrapper from "../../components/AppWrapper";
const IndustriesPage = () => {
  return (
    <>
      <AppWrapper>
        <Layout>
          <div className="bgshadowwrapper">
            <IndustriesComponent />
          </div>
        </Layout>
      </AppWrapper>
    </>
  );
};

export default IndustriesPage;
