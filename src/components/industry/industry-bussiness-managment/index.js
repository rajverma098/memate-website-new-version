import React from 'react'
import './style.css'
import IndustryPowerfulStreamline from './industry-powerful-streamline'
import IndustryWorkFlowSolution from './industry-workflow-solution'
import TailoredMarketing from './industry-tailored-marketing'
import FinanicalManagement from './industry-financial-management'
import ClientCollaboration from './industry-client-colaboration'
import ScalableCustomizable from './indusry-scalable-customizable'
import IndustryDifference from './industry-difference'
const IndustryBussinessManagement = () => {
  return (
    <div className='industry-bussiness-management-wrapper ' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className='industrySectionHead'>
     <h5>meMate is your solution.</h5>
     <p>With meMate, handle every aspect of your projects efficiently, from quoting to<br/> managing and controlling your workflow.</p>
      </div>
      <div className='industry-bussiness-category-wrapper'>
            <IndustryPowerfulStreamline/>
            <IndustryWorkFlowSolution/>
            <TailoredMarketing/>
            <FinanicalManagement/>
            <ClientCollaboration/>
            <ScalableCustomizable/>
            <IndustryDifference/>
      </div>
    </div>
  )
}

export default IndustryBussinessManagement
