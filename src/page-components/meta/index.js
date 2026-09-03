'use client'
import Layout from "../../layout";
import Meta from "../../components/meta";
import AppWrapper from "../../components/AppWrapper";
const MetaPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
      <Meta />
      </div>
    </Layout>
    </AppWrapper>
  );
};
export default MetaPage;
