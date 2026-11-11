import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../assests/images";
import { Helmet } from "react-helmet-async";
const AutomotiveQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

 const questions = [
  {
    question: "I’ve tried car detailing software before and it just added more admin — why is MeMate different?",
    key: 0,
    answer:
      "Most auto detailing software is built for bookings, not for running a real business. MeMate handles the full picture — quotes, job scheduling, contractor management, invoicing and live financials — so your admin actually shrinks as your job volume grows. Most users are fully set up and running their first job through it within a day.",
  },
  {
    question: "I work with contractors who come and go — can the system handle that?",
    key: 1,
    answer:
      "Yes. MeMate lets you assign jobs to contractors the same way you assign staff. They see their schedule, update job progress and submit their work — and you get full visibility without a single phone call. No more jobs falling apart because a contractor didn’t show and no one knew until the customer called.",
  },
  {
    question: "How do I stop underquoting wraps and details and losing money on every third job?",
    key: 2,
    answer:
      "You set your service pricing once in MeMate — full wrap, partial wrap, ceramic coat, paint correction, whatever you offer. Every quote that goes out is built from those locked rates. No more quoting from memory, no more margin surprises when the job is done.",
  },
  {
    question: "Can I actually see if the detailing business is making money in real time?",
    key: 3,
    answer:
      "Yes. Live job costs, labour, materials and contractor expenses are tracked against revenue on every single job. You’ll see your margin per job, your weekly revenue and how you’re tracking against your monthly target — not just at the end of the month when it’s too late to change anything.",
  },
  {
    question: "Right now one manager could pocket cash and I’d never know — how does MeMate fix that?",
    key: 4,
    answer:
      "Every payment, invoice and job is logged in the system the moment it happens. Nothing lives in someone’s head, pocket or personal phone. You get a full financial trail — so whether you’re on the floor or not, nothing moves without you seeing it.",
  },
  {
    question: "Can I actually scale this business or will it fall apart the moment I take on more jobs?",
    key: 5,
    answer:
      "That’s exactly what MeMate is built for. The system that works for 5 jobs a week works just as well for 50. Add staff, add contractors, set team targets and track performance — MeMate grows with you instead of becoming the thing that holds you back.",
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
    <div className="question-answer-wrappercl questionAnswerMain cleaningFaqs">
       <Helmet>
                    <script type="application/ld+json">{generateFAQSchema()}</script>
                  </Helmet>
      <div className="question-answer-headingcl">
        <p className="question-answer-heading">Questions You're Probably <span>Asking Right Now</span></p>
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
  );
};

export default AutomotiveQuesitonAndAns;