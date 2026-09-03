import CMDynamic from "./agile-pipeline-management";
import CMIntuitive from "./crm-sales-tool";
import CMSmart from "./pipeline-tool";
import CMIntelligent from "./sales-management";
import CMWise from "./sales-process-optimization";
import "./style.css";
import { motion } from "framer-motion";
import ScrollStack from "./ScrollStack";
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
        <ScrollStack CardDataComponent={CMIntelligent} color="white" i={1} />
        <ScrollStack CardDataComponent={CMIntuitive} color="white" i={2} />
        <ScrollStack CardDataComponent={CMSmart} color="white" i={3} />
        <ScrollStack CardDataComponent={CMWise} color="white" i={4} />
        <ScrollStack CardDataComponent={CMDynamic} color="white" i={5} />
      </div>
    </div>
  );
};

export default SalesComponentFeature;
