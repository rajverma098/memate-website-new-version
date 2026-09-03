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
      <div className={`${style.gridService8L} m8InFlexLeftQuick`}>
      <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/jiralogo.png' alt='Services M8' width={95}
      height={41} />
     <h4>What’s Jira <br/>Good For?</h4>
      <p>Jira is ideal for:</p>
      <ul style={{ marginLeft: 20 }}>
                <li>Software development teams using agile or scrum methodology</li>
                <li>Managing sprints, epics, bugs, and tickets</li>
                <li>Tech companies with dedicated project/product managers</li>
                <li>ExTeams that require custom workflow automations and integrations</li>
                <li>Internal collaboration between developers, testers, and designers</li>
              </ul>
              <div className='quoteCpmpaireCircle'>
                              <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/Check+Circle.png' alt='Services M8' width={21} height={21} />
                        <p>It’s powerful — but heavily geared toward technical teams, not general business operations.</p>
                        </div>
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
         <div className={`${style.gridService8L} m8InFlexLeftQuick1`}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg' alt='Services M8' />
      <h4>What’s MeMate<br/>
      Good For?</h4>
     <p>MeMate is built for:</p>
      <ul style={{ marginLeft: 20 }}>
                <li>Australian service businesses managing real-world jobs and clients</li>
                <li>Creating quotes, assigning jobs, and tracking team progress</li>
                <li>Scheduling tasks, managing contractors, and recording time</li>
                <li>Handling invoicing, CRM, internal messaging, and profitability — all in one place</li>
                <li>Teams that want to run their entire business, not just track tasks</li>
              </ul>
              <div className='quoteCpmpaireCircleg'>
                <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/CheckCircle-g.png' alt='Services M8' width={21} height={21} />
          <p>MeMate replaces Jira + a quoting tool + an invoicing system + a scheduler — with no technical training needed.</p>
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
               <h3>switching from Jira to <span>MeMate is fast and <br/>frustration-free.</span></h3>
                <ul style={{ marginLeft: 20 }}>
                <li>No config files, no workflows to rebuild.</li>
                <li>We’ll migrate your client data, team info, and job details — all free of charge.</li>
                <li>And you won’t need a product manager to set it up.</li>
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
               <h3>Jira<span>Alternative</span></h3>
               <p>Jira is great — if you’re building software.
But most Australian businesses need more than issue tracking.</p>
<p>MeMate is the better alternative for service teams that quote jobs, assign real work, track progress, and send invoices — without getting lost in sprints, epics, or tech jargon.</p>
              </div>
             
          </div>
        </div>
      <div className={`${style.sectionService8grey} sectionService8greyNew sectionService8greyNew1`}>
      <div className={style.gridService8L}>
      <h4>In short</h4>
      <h6>jira:</h6>
      <p>Jira is one of the world’s most popular tools for software teams. It’s built around agile methodology, sprint planning, and ticket tracking. For tech teams, it’s incredibly flexible — but it also comes with complexity and a steep learning curve.</p>
      <h6>MeMate:</h6>
      <p>MeMate, by contrast, is designed for non-technical business owners. It replaces Jira and your invoicing system in one go — letting you manage jobs, teams, quotes, schedules, and clients in one streamlined platform.</p>

        <div className='quoteCpmpaireCircle'>
                        <p>If your business isn’t writing code, you probably don’t need issue tickets, sprints, or workflows that require a product manager to configure. MeMate offers real-world job and task management, simplified for service-based teams.</p>
                        </div>
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
        <span className='gradientAnimenate'>MeMate vs jira</span>
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
            <p>Choosing <strong>MeMate over jira Project </strong> means choosing a system designed to run your business — not just plan it.</p>
          </div>
          <div className={style.sectionBenefitFlex}>
            <ul className={style.boxBenifit}>
              <li>
                <div className={`${style.iconStyle} ${style.iconStyle1}`}>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Quotes, jobs, teams & invoicing</h4>
                <p>All in one place</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle2}`}>
                 <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>No plugins, no setup headaches </h4>
                <p>Get started right away</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle3}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Built for real-world operations</h4>
                <p>Not just software sprints</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle4}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Free onboarding and migration</h4>
                <p>Done by our Aussie-based team</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle5}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Flat, affordable pricing </h4>
                <p>No per-user licenses, no feature gating</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle6}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Team scheduling, job tracking & live reporting </h4>
                <p>Ready to go</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle7}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Internal chat & file sharing</h4>
                <p>Keep your team in sync</p>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle8}`}>
               <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/check-circle.svg' alt='check-circle' />
                </div>
                <h4>Easy for anyone to use </h4>
                <p>No IT department required</p>
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
