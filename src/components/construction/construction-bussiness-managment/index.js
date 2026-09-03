import React from 'react'
import './style.css'
import ConstructionEfficient from './construction-efficient'
import ConstructionIntuitive from './construction-Intuitive'
import ConstructionScheduling from './construction-scheduling'
import ConstructionContractor from './construction-contractor'
import ConstructionProfitability from './construction-profitability'
import ConstructionDatabase from './construction-database'
import ConstructionWorkshop from './construction-workshop'
const ConstructionBussinessManagement = () => {
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
     <p>From quoting to invoicing — meMate replaces spreadsheets, apps, and <br/>whiteboards with a single system.</p>
      </div>
      <div className='industry-bussiness-category-wrapper'>
            <ConstructionEfficient/>
            <ConstructionIntuitive/>
            <ConstructionScheduling/>
            <ConstructionContractor/>
            <ConstructionProfitability />
            <ConstructionDatabase/>
            <ConstructionWorkshop/>
      </div>
    </div>
  )
}

export default ConstructionBussinessManagement
