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
      question: "What is job management software, and how does meMate help?",
      key: 1,
      answer:
        "Job management software helps businesses organise jobs, allocate work, coordinate teams and track progress from one central platform. meMate brings key business processes together, helping businesses manage jobs, schedules, tasks, time tracking, clients and day-to-day operations more efficiently.",
    },
    {
      question: "How can meMate help with job scheduling?",
      key: 2,
      answer:
        "meMate helps businesses plan and allocate jobs and shifts based on team availability, responsibilities and workloads. By bringing scheduling and job information together, businesses can improve coordination, reduce scheduling conflicts and keep employees and contractors informed.",
    },
    {
      question: "Can meMate schedule work for employees and contractors?",
      key: 3,
      answer:
        "Yes. meMate helps businesses organise and allocate work for both employees and contractors. A centralised job management system makes it easier to coordinate responsibilities, manage schedules and maintain visibility across different types of workers.",
    },
    {
      question: "Can I create recurring or reusable jobs and shift schedules?",
      key: 4,
      answer:
        "meMate can help simplify recurring scheduling by allowing businesses to organise frequently used job and shift structures. Using job management software for repeatable workflows can reduce manual administration and make regular scheduling more consistent.",
    },
    {
      question: "Does meMate offer a mobile job management app?",
      key: 5,
      answer:
        "Yes. The meMate job management app gives teams convenient access to relevant job and scheduling information while working remotely or away from the office. Employees and contractors can stay informed about assigned work, schedules, tasks and updates from their mobile devices.",
    },
    {
      question: "Can meMate track employee and contractor time?",
      key: 6,
      answer:
        "Yes. meMate supports time tracking alongside job and scheduling workflows, helping businesses maintain better visibility of working hours and job-related activities. Combining time information with job tracking software can help managers understand how time and resources are being used.",
    },
    {
      question: "Can meMate help manage changes to jobs and schedules?",
      key: 7,
      answer:
        "Yes. Business requirements can change quickly, so meMate helps teams keep job and scheduling information organised when updates are required. Centralised job management software makes it easier for authorised users to update work details and keep relevant team members informed.",
    },
    {
      question: "Can meMate help businesses manage workloads?",
      key: 8,
      answer:
        "meMate provides greater visibility into assigned jobs, schedules, tasks and working hours. This can help businesses identify workload imbalances, coordinate resources and distribute work more effectively across employees and contractors.",
    },
    {
      question: "Can meMate integrate with other business systems?",
      key: 9,
      answer:
        "meMate is designed to bring important business processes together and support relevant business and accounting workflows. This can help reduce duplicate data entry while connecting information relating to jobs, clients, time, invoicing and other operational activities.",
    },
    {
      question: "Why choose meMate as a job management solution?",
      answer:
        "meMate combines job management, scheduling, time tracking, task coordination, client management and other business processes in one platform. With job tracking software and a mobile job management app, businesses can improve operational visibility, coordinate teams and manage their work more efficiently.",
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
