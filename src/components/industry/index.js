'use client'
import React from 'react'
import './style.css';
import IndustryHeader from './industry-header';
import IndustryBussinessManagement from './industry-bussiness-managment';
import IndustryCrousel from './industry-crousel';
// import IndustryMoreSpecific from './industry-more-specific';
import IndustyQuesitonAndAns from './industry-question-ans';
// import ReadMoreData from './industry-read-more';
import SuccessStories from "../../components/success-stories";
import NewsAndUpdate from "../../components/news-and-updates";


const IndustryPageContent = ({postsLatest}) => {
 
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <IndustryHeader/>
        <IndustryBussinessManagement/>
        <IndustryCrousel/>
         </div>
         <div className='singleHeadWrapper'>
          <h4>Reach out to us to discover how meMate can streamline operations at your company.</h4>
          <p>Our Business Management software has been tested with multiple agencies across industries, including digital marketing, photography, video production, and development.</p>
         </div>
         <SuccessStories />
        <NewsAndUpdate postsLatest={postsLatest} />
        <div className='industry-page-parent'>
        <IndustyQuesitonAndAns/>
     </div>
    </div>
    </>
  )
}

export default IndustryPageContent
