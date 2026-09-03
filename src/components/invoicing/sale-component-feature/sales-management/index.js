import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
       <div className="sales-imageF">
        <LazyLoadImage
          alt="invoice management system"
          src={Images.invoStrategic}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Strategic</p>
        <p className="sales-heading-salesF">Invoicing  </p>
        <p className="sales-typeF"> functionality   </p>
        <p className="sales-description-salesF">
        meMate’s unique, strategic, and robust horizontal <br></br>business process 
        system allows you to create<br></br> invoices based on quotations or calculations.
         It<br></br> seamlessly converts existing calculations into<br></br> invoices, 
         which can be sent directly to the <br></br>customer.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
