import Images from "../../assests/images";
import Link from "next/link";
import "./style.css";
import PartenerButtons from "../../layout/hover-button/PartenerButtons";

const HeaderNewBusiness = () => {
  return (
    <div>
      <div className="navbar1">
        <div className="navbar-container">
          <div className="navbar-logo-wrapper1">
            <Link href="/">
              <img src={Images.logo3} alt="logo" type="image/svg+xml" />
            </Link>
          </div>
          <div className="dflexbannerbtn dflexbannerHeaderbtn dflexbannerbtnp">
                <div className="request-btn">
                  <Link
                    href="https://app.memate.com.au/requestdemo"
                    target="_blank"
                    className="nav-btn--get-started  navbar-link">
                       <PartenerButtons text="Book demo"/>
                  </Link>
                </div>
          </div>
        </div>
      </div>
  
    </div>
     
  );
};

export default HeaderNewBusiness;
