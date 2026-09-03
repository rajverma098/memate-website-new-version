import './style.css';
import style from './difference-module.module.scss';
import Link from 'next/link';
import TronRequestADemo from '../../../layout/hover-button/TronRequestADemo';
import ComparisonTabs from './comparison-tabs';
import FindOneApplication from '@/components/find-one-all';
import WhiteButtonBammer from '@/layout/hover-button/WhiteButtonBammer';
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
      <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/sagelogo.png' alt='Services M8' width={102.403}
      height={40} />
     <h4>What’s Sage<br/>
      Good For?</h4>
      <p>Sage is a trusted accounting platform offering cloud-based financial tools, payroll processing, and inventory tracking. It’s ideal for businesses focused heavily on bookkeeping, with multiple options tailored to different countries and compliance standards.
    </p>
        </div>
        <div className={style.gridService8R}>
        <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/sage-macbook-pro-mockup-min.png' alt='Services M8 map' width={567.595}
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
      <p>MeMate, on the other hand, is purpose-built for Australian small to medium-sized businesses. It combines project management, quoting, invoicing, team coordination, CRM, and financial tools into one simple, affordable platform — without the enterprise-level complexity.</p>
        </div>
        <div className={style.gridService8R}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/sagem-ockup-min.png' alt='Services M8 Services' />
        </div>
        </div>
        <div className='m8compaireSwitchingSection01'>
        <h2>More benefits to switching to MeMate</h2>
          <div className='m8InSection01'>
              <div className='m8InFlexLeft'>
               <h3>with MeMate<span>Switching is Easy</span></h3>
                <ul style={{ marginLeft: 20 }}>
                <li>We handle the entire setup and migration for free,<br/> including your customer data, contacts, and job history.  </li>
                <li>No third-party consultants. No hidden onboarding fees.</li>
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
               <h3>Sage<span>Alternative</span></h3>
               <p>Sage is a solid accounting tool, but it stops short when it comes to managing jobs, quoting, scheduling, or running your team. </p>
              <p>MeMate is the all-in-one alternative — built for Aussie businesses that need everything in one place, from client management to job delivery to payment.</p>
              </div>
          </div>
        </div>
      <div className={`${style.sectionService8grey} sectionService8greyNew sectionService8greyNew1`}>
      <div className={style.gridService8L}>
      <h4>In short</h4>
      <h6>Sage: </h6>
      <p>Great for accountants and finance departments.</p>
      <h6>MeMate:</h6>
      <p>Built for everyday Australian business owners who want to manage quotes, projects, payments, and teams — all in one powerful system.</p>
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
        <span className='gradientAnimenate'>MeMate vs Sage</span>
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
            <p>When you choose <strong>MeMate over Sage</strong>, you’re not just getting software — you’re getting a complete business command centre, designed specifically for how Australian service businesses operate.</p>
          </div>
          <div className={style.sectionBenefitFlex}>
            <ul className={style.boxBenifit}>
              <li>
                <div className={`${style.iconStyle} ${style.iconStyle1}`}>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                <h4>All-in-one system</h4>
                <p>Quotes, jobs, schedules, team tracking, invoicing, chat, CRM — all in one platform</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle2}`}>
                 <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>No setup fees</h4>
                <p>We migrate your data and help you get started, free of charge</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle3}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Simple to use</h4>
                <p>Clean interface built for business owners, not accountants</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle4}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Local support</h4>
                <p>Talk to real people, based right here in Australia</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle5}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Flat, affordable pricing </h4>
                <p>No hidden fees, no complex packages</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle6}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Built for daily operations </h4>
                <p>Not just finance, but the full job-to-payment journey</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle7}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Grows with you</h4>
                <p>Whether you’re solo or managing teams nationwide</p></div>
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
