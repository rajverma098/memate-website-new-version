"use client";

import { useEffect, useState } from "react";
import "./calculator.css";
import Tabs from "./Tabs";
import Chart from "./Chart";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import RevenueStep from "./Steps/RevenueStep";
import EmployeesStep from "./Steps/EmployeeStep";
import IndustryStep from "./Steps/IndustryStep";
import SpecialsStep from "./Steps/SpecialsStep";
import SlotCounter from 'react-slot-counter';

export default function MeMateCalculator() {
 const steps = ["Revenue", "Employees", "Industry", "Business Specials"];
 const [activeStep, setActiveStep] = useState(0);
 const [showModal, setShowModal] = useState(false);
 const [form, setForm] = useState({
 revenue1: 1356488,
 revenue2: 956000,
 revenue3: 875230,
 tradingYears: 5,
 employees: 3,
 contractors: 6,
 profitability: 15,
 industry: "other",
 marketType: "local",
 ownerInvolvement: "somewhatinvolved",
 revenueType: 50,
 customerConcentration: 80,
 salesDriver: 95,
 recordsHistory: 96,
 });

 const update = (key, value) => {
 const numericFields = [
 "revenue1", "revenue2", "revenue3", 
 "employees", "contractors", 
 "profitability", "revenueType", 
 "customerConcentration", "salesDriver", "recordsHistory",
 "tradingYears"
 ];
 
 const processedValue = numericFields.includes(key) 
 ? value === "" ? 0 : Number(value)
 : value;
 
 setForm((prev) => ({ ...prev, [key]: processedValue }));
 };

 const validRevenues = [form.revenue1, form.revenue2, form.revenue3].filter(r => r > 0);
 const avgRevenue = validRevenues.length > 0 
 ? validRevenues.reduce((a, b) => a + b, 0) / validRevenues.length 
 : 0;

 const profitMargin = form.profitability / 100;
 const maintainableEarnings = avgRevenue * profitMargin;

 const getTradingFactor = () => {
 const years = Number(form.tradingYears);
 
 switch(years) {
 case 0: 
 return 0.65;
 case 1: 
 return 0.7;
 case 2:
 return 0.85;
 case 5: 
 return 1.0;
 case 10: 
 return 1.15;
 case 15: 
 return 1.25;
 default:
 return 0.65;
 }
 };

 const tradingFactor = getTradingFactor();

 const getIndustryMultiple = () => {
 const multiples = {
 "tradeconstruction": 3.5,
 "professionalservices": 2.0,
 "retailecommerce": 3.2,
 "manufacturing": 3.0,
 "creativedigital": 2.5,
 "hospitality": 2.2,
 "other": 3.0,
 };
 
 if (!form.industry) return 2.5;
 return multiples[form.industry] || 2.5;
 };

const specialsScore =
(
  (100 - Number(form.revenueType)) +
  (100 - Number(form.customerConcentration)) +
  (100 - Number(form.salesDriver)) +
  (100 - Number(form.recordsHistory))
) / 400;

const baseRiskFactor = 0.75 + (specialsScore * 0.5);

const getOwnerFactor = () => {
  switch(form.ownerInvolvement) {
    case "veryhands-on": 
      return 0.9; 
    case "somewhatinvolved": 
      return 1.0;  
    case "mostlysystemised": 
      return 1.1; 
    default: 
      return 1.0;
  }
};

 const getMarketFactor = () => {
 switch(form.marketType) {
 case "international": return 1.15; 
 case "national": return 1.05;
 case "local": return 0.95; 
 default: return 1.0;
 }
 };

 const riskFactor = baseRiskFactor * getOwnerFactor() * getMarketFactor();

 const totalStaff = Number(form.employees) + (Number(form.contractors) * 0.5);
 const employeeFactor = 1 + (totalStaff / 50); 

 const baseMultiple = getIndustryMultiple();
 const adjustedMultiple = baseMultiple * tradingFactor * riskFactor * employeeFactor;
 const valuation = Math.round(maintainableEarnings * adjustedMultiple) || 0;

 const uplift = Math.round(valuation * 1.129) || 0;

 const getTradingYearsText = () => {
 switch(Number(form.tradingYears)) {
 case 0: return "Not specified";
 case 1: return "< 1 year";
 case 2: return "1–2 years";
 case 5: return "3–5 years";
 case 10: return "6–10 years";
 case 15: return "10+ years";
 default: return "Not specified";
 }
 };

 useEffect(() => {
 console.log("Current Form State:", {
 tradingYears: form.tradingYears,
 tradingFactor,
 industry: form.industry,
 baseMultiple: getIndustryMultiple(),
 ownerInvolvement: form.ownerInvolvement,
 ownerFactor: getOwnerFactor(),
 marketType: form.marketType,
 marketFactor: getMarketFactor(),
 specialsScore,
 riskFactor,
 employees: form.employees,
 contractors: form.contractors,
 employeeFactor,
 maintainableEarnings,
 adjustedMultiple: adjustedMultiple.toFixed(2),
 valuation
 });
 }, [form, valuation]);

 return (
 <div className="memate-wrapper">
 <div className="memateCalbox">
 <div className="resultsHeadWrap">
 
 <h2 className="memateCalitle">
 How Much Is My Business Worth?
 </h2>
 <h1 className="memateCalSubtitle gradientText">Business Valuation Calculator</h1>
 <p className="memateCalSubText">Explore what your business could be worth today — and where it's heading.</p>
 
 <Tabs
 steps={steps}
 activeStep={activeStep}
 setActiveStep={setActiveStep}
 />
 
 <div className="step-area stepCalarea">
 {activeStep === 0 && (
 <RevenueStep form={form} update={update} />
 )}
 {activeStep === 1 && (
 <EmployeesStep form={form} update={update} />
 )}
 {activeStep === 2 && (
 <IndustryStep form={form} update={update} />
 )}
 {activeStep === 3 && (
 <SpecialsStep form={form} update={update} />
 )}
 </div>

 <Chart valuation={valuation} uplift={uplift} tradingYears={form.tradingYears} />
</div>
 <div className="resultsMainWrap">
 <div className="results-area">
 <div className="value-block">
 <p>Estimated <br />business value today:</p>
 <h2 className="HeadC"> 
{/* <b>$</b> */}
{/* <SlotCounter value={`${valuation.toLocaleString()}`} /> */}
 {valuation > 0 
 ? `$${valuation.toLocaleString()}`
 : "$0"}
 </h2>
 <small>
Indicative estimate based on operational, financial and risk inputs.
 </small>
 {/* {maintainableEarnings > 0 && (
 <small className="calculation-note">
 Based on ${Math.round(maintainableEarnings).toLocaleString()} profit × {adjustedMultiple.toFixed(1)}x multiple
 {form.tradingYears !== 0 && ` • ${getTradingYearsText()} trading`}
 {form.industry && ` • ${form.industry}`}
 </small>
 )} */}
 </div>
 
 <div className="value-block uplift-block">
 <p>
 On average, businesses using meMate<br /> increased their valuation by 12.9%
 </p>
 <h2 className="uplift-value gradientText">
 ${uplift > 0 ? uplift.toLocaleString() : "0"}
 </h2>
 <small>
 Indicative estimate only. Not a formal valuation.<br />
 Driven by complete job history, financial traceability, documented<br /> workflows and buyer-ready records.
 </small>
 </div>
 </div>

 <div className="bottom-bar">
 <p>
 This tool provides an indicative estimate only and does not replace professional advice.
 </p>
 <button onClick={() => setShowModal(true)}>
 Full disclaimer
 </button>
 </div>
 </div>
 </div>

 <Modal
 open={showModal}
 onClose={() => setShowModal(false)}
 center
 classNames={{
 modal: "customCalModal",
 }}
 styles={{
 modal: {
 borderRadius: "18px",
 padding: "40px 40px 15px 40px !important",
 maxWidth: "600px",
 width: "600px",
 background: "var(--Gray-25, rgba(252, 252, 253, 1))",
 },
 }}
 >
 <div className="customCalModalHeading">
 <h2>
 This business valuation is an indicative estimate only and is provided for general information purposes.
 </h2>
 <p>
 The calculation is based on information entered by the user and a set of general assumptions relating to revenue trends, operational structure, industry benchmarks and business risk factors.
 </p>
 <p>
 This estimate does not constitute financial advice, legal advice, accounting advice, or a formal business valuation. It should not be relied upon for the purposes of buying, selling, financing, investing in, or restructuring a business.
 </p>
 <p>
 Actual business value may vary significantly depending on factors not captured in this calculator, including but not limited to market conditions, asset values, liabilities, contractual obligations, intellectual property, management capability, customer agreements, and buyer-specific considerations.
 </p>
 <p>
 For an accurate and formal valuation, independent professional advice should be obtained from a qualified business valuer, accountant, or financial advisor.
 </p>
 </div>
 <div className="CustomModelCloseBut">
 <button onClick={() => setShowModal(false)}>Close</button>
 </div>
 </Modal>
 </div>
 );
}