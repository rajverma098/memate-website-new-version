import "./style.css";
import SliderTabMobile from "./slider-mobile";
import CenterMode from "./CenterMode";

const FindOneApplication = () => {
  return (
    <>
      <div className="one-application-wrappers">
        <div className="one-application-sec">
          <div className="application-heading">
            <h3>One application</h3>
          </div>
          <div className="to-replace-bold-text">
            <span className="replace-text replace-text-fonts">
              to replace them all
            </span>
            <br></br>
          </div>
        </div>

        <div className="desktop-slider">
          <CenterMode />
        </div>
        <div className="mobile-slider">
          <SliderTabMobile />
        </div>
      </div>
    </>
  );
};

export default FindOneApplication;
