import React from 'react'
import './style.css';
import ElectronicHeader from './electronic-header';
import ElectronicBussinessManagement from './electronic-bussiness-managment';
import ElectronicCrousel from './electronic-crousel';
// import ElectronicMoreSpecific from './electronic-more-specific';
// import ReadMore from './electronic-read-more';
import ElectronicQuesitonAndAns from './electronic-question-ans';
// import ReadMoreData from './electronic-read-more';
import SuccessStories from "../../components/success-stories";
import NewsAndUpdate from "../../components/news-and-updates";


const ElectronicPageContent = ({postsLatest}) => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <ElectronicHeader/>
        <ElectronicBussinessManagement/>
        <ElectronicCrousel/>
        </div>
        <div className='singleHeadWrapper'>
          <h4>Reach out to us to discover how meMate can streamline operations at your company.</h4>
          <p>At meMate, we are committed to empowering businesses across Australia by providing a simple yet powerful business management software solution that enhances efficiency and growth.</p>
         </div>
        <SuccessStories />
        <NewsAndUpdate postsLatest={postsLatest} />
        <div className='industry-page-parent'>
        {/* <ElectronicMoreSpecific/> */}
        {/* <ReadMoreData postsLatestReadMore={postsLatestMainIndustry}/> */}
        <ElectronicQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default ElectronicPageContent
