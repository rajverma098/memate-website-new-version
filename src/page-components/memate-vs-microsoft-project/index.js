'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
} from "../../components/memate-vs-microsoft-project";
import AppWrapper from "../../components/AppWrapper";
import PricingModelCommon from "@/components/pricingmodelcommon";
// import { Helmet } from "react-helmet-async";
const ServicesVsMicrosoftPage = () => {
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

export default ServicesVsMicrosoftPage;
