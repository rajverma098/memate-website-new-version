import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Unique</p>
        <p className="sales-heading-salesF">CRM Sales Tool</p>
        <p className="sales-typeF">for small business</p>
        <p className="sales-description-salesF">
        It works as your CRM, allowing you to track the <br />progress of your leads, add notes for the entire <br/>team, and manage follow-ups. A simple yet <br/>effective solution.
        </p>
      </div>
       <div className="sales-imageF">
      <div className="crmtool-image-wrapper">
        <div className="modal-contact">
          <LazyLoadImage
            alt="CRM sales tools"
            src={Images.ModalSaleContact}
            effect="blur" 
            type="image/svg+xml"
            />
          <div className="menu-contact">
             <LazyLoadImage
                alt="lead tracking system"
                src={Images.MenuContact}
                effect="blur" 
                type="image/svg+xml"
                />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
