'use client'
import React, { useEffect } from "react";
import Layout from "../../layout";
import BrandComponent from "../../components/brand";
import AppWrapper from "../../components/AppWrapper";
const BrandPage = () => {
  useEffect(() => {
    document.body.className = "brand-information";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <AppWrapper>
      <Layout>
        <div className="bgshadowwrapper">
          <BrandComponent />
        </div>
      </Layout>
    </AppWrapper>
  );
};

export default BrandPage;
