import ScrollStack from "./ScrollStack";
import { motion } from "framer-motion";
import MeMateFeatureAgile from "../../components/memate-feature/agile";
import MemateFeatureBoastEfficiency from "../../components/memate-feature/boast-efficiency";
import MeMateFinanceInsights from "../../components/memate-feature/finance-insights";
import MeMateFeatureMotivateTeam from "../../components/memate-feature/motivate-team";
import MeMateFeatureStreamline from "../../components/memate-feature/streamline-operations";
import MeMateWorkForce from "../../components/memate-feature/workforce";
const HomePageFeatuchers = () => {
  return (
 <>
 <div
      className="sales-component-feature-wrapperF cardContainerMainHome"
      style={{
        "--cmStickyTop": "45px",
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
            <ScrollStack CardDataComponent={MeMateFeatureStreamline} color="white" i={1} />
            <ScrollStack CardDataComponent={MemateFeatureBoastEfficiency} color="white" i={2} />
            <ScrollStack CardDataComponent={MeMateFinanceInsights} color="white" i={3} />
            <ScrollStack CardDataComponent={MeMateFeatureMotivateTeam} color="white" i={4} />
            <ScrollStack CardDataComponent={MeMateFeatureAgile} color="white" i={5} />
            <ScrollStack CardDataComponent={MeMateWorkForce} color="white" i={6} />
           </div>
    </div>
 </>
  )
}

export default HomePageFeatuchers