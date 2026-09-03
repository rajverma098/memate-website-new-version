import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../assests/images";
import { Helmet } from "react-helmet-async";
const AutomotiveQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

 const questions = [
  {
    question: "Do I need to be tech savvy to use it?",
    key: 0,
    answer:
      "Not at all. meMate is built for people who run businesses, not people who sit in front of a screen all day. It is simple, clean, and focused on giving you everything you actually need — without unnecessary complexity.",
  },
  {
    question: "How long does setup take?",
    key: 1,
    answer:
      "Most businesses are fully up and running within a few days to a week. New businesses can start instantly, and our team is with you every step of the way in real time, so you are never left figuring things out alone.",
  },
  {
    question: "Does it work on mobile?",
    key: 2,
    answer:
      "Yes. meMate is designed to work across desktop, tablet, and mobile. Management teams can run the business from desktop and tablet, while contractors and employees can use the mobile version to communicate, manage jobs, and track shifts.",
  },
  {
    question: "Does it integrate with Xero or MYOB?",
    key: 3,
    answer:
      "Absolutely. meMate lets you send invoices and bills directly to Xero or MYOB with one click, helping your bookkeeper and accountant get the information they need without unnecessary double handling.",
  },
  {
    question: "What happens after my 14 day trial?",
    key: 4,
    answer:
      "After your 14-day trial, meMate is just $98 a month with no lock-in contract. You can cancel anytime. Most customers see the value within the first few days, but if you need more time, simply let us know.",
  },
  {
    question: "Is there a real person I can call for support?",
    key: 5,
    answer:
      "Yes. You can speak with a real person based right here in Sydney, with dedicated support for your account from day one.",
  },
];

  const toggleQuestion = (key) => {
    setSelectedQuestion(selectedQuestion === key ? null : key); 
  };

  
const generateFAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((ques) => ({
      "@type": "Question",
      "name": ques.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ques.answer,
      },
    })),
  };
  return JSON.stringify(schema);
};

  return (
    <div className="question-answer-wrappercl questionAnswerMain cleaningFaqs">
       <Helmet>
                    <script type="application/ld+json">{generateFAQSchema()}</script>
                  </Helmet>
      <div className="question-answer-headingcl">
        <p className="question-answer-heading">Questions You're Probably <span>Asking Right Now</span></p>
      </div>
      <div className="questions-wrapper">
        {questions.map((ques) => (
          <div key={ques.key} className="each-ques-wrapper">
            <div
              className={`question-answer-ques ${
                selectedQuestion === ques.key ? "selected" : ""
              }`}
              onClick={() => toggleQuestion(ques.key)}
            >
              <p className="question-answer-ques-infoF">{ques.question}</p>
              <Box
                className="add-icon-wrapper"
                sx={{
                  height: "24px",
                  width: "24px",
                  transform: selectedQuestion === ques.key ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease", 
                }}
              >
                <div className="plus-icon-image-wrapper">
                  {selectedQuestion === ques.key ? (
                    <img
                      src={Images.selectedQuestion}
                      className="icon"
                      alt="Selected Question"
                      style={{ height: "24px" }} 
                       type="image/svg+xml"
                    />
                  ) : (
                    <AddIcon className="icon" htmlColor="#000000" />
                  )}
                </div>
              </Box>
            </div>
            <div
              className={`question-answer-ans-infoF ${
                selectedQuestion === ques.key ? "expanded" : ""
              }`}
            >
              {selectedQuestion === ques.key && <p>{ques.answer}</p>}
            </div>
          </div>
        ))}
      </div>
 
  </div>
  );
};

export default AutomotiveQuesitonAndAns;