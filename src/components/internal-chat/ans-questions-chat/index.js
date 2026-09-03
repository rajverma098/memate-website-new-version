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
      question: "Can I chat with both employees and contractors in meMate?",
      key: 1,
      answer:
        "Yes, meMate allows you to connect with both your internal team and external contractors in one centralised, secure chat space.",
    },
    {
      question: "How do I organise chats by project?",
      key: 2,
      answer:
        "Each project in meMate can have its own dedicated chat. Just assign team members to the project, and they’ll automatically join the relevant discussion group.",
    },
    {
      question: "Is it possible to control who sees each chat?",
      key: 3,
      answer:
        "Absolutely. Only users added to a specific project can access its chat, ensuring privacy and relevance in every conversation.",
    },
    {
      question: "Can I share files and links in the chat?",
      key: 4,
      answer:
        "Yes! You can easily share documents, links, and notes directly within the chat, keeping everything connected to the right project.",
    },
    {
      question: "Is chat history saved?",
      key: 5,
      answer:
        "Yes, all communications—including messages and shared files—are saved and organised within the project’s history for future reference.",
    },
    {
      question: "Can contractors use the chat from their phones?",
      key: 6,
      answer:
        "They sure can. Contractors can access meMate’s chat feature through the meMate mobile app for instant communication on the go.",
    },
    {
      question: "Is the Internal Chat secure?",
      key: 7,
      answer:
        "Yes, all chats are encrypted and contained within your organisation’s private workspace, ensuring your data stays safe.",
    },
    {
      question: "Can I search past messages or files in the chat?",
      key: 8,
      answer:
        "Yes, you can search through chat history to quickly find messages, files, or specific discussions by project or keyword.",
    },
    {
      question: "What happens to chat history when a project is completed?",
      key: 9,
      answer:
        "The full chat history is archived with the project, so you can always go back and review past conversations if needed.",
    },
    {
      question: "Do I need to use any third-party tools for chat?",
      answer:
        "Nope! meMate’s Internal Chat is fully built-in, so you don’t need Slack, WhatsApp, or any other external messaging apps.",
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
