import "./style.css";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper sales-component-wrapperm8" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
         <h2 className="compaireMainH2">Compare the solutions</h2>
       <h1 className="comapirMainH1">Compare MeMate vs Jira</h1>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="compaire-service01">
        <img
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/servicem8-3x_avrxqe.png'} 1800w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/servicem8-2x_jpqla6.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/servicem8-1x_g4d12q.png'} 600w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/servicem8-3x_avrxqe.png'}
            alt="Pricing main image"

          />
        {/* <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Mockup.png" width="100%" alt="Mockup" /> */}
        </div>

        <div className="compaireHeadPara">
          <h2>Work Smarter with the #1 Jira Alternative for <br></br>
Australian Business</h2>
          <p>Jira is made for software developers. MeMate is made for businesses — helping you quote, assign, track, and invoice real jobs, without needing to learn agile workflows.</p>
        <br></br>
        <div className="request-btn request-btn-center" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      target="_blank"
      buttonTextdark="Book a Demo"
      showButton1={true}
    />
      </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
