import React from 'react'
import './style.css';
import AutomotiveHeader from './automotive-header';
import AutomotiveBussinessManagement from './automotive-bussiness-managment';
import AutomotiveCrousel from './automotive-crousel';
// import AutomotiveMoreSpecific from './automotive-more-specific';
import SuccessStories from "../../components/success-stories";
import AutomotiveQuesitonAndAns from './automotive-question-ans';
import ReadMoreData from './automotive-read-more';
import NewsAndUpdate from "../../components/news-and-updates";


const AutomotivePageContent = ({postsLatestMainIndustry, postsLatest}) => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <AutomotiveHeader/>
        <AutomotiveBussinessManagement/>
        <AutomotiveCrousel/>
        </div>
       
        <div className='singleHeadWrapper'>
          <h4>meMate for Car Wrapping & Detailing Services</h4>
          <h3>Reach out to us to discover how meMate can streamline operations at your company.</h3>
          <p>From quick and accurate quoting to project scheduling, contractor management, and detailed profitability tracking, meMate helps you streamline every aspect of your business. With integrated supplier and client databases, complete workshop control, and performance tracking for employees, you can optimise your operations with ease and transparency.</p>
         </div>
        {/* <AutomotiveMoreSpecific/> */}
        <SuccessStories />
        <NewsAndUpdate postsLatest={postsLatest} />
        {/* <ReadMoreData postsLatestReadMore={postsLatestMainIndustry}/> */}
        <div className='industry-page-parent'>
        <AutomotiveQuesitonAndAns/>
        
      </div>
    </div>
    </>
  )
}

export default AutomotivePageContent
