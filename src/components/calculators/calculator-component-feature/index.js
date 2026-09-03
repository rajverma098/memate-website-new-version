import "./style.css";
import { motion } from "framer-motion";
import ScrollStack from "./ScrollStack";
import CalculatorManagement from "./calculator-management";
import CRMCalculatorTools from "./crm-calculator-tool";
import PipeLineTool from "./pipeline-tool";
import CalculatorProcessOptimiation from "./calculator-process-optimization";
import AgilePipeLineManagement from "./agile-pipeline-management";
import SuitableTender from "./suitable-tender";
const CalculatorsComponentFeature = () => {
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
        <ScrollStack CardDataComponent={CalculatorManagement} color="white" i={1} />
        <ScrollStack CardDataComponent={CRMCalculatorTools} color="white" i={2} />
        <ScrollStack CardDataComponent={PipeLineTool} color="white" i={3} />
        <ScrollStack CardDataComponent={CalculatorProcessOptimiation} color="white" i={4} />
        <ScrollStack CardDataComponent={AgilePipeLineManagement} color="white" i={5} />
        <ScrollStack CardDataComponent={SuitableTender} color="white" i={6} />
      </div>
    </div>
  );
};

export default CalculatorsComponentFeature;
