import React, { useState } from "react";
import style from "../../components/pricing/pricing-module.module.scss"
import "../../components/pricing/tableStyle.css";
import CheckIcon from "../../svg/CheckIcon";
import CheckBlackIcon from "../../svg/CheckBlackIcon";
import { BubbleBackground } from "./BubbleBackground";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const pricingboll =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/pricingboll.png";

const PricingTableDemo = () => {
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
        className={style.PricingTableWrap}>
        <div className={style.pricingtable}>
          <div className={`${style.pricingcards}`}>
            {plans.map((plan, index) => (
              (() => {
                const isFeatured = index === 1;
                const cardInlineStyle = {
                  borderRadius: "24px",
                  ...(isFeatured
                    ? {
                        background:
                          "linear-gradient(to right bottom, #1ab2ff 10.15%, #ffb258 69%)",
                      }
                    : {}),
                };

                return (
              <div
                key={index}
                className={`pricingCardsWrap ${style.pricingcard} ${
                  isFeatured ? style.pricingcardFeatured : ""
                }`}
                style={cardInlineStyle}
              >
                {isFeatured && (
                  <BubbleBackground
                    interactive={true}
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 0,
                      pointerEvents: "none",
                      borderRadius: "24px",
                    }}
                    colors={{
                      first: "26,178,255", 
                      second: "255,178,88",
                      third: "26,178,255",
                      fourth: "255,178,88",
                      fifth: "26,178,255",
                      sixth: "255,178,88",
                    }}
                  />
                )}

                <div style={{ position: "relative", zIndex: 1 }}>
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
                    className=""
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
              </div>
                );
              })()
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTableDemo;
