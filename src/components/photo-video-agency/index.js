import React from 'react'
import './style.css';
import PhotoHeader from './photo-video-header';
import PhotoBussinessManagement from './photo-video-bussiness-managment';
import PhotoCrousel from './photo-video-crousel';
import SuccessStories from "../../components/success-stories";
// import PhotoMoreSpecific from './photo-video-more-specific';
import PhotoQuesitonAndAns from './photo-video-question-ans';
// import ReadMoreData from './photo-video-read-more';
import NewsAndUpdate from "../../components/news-and-updates";


const PhotoPageContent = ({postsLatest}) => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <PhotoHeader/>
        <PhotoBussinessManagement/>
        <PhotoCrousel/>
        {/* <PhotoMoreSpecific/> */}
        </div>
        <div className='singleHeadWrapper'>
          <h4>Reach out to us to discover how meMate can streamline operations at your company.</h4>
          <p>At meMate, we are committed to empowering businesses across Australia by providing a simple yet powerful business management software solution that enhances efficiency and growth.</p>
         </div>
          <SuccessStories />
        <div className='industry-page-parent'>
         <NewsAndUpdate postsLatest={postsLatest} />
        <PhotoQuesitonAndAns/>
        </div>
      
    </div>
    </>
  )
}

export default PhotoPageContent
