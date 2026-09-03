import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";
import { Helmet } from "react-helmet-async";
const AutomotiveQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const questions = [
    {
      question: "What is meMate?",
      key: 0,
      answer:
        "meMate is an all-in-one business management software that helps companies manage projects, teams, clients, finances, and workflows from one platform.",
    },
    {
      question: "Is meMate suitable for small businesses?",
      key: 1,
      answer:
        "Yes. meMate is designed as a powerful small business management software, offering simple setup, intuitive workflows, and the ability to scale as your business grows.",
    },
    {
      question:
        "What type of businesses uses meMate?",
      key: 2,
      answer:
        "meMate is ideal for service-based businesses, agencies, trades, consultants, and growing SMEs that need better control over operations and reporting.",
    },
    {
      question:
        "Can meMate replace multiple tools?",
      key: 3,
      answer:
        "Absolutely. meMate is built to replace spreadsheets, CRMs, project tools, invoicing software, and scheduling apps with one integrated solution.",
    },
    {
      question:
        "Is meMate cloud-based?",
      key: 4,
      answer:
        "Yes. meMate is a secure, cloud-based company management software accessible from anywhere.",
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
    <div className="question-answer-wrapper questionAnswerMain">
       <Helmet>
                    <script type="application/ld+json">{generateFAQSchema()}</script>
                  </Helmet>
    <div className="question-answer-content">
      <div className="question-answer-heading-wrapperF">
        <p className="question-answer-heading">We answer your questions</p>
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
  </div>
  );
};

export default AutomotiveQuesitonAndAns;