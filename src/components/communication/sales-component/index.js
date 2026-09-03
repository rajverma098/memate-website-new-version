import "./style.css";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper salesfeaturesWrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <h1 className="h1tagsseo h1tagsseof fontWeight">Team Communication Software for Your Business</h1>
       <div className="sales-headingF">communication</div>
      <div className="sales-componet-content-wrapperF client-component-para">
        <div className="sales-component-contentF">
        <span>
        meMate provides <b>team communication tools</b> that help businesses keep conversations, project updates, notes, and communication history organised in one central system. Teams can communicate around projects and tasks while staying connected with contractors and customers. By keeping important communication linked to everyday workflows, meMate helps reduce scattered information, improve collaboration and keep everyone up to date throughout a project.</span>
        </div>
        <div className="sales-component-button-wrapper">
        <div  className="request-btn request-btn-center">
              <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      target="_blank"
      buttonTextdark="Request a Demo"
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
