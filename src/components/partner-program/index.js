import "./programstyle.css";
import "./PartNerL.css";
import TickIconSVG from "../../svg/TickIcon";
import EmailNow from "../contact-us/emailnow";

const PartnerProgramComponent = () => {
  return (
    <div className="affiliateWrapper">
    <div className="headWrap">
      <h1 className="smokeyGradient">affiliate program</h1>
      <p>Unlock new earning opportunities by <br/> partnering with meMate</p>
     <div className="affiliateBtnProps">
       <EmailNow buttonText="Get Started" headingText="Affiliate Enquiry Form" />
    </div> 
    </div>
    <div className="partNerEnquiryWrap">
      <span>If you work with <b>small business owners</b> — as an</span>
       <div className="partNerGridWrap">
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner01-img.jpg"  alt="partner01" />
         <p>Business Advisors & Consultants</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner02-img.jpg"  alt="partner01" />
         <p>Accountants & Bookkeepers</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner03-img.jpg"  alt="partner01" />
         <p>Industry Associations & Trade Networks</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner04-img.jpg"  alt="partner01" />
         <p>Software Setup & Tech Support Providers</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner05-img.jpg"  alt="partner01" />
         <p>Influencers & Content Creators</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner06-img.jpg"  alt="partner01" />
         <p>Local “Biz Hubs” & Co-Working Spaces</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner07-img.jpg"  alt="partner01" />
         <p>Training Providers</p>
       </div>
       <div className="partNerGridItem addMorePartner">
      
      <div className="affiliateBtnProps">
         <EmailNow buttonText="Become a Partner" headingText="Affiliate Enquiry Form" /> 
    </div> 
       </div>
       </div>
        <span>— the <b>meMate Partner Program</b> is built for you</span>
    </div>
    <div className="growingWrapPartner">
      <h3>meMate is growing rapidly, <br/>with new users joining every day.</h3>
      <p> If you have reach, influence, or a trusted voice in the small-business community, 
        you can turn that into predictable, transparent income while helping businesses transform the way they operate.</p>  
    </div>
    <div className="rewardWrapPartner">
     <div className="headWrapI">
       <h4 className="smokeyGradient">simple, fixed rewards</h4>
      <p>Our partnership model is based on fixed rewards,
      You’ll always know exactly what you earn from every referral.</p>  
     </div>
       <div className="lavelWrap"> 
          <div className="lavelItem"> 
            <h5>Starter Level</h5>
            <span>Perfect for occasional referrals</span>
            <ul>
              <li><div className="icon"><TickIconSVG /></div> Reward: A fixed bonus equal to <b>1 month of the client’s subscription fee</b> for every activated customer.</li>
            </ul>
          </div>
          <div className="lavelItem"> 
            <h5>Active Level</h5>
            <span>Ideal for partners referring 3–5 clients per month</span>
            <ul>
              <li><div className="icon"><TickIconSVG /></div> <b>Reward: 1.5 months</b> of the subscription fee per activated client</li>
              <li><div className="icon"><TickIconSVG /></div> <b>+ AUD $300 monthly bonus</b> when you reach 5 activated clients</li>
            </ul>
          </div>
          <div className="lavelItem"> 
            <h5>Power Level</h5>
            <span>Designed for partners delivering 10+ clients per month</span>
            <ul>
              <li><div className="icon"><TickIconSVG /></div> <b>Reward: 2 months</b> of the subscription fee per activated client</li>
              <li><div className="icon"><TickIconSVG /></div>  <b>+ AUD $1,000 monthly performance bonus</b></li>
              <li><div className="icon"><TickIconSVG /></div>  <b>Optional retainer</b> available for partners with consistent high-volume lead flow</li>
            </ul>
          </div>
      </div>
    <div className="affiliateBtnProps">
      <EmailNow buttonText="Get Started" headingText="Affiliate Enquiry Form" />
    </div> 
    </div>
     <div className="processStepPartner">
     <div className="headStep">
     <h5>How to Get Started</h5>
     </div>
     <div className="StepPartnerWrap">
        <div className="StepPartnerItem step-1">
          <span>1</span>
          <p><b>Submit your partner request</b> through our website.</p>
        </div>
        <div className="StepPartnerItem step-2">
          <span>2</span>
          <p><b>Our Partner Manager will contact you </b>for a short phone or Zoom meeting</p>
        </div>
        <div className="StepPartnerItem step-3">
          <span>3</span>
          <p>We’ll <b>walk you through meMate,</b> show how it works, and explain how it can
           benefit your audience or client base.</p>
        </div>
        <div className="StepPartnerItem step-4">
          <span>4</span>
          <p>We’ll <b>set up your Partner Dashboard,</b> where you can submit referrals, track
       activity, and monitor your earnings.</p>
        </div>
     </div>
     </div>
       <div className="groToGetherPartner">
      <h6 className="smokeyGradient">let’s grow together</h6>
      <p>Become a meMate Partner and turn your influence into meaningful income — while
         helping Australian businesseswork smarter, faster, and more efficiently.</p>
      <div className="affiliateBtnProps">
        <EmailNow buttonText="Get Started" headingText="Affiliate Enquiry Form" />
    </div> 
    </div>
    </div>
  );
};

export default PartnerProgramComponent;
