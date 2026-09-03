import React from "react";
import './style.css';
import Image from "next/image";

const MoreSpecificCard = (props) => {
  return (
    <div
      className="more-specific-card"
    >
        <div className="more-specific-card-logo" style={{background:props.background}}>
            <Image src={props.card_image} width={32} height={32} alt="img"/>
        </div>

        <p className="more-specific-card-heading">{props.heading}</p>
        <p className="more-specific-card-description" style={{width:props.width}}>{props.description}</p>
    </div>
  );
};

export default MoreSpecificCard;
