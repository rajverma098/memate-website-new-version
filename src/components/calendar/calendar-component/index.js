import "./style.css";
import { motion } from "framer-motion";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const CalendarsComponent = () => {
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
        Discover Powerful Calendar & Timeline Management
       </motion.h1>
       <div className="sales-headingF gradientText">company calendar</div>
      <div className="sales-componet-content-wrapperF client-component-para">
        <div className="sales-component-contentF">
        <motion.span
        // FADE TEST  
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6, delay: 1  }}
        >
          Keep your team aligned and your projects on schedule with meMate’s all-in-one Company Calendar. From task deadlines and team events to contractor schedules and key project milestones—it’s all visible, organised, and easy to manage in a single place. Say goodbye to missed meetings and overlapping plans.
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

export default CalendarsComponent;
