import React from 'react'
import './style.css';
import StartupsHeader from './startups-header';
import StartupsBussinessManagement from './startups-bussiness-managment';
import StartupsCrousel from './startups-crousel';
// import StartupsMoreSpecific from './startups-more-specific';
import './startups-more-specific/style.css';
import StartupsQuesitonAndAns from './startups-question-ans';
// import ReadMoreData from './startups-read-more';
import SuccessStories from "../../components/success-stories";
import NewsAndUpdate from "../../components/news-and-updates";


const StartupsPageContent = ({postsLatestMainIndustry, postsLatest}) => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <StartupsHeader/>
        <StartupsBussinessManagement/>
        <StartupsCrousel/>
        </div>
        {/* <div className='singleHeadWrapper'>
          <h4>Reach out to us to discover how meMate can streamline operations at your company.</h4>
          <p>Our Business Management software has been tested with multiple agencies across industries, including digital marketing, photography, video production, and development.</p>
         </div> */}
        {/* <ReadMoreData postsLatestReadMore={postsLatestMainIndustry}/> */}
        {/* <StartupsMoreSpecific/> */}
        <p className="industry-more-specific-heading">meMate for Startups and New Businesses</p>
        <p className="industry-more-specific-description">
        meMate is designed to help startups and new businesses streamline operations from day one. With features like quick quoting, project management, expense tracking, and client communication, meMate gives you the tools to grow efficiently and stay organised.
        </p>
        <SuccessStories />
        <div className='industry-page-parent'>
        <NewsAndUpdate postsLatest={postsLatest} />
        <StartupsQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default StartupsPageContent
