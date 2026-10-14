import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../assests/images";
import { Helmet } from "react-helmet-async";
const AutomotiveQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

 const questions = [
  {
    question: "How can landscaping business software help manage customer enquiries and prepare quotes?",
    key: 0,
    answer:
      "Landscaping business software helps you organise customer details, manage enquiries and prepare quotes in one central system. With meMate, you can use the sales pipeline to manage quotes, follow-ups and approvals, while preset calculators help estimate service costs, margins and markups. This makes it easier to keep track of potential landscaping projects and move approved quotes into project management.",
  },
  {
    question: "Can meMate help schedule recurring and one-off landscaping jobs?",
    key: 1,
    answer:
      "meMate helps landscaping businesses organise job schedules, team shifts and project timelines through its job scheduling and company calendar features. You can plan work, manage staff availability and coordinate jobs across your team. For businesses handling regular garden maintenance alongside one-off landscaping projects, these tools provide a central view of scheduled work and help keep daily operations organised.",
  },
  {
    question: "How can landscapers assign jobs and coordinate employees or contractors?",
    key: 2,
    answer:
      "meMate allows landscaping businesses to assign jobs and tasks to employees or contractors and coordinate work through a central platform. Its contractor management features support individual or group job assignments, work updates and approval processes. Employee management and timesheets also help businesses keep track of team hours and scheduled shifts, making it easier to coordinate field teams across multiple projects.",
  },
  {
    question: "Can landscaping business software manage invoices and customer payments?",
    key: 3,
    answer:
      "Yes, meMate helps landscaping businesses create invoices from approved quotes, manage invoice statuses and record partial or full payments. You can also send invoices to customers, support online payments and follow up on overdue amounts. Keeping quotes, invoices, and payment records connected helps reduce administrative work and gives you a clearer view of outstanding customer payments.",
  },
  {
    question: "How can landscaping software help track job costs and project profitability?",
    key: 4,
    answer:
      "meMate helps landscaping businesses monitor project profitability by linking budgets, expenses, timesheets and costs to individual jobs. You can establish budgets during the quotation stage and review project expenses alongside sales and invoicing information. This helps you compare costs against your planned budget, understand which landscaping projects are performing well and make more informed decisions about future pricing.",
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