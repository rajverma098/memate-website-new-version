import "./style.css";
import { motion } from "framer-motion";
import ScrollStack from "./ScrollStack";
import CalendarManagement from "./calendar-management";
import CRMCalendarTools from "./crm-calendar-tool";
import PipeLineTool from "./pipeline-tool";   
import CalendarProcessOptimiation from "./calendar-process-optimization";
import AgilePipeLineManagement from "./agile-pipeline-management";
import SuitableTender from "./suitable-tender";
const CalendarComponentFeature = () => {
  return (
    <div
      className="sales-component-feature-wrapperF"
      style={{
        "--cmStickyTop": "75px",
        "--cmStickyHeaderOffset": "clamp(120px, 18vh, 200px)",
      }}
    >
      <div
        className="sales-component-featureF"
        style={{
          position: "sticky",
          top: "var(--cmStickyTop)",
          minHeight: "var(--cmStickyHeaderOffset)",
          padding: "20px 0 12px",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 50,
            mass: 0.6,
            delay: 0.2,
            duration: 5,
          }}
        >
          meMate
        </motion.h2>

        <motion.span
          className="gradientAnimenate"
          style={{ display: "inline-block" }}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 50,
            mass: 0.6,
            delay: 0.2,
            duration: 5,
          }}
        >
          features
        </motion.span>
      </div>
      <div className="scroll-stack-wrapper">
        <ScrollStack CardDataComponent={CalendarManagement} color="white" i={1} /> 
        <ScrollStack CardDataComponent={CRMCalendarTools} color="white" i={2} />
        <ScrollStack CardDataComponent={PipeLineTool} color="white" i={3} />
        <ScrollStack CardDataComponent={CalendarProcessOptimiation} color="white" i={4} />
        <ScrollStack CardDataComponent={AgilePipeLineManagement} color="white" i={5} />
        <ScrollStack CardDataComponent={SuitableTender} color="white" i={5} />
      </div>
    </div>
  );
};

export default CalendarComponentFeature;
