import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../assests/images";
import { Helmet } from "react-helmet-async";
const AutomotiveQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

 const questions = [
  {
    question: "What is removalist software?",
    key: 0,
    answer:
      "Removalist software is a business management solution that helps moving companies manage customer enquiries, quotes, jobs, schedules, teams, invoices and payments from one central platform. It can replace disconnected spreadsheets, emails and separate tools with a more organised workflow.",
  },
  {
    question: "How can removalist software help manage quotes and enquiries?",
    key: 1,
    answer:
      "Removalist software can help removalist businesses capture and organise customer enquiries, manage follow-ups and create professional quotes using predefined services and pricing. With meMate, approved quotes can move into the project workflow, helping reduce duplicate data entry and keeping customer and job information connected.",
  },
  {
    question: "Can removalist software help with job scheduling and team management?",
    key: 2,
    answer:
      "Yes. Removalist software can help businesses schedule jobs, assign employees or contractors, manage workloads and track job progress. meMate provides scheduling, time tracking, and employee and contractor management features to help coordinate office and field teams.",
  },
  {
    question: "Does removalist software include invoicing and payment tracking?",
    key: 3,
    answer:
      "Many modern removalist software platforms connect quoting, job management and invoicing to reduce repetitive administration. With meMate, approved quotes can be converted into invoices, while businesses can record payments and follow up on outstanding invoices from one system.",
  },
  {
    question: "Can removalist software help track the profitability of each moving job?",
    key: 4,
    answer:
      "Yes. Profitability features can help removalist businesses compare project revenue with labour, contractor, expense and other job-related costs. meMate provides budgeting, expense tracking and project profitability visibility, helping businesses understand the financial performance of individual jobs.",
  },
  {
    question: "Is meMate suitable for small and growing removalist businesses?",
    key: 5,
    answer:
      "Yes. meMate is designed for small and medium-sized businesses and provides tools for managing enquiries, quotes, projects, scheduling, employees, contractors, invoicing and reporting in one system. It can help growing removalist businesses bring more of their day-to-day operations into a single platform.",
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