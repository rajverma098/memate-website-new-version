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
      question: "What can I see in the Company Calendar?",
      key: 1,
      answer:
        "You can view employee shifts, contractor job schedules, tasks, project deadlines, holidays, and more—all in one place.",
    },
    {
      question: "Can I assign or update shifts through the calendar?",
      key: 2,
      answer:
        "Yes! You can create, edit, and manage employee shifts directly within the calendar with just a few clicks.",
    },
    {
      question: "How does the calendar handle contractor schedules?",
      key: 3,
      answer:
        "Contractor jobs are fully visible and trackable on the calendar, so you always know when and where they’re working.",
    },
    {
      question: "Can I view team availability before scheduling?",
      key: 4,
      answer:
        "Absolutely. You’ll see who’s available, already scheduled, or unavailable, helping you avoid conflicts and plan smarter.",
    },
    {
      question: "Does the calendar include public holidays?",
      key: 5,
      answer:
        "Yes. Memate includes public holidays and lets you add custom holidays or leave days for your company.",
    },
    {
      question: "Can I link tasks to calendar events?",
      key: 6,
      answer:
        "Yes! Tasks automatically appear on the calendar based on their due dates, helping you visualize timelines and priorities.",
    },
    {
      question: "Is the calendar easy to use for non-technical staff?",
      key: 7,
      answer:
        "Definitely. The interface is built to be simple, intuitive, and user-friendly—even for those new to digital tools.",
    },
    {
      question: "Can I filter the calendar by team member or department?",
      key: 8,
      answer:
        "Yes. You can filter views to focus on individuals, teams, departments, or projects—whatever helps you stay organized.",
    },
    {
      question: "Is there mobile access to the calendar?",
      key: 9,
      answer:
        "Yes, the Company Calendar can be viewed and managed through the Memate mobile app, perfect for on-the-go updates.",
    },
    {
      question: "Will calendar changes send notifications?",
      answer:
        "Yes. Any changes—like new shifts, updates, or tasks—will trigger automatic notifications to the relevant team members.",
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
