'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
} from "../../components/memate-vs-jira";
import AppWrapper from "../../components/AppWrapper";
import PricingModelCommon from "@/components/pricingmodelcommon";
// import ComingSoon from '../../layout/coming-soon';
// import { Helmet } from "react-helmet-async";
const ServicesVsJiraPage = () => {
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
       {/* <ComingSoon /> */}
    </Layout>
    </AppWrapper>
    </>
  );
};

export default ServicesVsJiraPage;


