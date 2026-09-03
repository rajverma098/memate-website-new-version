import Link from "next/link";
import "./style.css";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
import { motion } from "framer-motion";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper salesfeaturesWrapper" 
    >
       <motion.h1
         className="h1tagsseo h1tagsseof fontWeight"
         initial={{ y: -40, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true, amount: 0.6 }}
         transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6, delay: 0.5 }}
       >
         Client Management Software Built for Aussie Businesses
       </motion.h1>
       <div className="sales-headingF gradientText">client<br></br> management </div>
      <div className="sales-componet-content-wrapperF client-component-para">
        <div className="sales-component-contentF">
        <motion.span
        // FADE TEST  
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6, delay: 1  }}
        >
       meMate is simple, cloud-based <b>client management software</b> built for Australian small businesses to organise client information, manage interactions and strengthen <b>client relationship management</b> from one central platform. It keeps contact details, client history and key business information organised, while its <b>client relationship management database</b> connects client records with quoting, projects, communication and invoicing. With integrated CRM functionality, meMate provides a practical <b>customer relationship management software</b> solution that helps businesses manage client information, streamline workflows and build stronger relationships without switching between multiple tools.
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
