import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";
import SuccessStories from "@/components/success-stories";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const questions = [
    {
      question: "Why would I choose MeMate instead of Sage?",
      key: 1,
      answer:
        "Sage is great for accounting, but it doesn’t cover quoting, job tracking, team scheduling, or internal communication. MeMate offers a complete solution, combining financial tracking with everyday business operations — all in one place.",
    },
    {
      question: "Does MeMate include accounting features like Sage?",
      key: 2,
      answer:
        "MeMate includes expense tracking, GST/BAS reports, and integrates with Xero and MYOB, so you can keep your accountant happy without switching tools. For full accounting functionality, we recommend pairing MeMate with your preferred accounting platform.",
    },
    {
      question: "Is MeMate easy to switch to from Sage?",
      key: 3,
      answer:
        "Yes — we offer free onboarding and data migration. Our team helps you set everything up so you’re ready to go quickly and without hassle.",
    },
    {
      question: "Does MeMate support Australian tax compliance?",
      key: 4,
      answer:
        "Absolutely. MeMate provides GST and BAS-ready reports, and integrates with accounting platforms commonly used in Australia for ATO compliance.",
    },
    {
      question: "Can MeMate handle payroll like Sage?",
      key: 5,
      answer:
        "While MeMate supports timesheets, team tracking, and scheduling, we integrate with tools like Sage for payroll. This gives you flexibility without locking you into a specific finance ecosystem.",
    },
    {
      question: "Is MeMate suitable for tradies and service-based teams?",
      key: 6,
      answer:
        "Yes — MeMate is designed specifically for trades, services, and growing teams across Australia. Whether you’re running solo or managing multiple crews, we’ve got you covered.",
    },
   
  ];

  const toggleQuestion = (key) => {
    setSelectedQuestion(selectedQuestion === key ? null : key);
  };

  // Generate FAQ Schema dynamically
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
    <>
    <div className="question-answer-wrapper">
      {/* Inject JSON-LD Schema into the <head> */}
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
                    transform:
                      selectedQuestion === ques.key
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
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
    <div className="m8SuccessStories">
       <SuccessStories />
    </div>
     </>
  );
};

export default QuestionAnswer;
