import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../assests/images";
import { Helmet } from "react-helmet-async";
const AutomotiveQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

 const questions = [
  {
    question: "How much do I earn? ",
    key: 0,
    answer:
      "How much do I earn? $300 per new business that subscribes to meMate through your link: $100 after 35 days on a paid plan and $200 after 100 days. Amounts include GST.",
  },
  {
    question: "When does the 35 / 100 days start? ",
    key: 1,
    answer:
      "When does the 35 / 100 days start? From their first paid subscription payment. Free trial days don't count.",
  },
  {
    question: "What if the business cancels?",
    key: 2,
    answer:
      "What if the business cancels? If they cancel before 35 days, no reward is paid. If they cancel between 35 and 100 days, you keep the $100 and the $200 isn't paid.",
  },
  {
    question: "How do I get paid?",
    key: 3,
    answer:
      "How do I get paid? By bank transfer to the account you add in Refer & Earn (customers) or give your Affiliate Manager (affiliates). We'll notify you when each payment is made.",
  },
  {
    question: "I'm registered for GST. How does that work?",
    key: 4,
    answer:
      "I'm registered for GST. How does that work? The $100 and $200 include GST ($9.09 and $18.18).",
  },
  {
    question: "Does it count if they add more users to an existing account?",
    key: 5,
    answer:
      "Does it count if they add more users to an existing account? No. Rewards are for new business accounts that haven't used meMate before.",
  },
  {
    question: "Can I refer my own business or another business I own?",
    key: 6,
    answer:
      "Can I refer my own business or another business I own? No. Self-referrals and existing meMate accounts aren't eligible.",
  },
  {
    question: "Someone signed up but forgot to use my link. What can I do?",
    key: 7,
    answer:
      "Someone signed up but forgot to use my link. What can I do? Contact us within 30 days of their signup and we'll check and link the referral if it's eligible.",
  },
  {
    question: "What does the referred business get?",
    key: 8,
    answer:
      "What does the referred business get? Free data migration, 60 days of priority support and a free trial.",
  },
  {
    question: "Do I need to be a meMate customer to refer?",
    key: 9,
    answer:
      "Do I need to be a meMate customer to refer? No. Customers refer from inside their account. Everyone else can apply to become an Affiliate.",
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
        <p className="question-answer-heading">FAQ</p>
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