'use client'
import Layout from "../../layout";
import React from "react";
import SoftwareUpdate from "../../components/software-update";
import AppWrapper from "../../components/AppWrapper";
const SoftwareUpdatePage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
      <SoftwareUpdate />
      </div>
    </Layout>
    </AppWrapper>
  );
};
export default SoftwareUpdatePage;