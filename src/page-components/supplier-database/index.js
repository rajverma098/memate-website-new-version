'use client'
import React from "react";
import Layout from "../../layout";
import SupplierDatabase from "../../components/supplier-database";
import AppWrapper from "../../components/AppWrapper";

const SupplierDatabasePage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <SupplierDatabase />
      </div>
    </Layout>
    </AppWrapper>
  );
};

export default SupplierDatabasePage;
