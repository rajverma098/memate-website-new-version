'use client'
import Layout from "../../layout";
import TOS from "../../components/terms-and-conditions";
import AppWrapper from "../../components/AppWrapper";
const TOSPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
      <TOS />
      </div>
    </Layout>
    </AppWrapper>
  );
};
export default TOSPage;
