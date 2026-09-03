'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
} from "../../components/memate-vs-netsuite";
import AppWrapper from "../../components/AppWrapper";
import PricingModelCommon from "@/components/pricingmodelcommon";
// import { Helmet } from "react-helmet-async";
const ServicesNetsuitePage = () => {
  return (
    <>
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
      <SalesComponent />
      <SalesComponentFeature />
       <PricingModelCommon />
      <QuestionAnswer />
      </div>
    </Layout>
    </AppWrapper>
    </>
  );
};

export default ServicesNetsuitePage;
