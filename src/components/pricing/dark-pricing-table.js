import React, { useState } from "react";
import style from "./pricing-module.module.scss";
import "./tableStyle.css";
import CheckIcon from "../../svg/CheckIcon";
import CheckBlackIcon from "../../svg/CheckBlackIcon";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const pricingboll =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/pricingboll.png";

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Business",
      image: pricingboll,
      monthlyPrice: `$99.85 <span>/ Month</span>`,
      yearlyPrice: `$1,018.47 <span>/ Year</span>`,
      companypara: "Essentials you need to run your company",
      individuals: "For individuals",
      whatsInclude: "What’s included",
      YourSavings: `Your Savings: <span>-$179.73</span>`,
      link: "https://app.memate.com.au/onboarding",
      action: "Get started",
      features: [
        "Client Management",
        "Supplier Management",
        "Sales Pipeline",
        "Project Management",
        "Internal Chat",
        "Invoicing",
        "Statistic Reports",
        "Profitability and Budgeting",
        "Expenses",
      ],
    },
    {
      name: "Business + Work",
      image: pricingboll,
      popular: "Popular",
      YourSavings: `Your Savings: <span>-$291.91</span>`,
      monthlyPrice: `$162.17 <span>/ Month</span>`,
      yearlyPrice: `$1,654.13 <span>/ Year</span>`,
      companypara:
        "Everything in Business + Employee and Contractor Management.",
      whatsInclude: "What’s included",
      individuals: "For individuals",
      link: "https://app.memate.com.au/onboarding",
      action: "Get started",
      features: [
        "Employee Management",
        "Time Sheets & Tracker",
        "Contractor Management",
        "Job Scheduling",
        "Company News",
        "Task Management",
        "Company Calendar",
      ],
    },
    {
      name: "Enterprise",
      image: pricingboll,
      whatsInclude: "Complete Package",
      companypara:
        "Everything in Business + Employee and Contractor Management.",
      companyparaSecond:
        "Everything in Business + Employee and Contractor Management.",
      individuals: "For",
      monthlyPrice: `Contact us`,
      yearlyPrice: `Contact us`,
      companypara: "Unlimited Customisation to Your Needs",
      bottomText: "Let’s talk",
      link: "/contact-us",
      action: "Contact Us",
      features: [
        "Custom Integrations",
        "Unique Workflows",
        "Custom Calculators",
        "Advanced Reporting",
        "Custom Features Especially for Your Industry",
      ],
    },
  ];

  return (
    <>
     
      <div
        className={style.PricingTableWrap}
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="5500"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div className={style.pricingtable}>
          <div className={` ${style.pricingcards}`}>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricingCardsWrap ${style.pricingcard}`}>
                <div className={style.tophead}>
                  <div className={style.head}>
                    <div className={style.right}>
                      <h2>{plan.name}</h2>
                    </div>
                  </div>
                </div>
                <p className={style.companypara}>{plan.companypara}</p>
                <h5
                  className={style.YourSavings}
                  dangerouslySetInnerHTML={{
                    __html: isYearly ? plan.YourSavings : "",
                  }}
                />

                <p
                  className={style.price}
                  dangerouslySetInnerHTML={{
                    __html: isYearly ? plan.yearlyPrice : plan.monthlyPrice,
                  }}
                />
              <h4 className={style.priceMainHead}>{plan.whatsInclude}</h4>
                <ul>
                 
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      {index === 1 ? (
                        <div className={style.checkcircleicon}>
                          <CheckIcon />
                        </div>
                      ) : (
                        <div className={style.checkcircleicon}>
                          {/* Default icon */}
                          <CheckBlackIcon />
                        </div>
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
                {index === 1 ? (
                  <div
                    id="request-btn-pricing"
                    className="lightColorIngradient"
                  >
                     <DarkMemateBlackBut
                        link2={plan.link}
                        target="_blank"
                        buttonTextlight={plan.action}
                        showButton2={true}
                      />
                  </div>
                ) : (
                  <div
                    id="request-btn-pricing"
                    className="request-btn PricingButton request-btn-bg"
                  >
                     <DarkMemateBlackBut
                        link2={plan.link}
                        target="_blank"
                        buttonTextlight={plan.action}
                        showButton2={true}
                      />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTable;
