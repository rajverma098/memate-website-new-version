import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../assests/images";
import { Helmet } from "react-helmet-async";
const AutomotiveQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

 const questions = [
  {
    question: "I’m flat out on jobs all day — when am I supposed to learn new software?",
    key: 0,
    answer:
      "Setup takes under an hour. Most MeMate users are running their first job through it on day one — no training course required.",
  },
  {
    question: "I’ve got a mix of one-off jobs and weekly regulars — can it handle both?",
    key: 1,
    answer:
      "Yes. Set up recurring rounds once and MeMate auto-creates every job. One-offs are just as easy — quote, schedule, done.",
  },
  {
    question: "My guys aren’t great with tech. Will they actually use it?",
    key: 2,
    answer:
      "The crew app is dead simple — they see their jobs for the day, update progress and that’s it. No manuals, no confusion.",
  },
  {
    question: "Does it talk to Xero or MYOB?",
    key: 3,
    answer:
      "Yes. Invoices and payments flow straight to your accounting software. No double entry, no chasing your bookkeeper.",
  },
  {
    question: "What if I try it and it’s not for me?",
    key: 4,
    answer:
      "14-day free trial, no credit card needed. And there’s a real Australian you can call if you need help — not a chatbot.",
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