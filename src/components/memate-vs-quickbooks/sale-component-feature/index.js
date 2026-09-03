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
      <div className={`${style.gridService8L} m8InFlexLeftQuick`}>
      <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/quickbooklogo.png' alt='Services M8' width={157}
      height={41} />
     <h4>What’s QuickBooks<br/>
      Good For?</h4>
      <p>QuickBooks is best suited for:</p>
      <ul style={{ marginLeft: 20 }}>
                <li>Businesses that need accounting-focused features</li>
                <li>Bookkeeping, invoicing, and payroll processing</li>
                <li>Tracking BAS, GST, and ATO compliance</li>
                <li>Expense categorisation and reconciliation</li>
                <li>Working closely with accountants and bookkeepers</li>
              </ul>
              <div className='quoteCpmpaireCircle'>
                <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/Check+Circle.png' alt='Services M8' width={21} height={21} />
          <p>It’s a strong financial platform — but it’s not designed to manage jobs, projects, teams, or client workflows.</p>
          </div>
        </div>
        <div className={style.gridService8R}>
        <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MacbookProquick.png' alt='Services M8 map' width={567.595}
      height={331.467} />
        </div>
        </div>
        <div className={style.sectionvsCompaire}>
               <span>vs</span>
          </div>
      <div className={style.sectionService8Gradient}>
         <div className={`${style.gridService8L} m8InFlexLeftQuick1`}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg' alt='Services M8' />
      <h4>What’s MeMate<br/>
      Good For?</h4>
     <p>MeMate is built for:</p>
      <ul style={{ marginLeft: 20 }}>
                <li>Australian service businesses that quote, schedule, and deliver work</li>
                <li>Managing leads, clients, jobs, and payments — in one place</li>
                <li>Assigning jobs to teams or subcontractors, tracking time and progress</li>
                <li>Internal team chat, approvals, and calendar-based job scheduling</li>
                <li>Viewing real-time profitability, managing expenses, and sending invoices</li>
              </ul>
              <div className='quoteCpmpaireCircleg'>
                <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/CheckCircle-g.png' alt='Services M8' width={21} height={21} />
          <p>It’s a strong financial platform — but it’s not designed to manage jobs, projects, teams, or client workflows.</p>
          </div>
        </div>
        <div className={style.gridService8R}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/microsoft-mockup-min.png' alt='Services M8 Services' />
        </div>
        </div>

        
        <div className='m8compaireSwitchingSection01'>
        <h2>More benefits to switching to MeMate</h2>
          <div className='m8InSection01'>
              <div className='m8InFlexLeft'>
               <h3>with MeMate<span>Switching is Easy</span></h3>
                <ul style={{ marginLeft: 20 }}>
                <li>Getting started with MeMate is simple.</li>
                <li>We handle your data migration, setup, and onboarding  — completely free.</li>
                <li>You’ll have your jobs, contacts, team, and quotes ready <br/> to go without the stress of rebuilding from scratch. And <br/> if you’re currently using QuickBooks just for invoicing, <br/> we’ll show you how to do even more — all in one <br/>system.</li>
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
               <h3>QuickBooks<span>Alternative</span></h3>
               <p>QuickBooks is a top-tier accounting platform — but that’s where it stops.
              It wasn’t built to manage quotes, schedule jobs, assign work, or track field teams.
              MeMate is the better alternative for Australian businesses that want to handle operations and finances in one place — with full visibility and no patchwork of tools.</p>
              </div>
             
          </div>
        </div>
      <div className={`${style.sectionService8grey} sectionService8greyNew sectionService8greyNew1`}>
      <div className={style.gridService8L}>
      <h4>In short</h4>
      <h6>QuickBooks:</h6>
      <p>QuickBooks is one of the world’s most recognised accounting tools, used by businesses to manage invoices, expenses, payroll, and tax reporting. It’s trusted for bookkeeping — but not built for running jobs, managing teams, or quoting new work.</p>
      <h6>MeMate:</h6>
      <p>on the other hand, is an all-in-one business operations platform built specifically for Australian service providers. It combines quoting, scheduling, CRM, job tracking, invoicing, team management, and expense control — all under one login.</p>
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
        <span className='gradientAnimenate'>MeMate vs Quickbooks</span>
       <p>Choosing software is about finding the right balance between functionality and a simple, intuitive interface.</p>
      </div>
        <ComparisonTabs />
        </div>
        <div className={style.sectionSwapWrap}>
        <h2>Swap Multiple Tools for <span>MeMate</span> and <br></br><span>Save Money</span></h2>
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
            <p>Choosing <strong>MeMate over QuickBooks </strong> means choosing a system designed to run your business — not just plan it.</p>
          </div>
          <div className={style.sectionBenefitFlex}>
            <ul className={style.boxBenifit}>
              <li>
                <div className={`${style.iconStyle} ${style.iconStyle1}`}>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Quoting & Invoicing</h4>
                <p>Quoting, jobs, invoicing, and CRM in one place — no more juggling tools</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle2}`}>
                 <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Built for Aussie service providers </h4>
                <p>From solo trades to growing national teams</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle3}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Free onboarding and setup </h4>
                <p>We migrate your data and configure the platform for you</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle4}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>ATO-friendly reporting</h4>
                <p>Plus integrations with Xero or Quickbooks if needed</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle5}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Team management</h4>
                <p>Assign jobs, track hours, and communicate internally</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle6}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Flat monthly pricing</h4>
                <p>No expensive add-ons or surprise charges</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle7}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Live dashboards</h4>
                <p>See profitability, job status, and expenses at a glance</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle8}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Local support</h4>
                <p>Talk to real people who understand your business</p>
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
