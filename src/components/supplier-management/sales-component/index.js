import "./style.css";
import { motion } from "framer-motion";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper salesfeaturesWrapper">
       <motion.h1
         className="h1tagsseo h1tagsseof fontWeight"
         initial={{ y: -40, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true, amount: 0.6 }}
         transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6, delay: 0.5 }}
       >
         Stay on Top of Suppliers, Vendors & Contractors with meMate
       </motion.h1>
       <div className="sales-headingF gradientText">supplier<br></br> management</div>
      <div className="sales-componet-content-wrapperF client-component-para">
        <div className="sales-component-contentF">
        <motion.span
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6, delay: 1  }}
        >
         meMate - Designed as a simple cloud CRM to manage your Supplier database. It’s easy to use and easy to navigate - a CRM for small businesses in Australia.
          </motion.span>
        </div>
        <div className="sales-component-button-wrapper">
        <motion.div className="request-btn request-btn-center" 
        initial={{ y: -10, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 150, damping: 10, mass: 4, delay: 0  }}
        >
             <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      className="alignLeft"
      target="_blank"
      buttonTextdark="Request a Demo"
      showButton1={true}
    />
    
      </motion.div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
