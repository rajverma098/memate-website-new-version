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
      question: "What is customer database management in CRM software?",
      key: 1,
      answer:
        "Customer database management involves storing, organising and updating customer information, communication history, sales activity and other relevant records in one central system. Client management software makes it easier for businesses to access accurate customer information, while a client relationship management database provides a structured view of client interactions, requirements and engagement.",
    },
    {
      question: "How does your software help businesses manage clients?",
      key: 2,
      answer:
        "Our client management software helps businesses centralise client information, track communications, manage tasks and organise follow-ups from one platform. By supporting effective client relationship management, it gives teams greater visibility of client details, interactions, requirements and ongoing activities, helping them provide more consistent customer service.",
    },
    {
      question: "Can I manage prospective clients with your CRM system?",
      key: 3,
      answer:
        "Yes. Customer relationship management software can help businesses manage prospective clients throughout the sales process. Teams can organise prospect information, record interactions, schedule follow-ups and track opportunities, making it easier to manage leads and build lasting relationships with potential customers.",
    },
    {
      question: "What type of software is best for managing a client database?",
      key: 4,
      answer:
        "The right client management software should make it easy to store, update and access client information while supporting communication tracking, follow-ups, task management and reporting. A centralised client relationship management database can help businesses reduce scattered customer information and maintain a more organised approach to managing client relationships.",
    },
    {
      question: "What CRM features are available for small businesses?",
      key: 5,
      answer:
        "CRM platforms for small businesses typically include features for managing clients and prospects, storing customer records, tracking communications, scheduling follow-ups, managing tasks and organising workflows. These capabilities within customer relationship management software can help small teams improve visibility, reduce manual administration and manage customer relationships more efficiently.",
    },
    {
      question: "Is your CRM software suitable for small businesses in Australia?",
      key: 6,
      answer:
        "Yes. Our customer relationship management software is designed to support the needs of small and growing Australian businesses. The client management software helps teams organise customer information, manage prospects, track interactions and maintain consistent client relationships from a centralised platform.",
    },
    {
      question: "How does CRM software help small businesses manage clients?",
      key: 7,
      answer:
        "Client management software can bring customer records, communications, tasks and follow-up activities together in one organised system. For small businesses, this can simplify client relationship management, improve visibility across customer interactions and help teams spend less time managing information manually.",
    },
    {
      question: "What are the benefits of using cloud-based CRM software?",
      key: 8,
      answer:
        "Cloud-based CRM software allows authorised users to access customer and client information from connected devices without relying on a single local system. Using customer relationship management software in the cloud can support team collaboration, centralised data management and more consistent client relationship management as a business grows.",
    },
    {
      question: "How can I protect information stored in a client relationship management database?",
      key: 9,
      answer:
        "Protecting information in a client relationship management database requires appropriate security controls, user permissions and responsible data-management practices. Businesses should choose CRM software with suitable security features and use strong passwords, controlled user access and effective data-management processes to help protect customer information.",
    },
    {
      question: "Can CRM software integrate with other marketing and business tools?",
      answer:
        "Many CRM platforms can integrate with marketing and business applications to connect customer data and reduce repetitive manual tasks. Integrating other tools with customer relationship management software can help businesses coordinate lead generation, customer information, communication and follow-up activities, supporting more efficient client relationship management.",
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
          <p>We answer your questions</p>
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
