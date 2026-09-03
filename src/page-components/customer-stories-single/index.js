'use client'
import CameraFix from "../../components/customer-stories-single/camera-fix";
import ProVinyl from "../../components/customer-stories-single/pro-vinyl";
import EliteLife from "../../components/customer-stories-single/elite-life";
import Layout from "../../layout";
import React from "react";
import { usePathname } from "next/navigation";
import BoatWizard from "../../components/customer-stories-single/boat-wizard";
import SortedMedia from "../../components/customer-stories-single/sorted-media";
import { notFound } from "next/navigation";
import AppWrapper from "../../components/AppWrapper";

const CustomerStoriesPageSingle = ({ params }) => {
  const pathname = usePathname();
  const slug = params?.slug;
  
  // Define valid slugs
  const validSlugs = ['camera-fix', 'case-study-provinyl-car-wrapping-business-software', 'elite-life', 'boat-wizard', 'sorted-media'];
  
  // Check if slug is valid, if not redirect to 404
  if (slug && !validSlugs.includes(slug)) {
    notFound();
  }

// const metadata = getMetadata()
  return (
    <>
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        {(pathname === "/customer-stories/camera-fix" || slug === "camera-fix") && <CameraFix />}
        {(pathname === "/customer-stories/case-study-provinyl-car-wrapping-business-software" || slug === "case-study-provinyl-car-wrapping-business-software") && <ProVinyl />}
        {(pathname === "/customer-stories/elite-life" || slug === "elite-life") && <EliteLife />}
        {(pathname === "/customer-stories/boat-wizard" || slug === "boat-wizard") && (
          <BoatWizard />
        )}
        {(pathname === "/customer-stories/sorted-media" || slug === "sorted-media") && (
          <SortedMedia />
        )}
      </div>
    </Layout>
    </AppWrapper>
    </>
  );
};
export default CustomerStoriesPageSingle;
