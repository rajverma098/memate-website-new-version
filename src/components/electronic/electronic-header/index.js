import React from 'react'
import './style.css'
import DarkMemateBlackBut from '@/layout/hover-button/DarkMemateBlackBut';
const ElectronicHeader = () => {
  return (
    <>
    <div className='NextHeaderWrap'>
      <h1>Repair Shop Management Software for Electronics Businesses</h1>
      <h2>software for repair shops</h2>
      <p>Meet meMate, a complete solution built with repair shops in mind. Whether you’re fixing cameras, phones, computers, or any other electronics, our software is tailored to make your business run smoother and more efficiently.</p>
    </div>
      <div className='NextHeaderWrapper'>
    <div className='industryNewHead'>
    <div className='LeftSide'>
      <span className='leftSpan'>Software that helps Australian repair <br/>shops
operate efficiently</span>
       <h4>Electronic Repair Specialists</h4>
       <p>With meMate, you can effortlessly communicate with clients and effortlessly submit jobs, all from a centralised and streamlined interface. Say goodbye to scattered systems and embrace the convenience of meMate for unparalleled business management in the  electronics repair industry.</p>
        <div className='topSpaceGap'>
         <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      link2="https://app.memate.com.au/onboarding"
      className="alignLeft"
      target="_blank"
      buttonTextdark="Book a Demo"
      buttonTextlight="Start Free Trial"
      showButton1={true}
      showButton2={true}
    />
       </div>
    </div>
    <div className='RightSide'>
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/electronic-head-photo.png" width="100%" alt="small repair business software"/>
    </div>
    </div>
   </div>
    </>
  )
}

export default ElectronicHeader
