import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../assests/images";
import { Helmet } from "react-helmet-async";
const AutomotiveQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

 const questions = [
  {
    question: "What is cleaning business software?",
    key: 0,
    answer:
      "Cleaning business software is a platform that helps cleaning companies manage their day-to-day operations in one place. Depending on the platform, it can support customer management, quoting, scheduling, cleaning jobs, team coordination, timesheets, invoicing, payments and profitability tracking. By connecting these processes, businesses can reduce manual administration and gain better visibility over their work.",
  },
  {
    question: "What features should I look for in cleaning management software?",
    key: 1,
    answer:
      "Look for cleaning management software that supports the key stages of your workflow, including customer management, quoting, job scheduling, team and contractor management, timesheets, expense tracking, invoicing, payment follow-ups and reporting. Connecting these processes in one system can reduce duplicate data entry and make it easier to manage cleaning jobs from enquiry through to payment.",
  },
  {
    question: "Can cleaning company software help manage cleaning jobs and teams?",
    key: 2,
    answer:
      "Yes. Cleaning company software can help managers schedule jobs, assign cleaners, track work and monitor job progress. For businesses working with employees or contractors, connected jobs and team management can make it easier to see who is responsible for each job, track time and keep everyone aligned.",
  },
  {
    question: "Does cleaning business software include invoicing and payment management?",
    key: 3,
    answer:
      "Many cleaning business software platforms include invoicing and payment management features. Cleaning business invoicing software can help businesses create invoices using existing customer, quote or job information, track outstanding payments and send reminders. This can reduce repetitive administration and help teams stay on top of accounts receivable.",
  },
  {
    question: "Is software for cleaning companies suitable for small businesses?",
    key: 4,
    answer:
      "Yes. Software for cleaning companies can be useful for small businesses as well as growing and larger cleaning teams. Bringing customer information, quotes, jobs, schedules, expenses and invoices into one system can help smaller businesses reduce reliance on spreadsheets, emails and separate messaging tools as they grow.",
  },
  {
    question: "How can cleaning business management software improve profitability?",
    key: 5,
    answer:
      "Cleaning business management software can give businesses a clearer view of revenue, labour, contractor costs, expenses and project budgets. By connecting these figures to individual jobs or projects, cleaning businesses can compare actual costs with budgets, identify where costs are increasing and make more informed decisions about pricing and profitability.",
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