import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      question: "What communication tools are included in a business management system?",
      key: 1,
      answer:
        "A business management system may include a range of team communication tools designed to keep important conversations and updates connected to daily operations. Depending on the available features, this can include internal communication, client messaging, shared updates, notifications, automated reminders, and communication history. By bringing these activities into a central system, businesses can reduce reliance on scattered emails, separate messaging apps and disconnected communication channels.",
    },
    {
      question: "Can I communicate with clients directly through the software?",
      key: 2,
      answer:
        "Yes. Centralised business software can help businesses manage client communication alongside other important activities. Depending on the features available, users may be able to send updates, reminders and relevant information while keeping a clearer record of previous client interactions. Having communication connected to client information can also help team members understand the context of previous conversations and provide more consistent service.",
    },
    {
      question: "How does the system support internal team communication?",
      key: 3,
      answer:
        "Team communication software can help employees share updates, coordinate responsibilities, and stay informed about important business activities. Instead of relying entirely on long email chains or multiple communication platforms, teams can keep relevant discussions closer to their projects, tasks, jobs and client requirements. This can improve visibility, reduce misunderstandings and make it easier for team members to follow important updates.",
    },
    {
      question: "Can I send automated reminders to clients?",
      key: 4,
      answer:
        "Depending on the system's available features, businesses may be able to automate reminders and notifications for important actions and events. Automated reminders can be useful for appointments, invoices, approvals, tasks and other follow-ups. This can help businesses maintain more consistent communication, reduce repetitive manual work and minimise the risk of important follow-ups being missed.",
    },
    {
      question: "Does the software store communication history?",
      key: 5,
      answer:
        "A centralised business management system can help maintain a record of relevant communications and interactions. This makes it easier for authorised team members to review previous conversations when responding to enquiries, continuing work or managing client relationships. Access to communication history can also provide useful context when responsibilities are transferred from one team member to another.",
    },
    {
      question: "Can I communicate with contractors and freelancers through the software?",
      key: 6,
      answer:
        "Team communication tools can support collaboration with both internal employees and external contributors, depending on the platform's features and access settings. Businesses may be able to keep contractors and freelancers informed about relevant tasks, updates, and project requirements without relying entirely on separate communication channels. Centralising important discussions can help external contributors stay aligned with the work they are involved in.",
    },
    {
      question: "How does the software support mobile communication?",
      key: 7,
      answer:
        "Mobile-friendly access can help team members stay connected when they are working away from their desks. Depending on the platform and compatible devices, users may be able to access important updates, tasks, notifications and business information while working remotely or in the field. This can be particularly valuable for mobile teams, field workers, service businesses and organisations with flexible work arrangements.",
    },
    {
      question: "Can I track who has read or responded to messages?",
      key: 8,
      answer:
        "Message tracking capabilities depend on the specific communication features available within the system. Some platforms may provide information about responses, acknowledgements or other message activity, helping teams determine whether important communications require further follow-up. Businesses should review the available communication features to understand how message activity is managed within their chosen system.",
    },
    {
      question: "Is it possible to send group messages within the system?",
      key: 9,
      answer:
        "Yes, group communication features can help businesses share relevant information with multiple people at the same time. Depending on the system, this may include communication with teams, departments, project participants, contractors or other authorised users. Group messaging can reduce the need to repeat the same information individually and help everyone involved stay informed about important updates.",
    },
    {
      question: "How secure is communication within a business management system?",
      answer:
        "Communication security depends on the software provider, system infrastructure and available security settings. Businesses should look for appropriate measures designed to protect business information and ensure that access is managed through authorised user permissions. When choosing a business management platform, it is important to review available security measures, access controls, authentication options and data management practices.",
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
