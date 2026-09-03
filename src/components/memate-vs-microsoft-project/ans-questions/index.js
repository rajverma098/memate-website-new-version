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
      question: "Why choose MeMate instead of Microsoft Project?",
      key: 1,
      answer:
        "Microsoft Project is made for professional project planners — not business owners running teams, jobs, and clients day to day. MeMate includes quoting, invoicing, time tracking, and CRM, all in one system, without the complexity or high licensing costs.",
    },
    {
      question: "Can MeMate replace Microsoft Project for job tracking?",
      key: 2,
      answer:
        "Yes. MeMate offers job boards, scheduling, task management, approvals, and reporting — all designed for real operational workflows, not just visual timelines.",
    },
    {
      question: "Is MeMate easier to use than MS Project?",
      key: 3,
      answer:
        "Definitely. MeMate is designed for non-technical users and small business teams. You don’t need training or certifications to get started — and we set it all up for you.",
    },
    {
      question: "Does MeMate have Gantt charts or timeline views?",
      key: 4,
      answer:
        "MeMate uses a simplified job scheduling board, calendar views, and task flows — built for getting things done. For full Gantt-style planning, Microsoft Project is better suited — but often overkill for most SMEs.",
    },
    {
      question: "Is MeMate cheaper than Microsoft Project?",
      key: 5,
      answer:
        "Yes. MeMate uses flat monthly pricing with all features included, whereas MS Project typically charges per user and requires additional Microsoft 365 licenses for full functionality.",
    },
    {
      question: "Can I track multiple jobs and team members in MeMate?",
      key: 6,
      answer:
        "Absolutely. MeMate is made to handle multiple crews, subcontractors, locations, and job types — with internal chat, approvals, and real-time job updates.",
    },
    {
      question: "How easy is it to switch from Microsoft Project to MeMate?",
      key: 7,
      answer:
        "Very easy. We provide free onboarding and data migration, and help you map your current jobs and projects into MeMate so you’re ready to go from day one.",
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
