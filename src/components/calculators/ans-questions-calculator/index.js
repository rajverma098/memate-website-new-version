import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const questions = [
    {
      question: "What kind of calculators can I create in meMate?",
      key: 1,
      answer:
        "You can build fully customisable calculators tailored to your business—whether it’s for budgeting, quoting, cost estimating, or margin calculation.",
    },
    {
      question: "Can I automatically set a budget using the calculator?",
      key: 2,
      answer:
        "Yes! meMate lets you define rules and inputs so budgets are automatically calculated based on your business logic.",
    },
    {
      question: "Is it possible to add both margin and markup to calculations?",
      key: 3,
      answer:
        "Absolutely. You can choose to apply either margin or markup (or both) to keep pricing strategies consistent.",
    },
    {
      question: "Can I use fixed markups across my products or services?",
      key: 4,
      answer:
        "Yes. Fixed markups can be preset and applied across your calculator to maintain accurate and repeatable pricing.",
    },
    {
      question: "How do departments and sub-departments work in calculators?",
      key: 5,
      answer:
        "You can set up your calculator structure to reflect your business hierarchy, making it easier to assign costs and track performance by area.",
    },
    {
      question: "Can I see profit projections in real time?",
      key: 6,
      answer:
        "Yes! meMate shows you the operational profitability of each quote or calculation instantly as you build it.",
    },
    {
      question: "Is the calculator easy to set up, or do I need technical knowledge?",
      key: 7,
      answer:
        "No technical skills required. The setup is intuitive, user-friendly, and fully guided within meMate.",
    },
    {
      question: "Can I reuse calculator templates for future quotes?",
      key: 8,
      answer:
        "Definitely. Once created, calculators can be saved as templates and reused whenever you need them.",
    },
    {
      question: "Can I pre-set product and service descriptions?",
      key: 9,
      answer:
        "Yes. You can create a library of preset descriptions for your offerings and use them in your calculator with one click.",
    },
    {
      question: "Is the calculator feature available on the mobile app?",
      answer:
        "While most functionality is desktop-optimised, key calculator features and results can be viewed and referenced via the meMate mobile app.",
      key: 10,
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
  );
};

export default QuestionAnswer;
