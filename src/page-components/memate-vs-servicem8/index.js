'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
} from "../../components/memate-vs-servicem8";
import AppWrapper from "../../components/AppWrapper";
import PricingModelCommon from "@/components/pricingmodelcommon";
// import { Helmet } from "react-helmet-async";
const Services8Page = () => {
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

export default Services8Page;
