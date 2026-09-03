import './style.css';
import style from './difference-module.module.scss';
import ComparisonTabs from './comparison-tabs';
import FindOneApplication from '@/components/find-one-all';
import Image from 'next/image';
import DarkMemateBlackBut from '@/layout/hover-button/DarkMemateBlackBut';

const SalesComponentFeature = () => {
  return (
    <div className='sales-component-feature-wrapper'>
      <div className='sales-component-feature' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <span className='gradientAnimenate'>the difference</span>
       
      </div>
      <div className="sales-feature-wrapper">

      <div className={style.sectionService8}>
      <div className={style.gridService8L}>
      <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/netsuite.png' alt='Services M8' width={160.403}
      height={40} />

      <h4>What’s NetSuite<br/>Good For?</h4>
      <p>NetSuite is a powerful, cloud-based ERP system built for enterprise-level operations. It offers deep integrations for finance, inventory, and global commerce — making it a strong choice for large corporations or complex business networks. 
    </p>
      
        </div>
        <div className={style.gridService8R}>
        <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/Macbook-Pro-mockup-min.png' alt='Services M8 map' width={567.595}
      height={331.467} />
        </div>
        </div>
        <div className={style.sectionvsCompaire}>
               <span>vs</span>
          </div>
      <div className={style.sectionService8Gradient}>
      <div className={style.gridService8L}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg' alt='Services M8' />
      <h4>What’s MeMate<br/>
      Good For?</h4>
      <p>MeMate, on the other hand, is designed to be run from an office environment. It offers features for quoting, invoicing, and project management, with the ability to assign and track jobs for employees and contractors. </p>
      <p>Although it is less flexible in terms of on-the-go usage, MeMate provides a more structured and secure system, enabling managers to maintain a strict workflow.</p>
        </div>
        <div className={style.gridService8R}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/compaire-servicem8-01-min.png' alt='Services M8 Services' />
        </div>
        </div>

        
        <div className='m8compaireSwitchingSection01'>
        <h2>More benefits to switching to MeMate</h2>
          <div className='m8InSection01'>
              <div className='m8InFlexLeft'>
               <h3>MeMate offers<span>a simpler, faster path</span></h3>
             
                <ul style={{ marginLeft: 20 }}>
                <li>No learning curve </li>
                <li>No onboarding fees </li>
                <li>No third-party integrations required to get started</li>
              </ul>
            
              </div>
              <div className='m8InFlexRight'>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/m8image01-min.jpg' alt='m8image01'/>
              </div>
          </div>
        </div>
        <div className='m8compaireSwitchingSection02'>
          <div className='m8InSection01'>
             <div className='m8InFlexRight'>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/m8image02.jpg' alt='m8image02'/>
              </div>
              <div className='m8InFlexLeft'>
               <h3>NetSuite<span>Alternative</span></h3>
               <p>NetSuite is a robust enterprise ERP, ideal for multinational companies with large teams and complex financial layers.
              MeMate is the smarter alternative for Australian service businesses — built for simplicity, speed, and everyday business operations like quoting, scheduling, tracking jobs, and getting paid.</p> 
              </div>
          </div>
        </div>

      <div className={`${style.sectionService8grey} sectionService8greyNew sectionService8greyNew1`}>
      <div className={style.gridService8L}>
      <h4>In short</h4>
      <p>MeMate could be a great alternative to NetSuite for your business. Reach out to our onboarding team today for a free demo!</p>
      <h6>NetSuite:</h6>
      <p>Complex, expensive, and built for global enterprises.</p>
      <h6>MeMate:</h6>
      <p>Simple, powerful, and built for everyday Australian business owners — even those running national operations.</p>
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
        <div className={style.gridService8R}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/memate-inshot-min.png' alt='Services inshort' />
        </div>
        </div>

        <div className={style.sectionCompareWrap}>
       
        <div className={`sales-component-feature ${style.gradi}`}
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
           <h3>Compare</h3>
        <span className='gradientAnimenate'>MeMate vs NetSuite</span>
       <p>Choosing software is about finding the right balance between functionality and a simple, intuitive interface.</p>
      </div>
        <ComparisonTabs />
        </div>
        <div className={style.sectionSwapWrap}>
        <h2>Swap Multiple Tools for <br></br><span>MeMate</span> and <span>Save Money</span></h2>
        <div className={style.sectionSwapWrapBg}>
        <div className={style.sectionSwapL}>
          <p><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing-cardLT.png' alt='pricingcard' /></p>
          <a href="https://app.memate.com.au/requestdemo"> <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/group469444LB.png' alt='group469444' /></a>
        </div>
        <div className={style.sectionSwapM}>
           <span>vs</span>
        </div>
        <div className={style.sectionSwapR}>
        <p><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/group469446RT.png' alt='group469446' /></p>
        <p><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/group469445RB.png' alt='group469445' /></p>
        </div>
        </div>
        </div>

      <div className={style.sectionOurBenefit}>
        <div className={style.sectionBenefitHead}>
            <h2>Our Benefits</h2>
            <p>Choosing <strong>MeMate over NetSuite Project </strong> means choosing a system designed to run your business — not just plan it.</p>
          </div>
          <div className={style.sectionBenefitFlex}>
            <ul className={style.boxBenifit}>
              <li>
                <div className={`${style.iconStyle} ${style.iconStyle1}`}>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                  <h4>No onboarding fees</h4>
                <p>We migrate your data and set up your system free of charge</p>
                </div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle2}`}>
                 <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                <h4>Built for Aussie service businesses</h4>
                <p> Not just global enterprises</p>
                </div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle3}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                <h4>Flat, affordable pricing</h4>
                <p>No surprise charges or forced add-ons</p>
                </div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle4}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                <h4>All-in-one system</h4>
                <p>CRM, quoting, invoicing, scheduling, time tracking, chat & more</p>
                </div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle5}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                <h4>Simple to learn, easy to use</h4>
                <p> No IT team required</p>
                </div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle6}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                <h4>Local support</h4>
                <p>Talk to real people, right here in Australia</p>
                </div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle7}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                <h4>Real-time insights</h4>
                <p>Track profitability, expenses, and client activity in one dashboard</p>
                </div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle8}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                <h4>Designed for growing operations</h4>
                <p>Whether you’re solo or managing teams across states</p>
                </div>
              </li>
            </ul>

            </div>
          </div>
          <div className={style.sectionFindOneApplication}>
            <FindOneApplication />
          </div>
    </div>
    </div>
  )
}

export default SalesComponentFeature;
