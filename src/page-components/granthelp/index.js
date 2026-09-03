'use client'
import Layout from "../../layout";
import {
  GeandHelpBannerComponent,
  MuchAdminComponent,
  WhyBusinessesChooseUs,
  TryToBestComponent,
} from "../../components/granthelp";
import AppWrapper from "../../components/AppWrapper";
import SmoothScroll from "./SmoothScroll"; 
const RunYourBusinessPage = () => {
  return (
    <>
    <AppWrapper>
    <Layout>
      <SmoothScroll/>
     <div className="bgshadowwrapper1">
      <GeandHelpBannerComponent />
      <MuchAdminComponent />
      <WhyBusinessesChooseUs />
      <TryToBestComponent />
      </div>  
    </Layout>  
    </AppWrapper>
    </>
  );
};

export default RunYourBusinessPage;


