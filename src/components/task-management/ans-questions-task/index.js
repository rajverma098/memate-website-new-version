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
      question: "Can I assign tasks to specific people within a project?",
      key: 1,
      answer:
        "Yes, you can easily assign tasks to individual team members or contractors within each project, making responsibilities clear.",
    },
    {
      question: "Can tasks be added directly to the project timeline?",
      key: 2,
      answer:
        "Absolutely. Tasks can be placed right on the timeline so they align with project phases, milestones, and deadlines.",
    },
    {
      question: "Can I use tasks to remind the team of important project milestones?",
      key: 3,
      answer:
        "Yes, tasks can be set as notifications for key milestones to help keep everyone focused and on schedule.",
    },
    {
      question: "What details can I include in a task?",
      key: 4,
      answer:
        "You can add a title, description, due date, attachments, and even tag the person responsible—everything in one spot.",
    },
    {
      question: "Can contractors receive tasks through meMate?",
      key: 5,
      answer:
        "Yes! Contractors can receive and manage their tasks directly through meMate, either on desktop or via the mobile app.",
    },
    {
      question: "How does the mobile app help with task management?",
      key: 6,
      answer:
        "With the meMate app, you can create, view, assign, and track tasks on the go—perfect for field teams and remote work.",
    },
    {
      question: "Can I see an overview of all tasks for a project?",
      key: 7,
      answer:
        "Yes, you’ll have a clear overview of every task linked to a project, including progress status and deadlines.",
    },
    {
      question: "Are team members notified when they’re assigned a task?",
      key: 8,
      answer:
        "Yes, they’ll receive instant notifications via meMate, ensuring nothing slips through the cracks.",
    },
    {
      question: "Can I edit or reassign tasks after they’ve been created?",
      key: 9,
      answer:
        "Definitely. Tasks are fully flexible—you can update details, change assignees, or adjust due dates anytime.",
    },
    {
      question: "Is there a way to track task completion?",
      answer:
        "Yes. Each task has a progress status, so you’ll always know what’s done, what’s in progress, and what needs attention.",
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
