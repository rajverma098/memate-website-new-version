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
      <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/Microsoft-logo.png' alt='Services M8' width={45.403}
      height={40} />
     <h4>What’s Microsoft Project<br/>
      Good For?</h4>
      <p>Microsoft Project is a powerful project planning tool used in enterprise settings for Gantt charts, resource allocation, and long-term program tracking. It’s ideal for teams with dedicated project managers and complex workflows.
    </p>
        </div>
        <div className={style.gridService8R}>
        <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/microsoft-mro-mockup-min.png' alt='Services M8 map' width={567.595}
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
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/microsoft-mockup-min.png' alt='Services M8 Services' />
        </div>
        </div>

        
        <div className='m8compaireSwitchingSection01'>
        <h2>More benefits to switching to MeMate</h2>
          <div className='m8InSection01'>
              <div className='m8InFlexLeft'>
               <h3>with MeMate<span>Switching is Easy</span></h3>
                <ul style={{ marginLeft: 20 }}>
                <li>No spreadsheets, no Gantt headaches, no project<br/> consultants. </li>
                <li>We handle the full migration for you — including<br/> your clients, jobs, contacts, and schedule.</li>
                <li>Free onboarding, no hidden costs, and full support<br/> from a local Aussie team that knows how you operate.</li>
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
               <h3>Microsoft Project<span>Alternative</span></h3>
               <p>Microsoft Project is powerful — but only if you’re running multi-stage enterprise programs with a full-time project manager.  </p>
              <p>MeMate is the better alternative for small to medium businesses that want a practical, all-in-one solution to run jobs, manage people, and get paid — fast.</p>
              </div>
             
          </div>
        </div>
      <div className={`${style.sectionService8grey} sectionService8greyNew sectionService8greyNew1`}>
      <div className={style.gridService8L}>
      <h4>In short</h4>
      <h6>Microsoft Project:</h6>
      <p>For planning large projects with detailed dependencies.</p>
      <h6>MeMate:</h6>
      <p>For running real-world jobs, teams, and workflows — every day, across Australia.</p>
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
        <span className='gradientAnimenate'>MeMate vs  Microsoft Project</span>
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
            <p>Choosing <strong>MeMate over Microsoft Project </strong> means choosing a system designed to run your business — not just plan it.</p>
          </div>
          <div className={style.sectionBenefitFlex}>
            <ul className={style.boxBenifit}>
              <li>
                <div className={`${style.iconStyle} ${style.iconStyle1}`}>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'>
                <h4>All-in-one platform </h4>
                <p>Quotes, jobs, invoices, CRM, chat, scheduling & more</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle2}`}>
                 <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Built for Australian businesses</h4>
                <p>With local support and tax-ready tools</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle3}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>No project management degree required</h4>
                <p>Easy to learn, simple to use</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle4}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>No onboarding fees</h4>
                <p>We migrate your data and set it up free of charge</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle5}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Flat, affordable pricing </h4>
                <p>All features, no expensive license tiers</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle6}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Made for execution</h4>
                <p>Assign work, track progress, get paid — faster</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle7}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Works for solo trades to national teams</h4>
                <p>Flexible and scalable</p></div>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle8}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <div className='minHeightBenifit'><h4>Saves time every day</h4>
                <p>Run your business from quote to invoice in one place</p></div>
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
