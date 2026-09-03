import "./style.css";
import MiddleSection from "./brand-middle-section";
import style from './brand-module.module.scss';
import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const BrandComponent = () => {

  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className={`kb-main-section ${style.mainHeadinstyle}`}>
      <h2 className="latest-update-text latest-brandMain latest-update-head memate-brand headerPadding">
      brand <br></br>overview
      </h2>
      <h1 className="heading-text-blog">meMate Brand Assets & Media Kit</h1>
      </div>
      <MiddleSection /> 
      <div>

      </div>
    </>
  );
};

export default BrandComponent;
