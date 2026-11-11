'use client'
import React from 'react'
import Layout from '../../layout';
import CarDetailingSoftwareComponent from '../../components/car-detailing-software';
import AppWrapper from '../../components/AppWrapper';
import SmoothScroll from "./SmoothScroll";

const CarDetailingSoftwarePage = () => {

  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper salesFeatureBg">
           <SmoothScroll/>  
        <CarDetailingSoftwareComponent/> 
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default CarDetailingSoftwarePage;
