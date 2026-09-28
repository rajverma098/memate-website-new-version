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
      "Not at all. It's built for people who run businesses, not people who sit in front of a screen all day. Simple, clean, and everything you actually need — nothing you don't.",
  },
  {
    question: "How long does setup take?",
    key: 1,
    answer:
      "Most businesses are fully up and running within a few days to a week. New businesses can start instantly. And our team is with you every step of the way in real time — you're never figuring it out alone.",
  },
  {
    question: "Does it work on mobile?",
    key: 2,
    answer:
      "Yes — and we built it smart. Your management team gets a full desktop and tablet version to run the business. Your contractors and employees get a mobile version to communicate, manage jobs and track shifts. Everyone has exactly what they need.",
  },
  {
    question: "Does it integrate with Xero or MYOB?",
    key: 3,
    answer:
      "Absolutely. Send invoices and bills directly to Xero or MYOB with one click — so your bookkeeper and accountant always have what they need, without double handling.",
  },
  {
    question: "What happens after my 14 day trial?",
    key: 4,
    answer:
      "Just $98 a month — no lock-in, cancel anytime. Most of our customers see the value within the first few days. But if you need more time, just let us know.",
  },
  {
    question: "Is there a real person I can call for support?",
    key: 5,
    answer:
      "Yes — a real person, based right here in Sydney, dedicated to your account from day one.",
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