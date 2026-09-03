import React from 'react'
import './style.css'
import AutomotiveEfficient from './automotive-efficient'
import AutomotiveIntuitive from './automotive-Intuitive'
import AutomotiveScheduling from './automotive-scheduling'
import AutomotiveContractor from './automotive-contractor'
import AutomotiveProfitability from './automotive-profitability'
import AutomotiveDatabase from './automotive-database'
import AutomativeWorkshop from './automative-workshop'
const AutomotiveBussinessManagement = () => {
  return (
    <div className='industry-bussiness-management-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className='industrySectionHead'>
     <h5>meMate is your solution.</h5>
     <p>Manage your car wrapping and detailing business with ease. meMate helps you<br/> streamline workflows, track projects, manage teams, and deliver outstanding<br/> results, all through a simple and reliable platform built for your industry.</p>
      </div>
      <div className='industry-bussiness-category-wrapper'>
            <AutomotiveEfficient/>
            <AutomotiveIntuitive/>
            <AutomotiveScheduling/>
            <AutomotiveContractor/>
            <AutomotiveProfitability />
            <AutomotiveDatabase/>
            <AutomativeWorkshop/>
      </div>
    </div>
  )
}

export default AutomotiveBussinessManagement
