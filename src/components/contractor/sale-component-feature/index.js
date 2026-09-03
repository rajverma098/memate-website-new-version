import "./style.css";
import { motion } from "framer-motion";
import ScrollStack from "./ScrollStack";
import SalesManagement from "./sales-management";
import CRMSalesTool from "./crm-sales-tool";
import PipeLineTool from "./pipeline-tool";
import SalesProcessOptimiation from "./sales-process-optimization";
import AgilePipeLineManagement from "./agile-pipeline-management";
import SuitableTender from "./suitable-tender";
const SalesComponentFeature = () => {
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
        <ScrollStack CardDataComponent={SalesManagement} color="white" i={1} />
        <ScrollStack CardDataComponent={CRMSalesTool} color="white" i={2} />
        <ScrollStack CardDataComponent={PipeLineTool} color="white" i={3} />
        <ScrollStack CardDataComponent={SalesProcessOptimiation} color="white" i={4} />
        <ScrollStack CardDataComponent={AgilePipeLineManagement} color="white" i={5} />
        <ScrollStack CardDataComponent={SuitableTender} color="white" i={6} />
      </div>
    </div>
  );
};

export default SalesComponentFeature;
