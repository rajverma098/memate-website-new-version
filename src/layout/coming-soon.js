import React from "react";
import Images from "../assests/images";
import style from "./coming-soon-module.css";

const ComingSoon = (props) => {
  return (
    <div
      className="ComingSonnBg"
      style={{ backgroundImage: `url(${Images.backgroundPattern})` }}
    >
      {props.text ? (
        <>
          <h1 style={{ fontSize: "30px" }}>{props.text}</h1>
          <h2
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
             Coming Soon
          </h2>
        </>
      ) : (
        <h2
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          Coming <br /> Soon
        </h2>
      )}

      <img
        className="commingSoonLogo"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        srcSet="
          https://memate-website.s3.ap-southeast-2.amazonaws.com/media/comingSoon3x.png 600w,
          https://memate-website.s3.ap-southeast-2.amazonaws.com/media/comingSoon2x.png 1200w,
          https://memate-website.s3.ap-southeast-2.amazonaws.com/media/comingSoon1x.png 1800w
        "
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
        src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/comingSoon3x.png"
        alt="Coming soon"
      />
    </div>
  );
};

export default ComingSoon;