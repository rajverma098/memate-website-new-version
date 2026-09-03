import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";
import style from "../mematefaqs.module.scss";
const FilterIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/search-filter.svg";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

const questions = [
{
  category: "About meMate",
question: "What is meMate?",
key: 0,
answer: `
<p>meMate is an all-in-one business management software built for small-medium Australian businesses. It combines CRM, quoting, job scheduling, project management, invoicing, supplier management, and live profit reporting into a single platform, so you can run your entire business without juggling multiple tools.</p>
`
},

{
question: "Why is meMate suited to Australian small-medium businesses?",
key: 1,
answer: `
<p>meMate is purpose-built for Australian SMBs. Unlike global platforms that require
configuration for Australian workflows, meMate is AUD priced, natively GST compliant, and
built around the way Australian service businesses actually operate. It covers CRM, quoting,
scheduling, invoicing, and real-time profit reporting in one platform.
</p>
`
},

{
question: "What industries benefit from meMate?",
key: 2,
answer: `
<p>meMate has been market-tested and proven across industries including:</p>

<ul>
<li>Trades & field service (construction, electrical, plumbing)</li>

<li>Automotive mechanics</li>

<li>Cleaning services</li>

<li>Landscape and garden maintenance</li>

<li>Electronics repair shops</li>

<li>Digital & creative agencies</li>

<li>Large format printing & manufacturing</li>
</ul>

<p>If your business involves project management, quoting, scheduling, or invoicing, meMate is built for you.</p>
`
},

{
question: "Is meMate suitable for small businesses?",
key: 3,
answer: `
<p>Absolutely. meMate was designed with small business owners in mind. No technical skills
required, minimal setup, and you can be up and running within days. It's ideal for businesses
with 2–50 staff.</p>
`
},

{
question: "What makes meMate different from other business management software?",
key: 4,
answer: `
<p><strong>meMate's key differentiators are:</strong></p>

<ul>

<li>
<strong>Built for Australia:</strong>
AUD pricing, native GST invoicing, and local workflows from day one
</li>

<li>
<strong>All-in-one:</strong>
CRM, quoting, scheduling, project management, invoicing, and live profitability in one platform
</li>

<li>
<strong>No onboarding fees or lock-in:</strong>
Up and running in days with real support
</li>

<li>
<strong>Live job profitability:</strong>
See margins across every job in real time
</li>

<li>
<strong>Built for ordinary business owners:</strong>
No technical skills required
</li>

</ul>
`
},

{
category: "Features & Functionality",
question: "What features does meMate offer?",
key: 5,
answer: `
<p>meMate includes features across two key areas:</p>
<p><strong>meMate Business</strong></p>
<ul>
<li>
<strong>Management:</strong> Client Management, Supplier Management, Sales Pipeline, Project & Task Management, Asset Management, Internal Calendar
</li>
<li>
<strong>Productivity:</strong> Reports, Profitability & Budgeting
</li>
<li>
<strong>Technology:</strong> Scheduling, Invoicing, Calculators, Communication, Statistics
</li>
</ul>
<p><strong>meMate Work</strong></p>
<ul>
<li>
<strong>Management:</strong> Employee Management, Contractor Management
</li>
<li>
<strong>Collaboration:</strong> Schedule Jobs, Fixed or Time Tracker, Job Approval, Internal Chat, Timesheets
</li>
</ul>
`
},

{

question: "Is meMate GST-compliant?",
key: 6,
answer: `
<p>Yes, meMate generates GST-compliant invoices natively, directly from completed jobs. For
Australian businesses, this means your billing is always ATO-ready without any extra steps.
</p>
`
},

{
question: "Is meMate cloud-based?",
key: 7,
answer: `
<p>Yes, meMate is fully cloud-based and accessible from anywhere via a desktop web interface
for owners and office managers, and via the mobile app for field staff</p>
`
},

{
question: "Is there a mobile app for meMate?",
key: 8,
answer: `
<p>Yes, meMate has a purpose-built iOS app for field staff and contractors, available on the App
Store and Google Play for Android devices. Office managers and owners can manage
everything through the full cloud desktop interface.
</p>
`
},

{
question: "How does meMate handle client management?",
key: 9,
answer: `
<p>meMate includes a full CRM that goes beyond simple contact records. You can track client
turnover, order frequency, full job history, and communications.
</p>
`
},

{
question: "How does meMate handle project management?",
key: 10,
answer: `
<p>meMate features Gantt-style project management that gives you a visual overview of jobs,
tasks, timelines, and team assignments. You can schedule work, track time against jobs,
manage approvals, and monitor real-time profitability all from a single dashboard.
</p>
`
},

{
question: "Can meMate assist with invoicing and billing?",
key: 11,
answer: `
<p>Yes, meMate generates GST-compliant invoices natively from completed jobs. Your billing is
always accurate and tied to actual work done, meaning no re-adding data between systems,
and no need for a separate invoicing tool to get an invoice out the door.</p>
`
},
{
question: "How does meMate show job profitability in real time?",
key: 12,
answer: `
<p>meMate's live profitability dashboard tracks income, labour costs, materials, and expenses
against each job as it progresses, not just at month-end reconciliation. You can see the profit
margin on any individual job or across your entire business at any point in time, giving you
the visibility to make better pricing and resourcing decisions.
</p>
`
},
{
question: "How does meMate handle reporting?",
key: 13,
answer: `
<p>meMate's statistics page includes an Executive Dashboard (overall turnover, profit, and
expenses), Conversion Analytics (lead-to-job tracking), Key Results (monthly targets by
department), a full Profitability module (live job and business-wide margins), and a GA
Widget for integrating website performance data alongside your business results.
</p>
`
},
{
question: "How does meMate handle time tracking?",
key: 14,
answer: `
<p>meMate includes both fixed and flexible time tracking, linked directly to jobs and clients.
Labour time is recorded against each job in real time, so your actual job costs are always
accurate.
</p>
`
},
{
question: "How does meMate handle task management?",
key: 15,
answer: `
<p>meMate includes a dedicated Task page that allows you to create, assign, and track tasks
across your team. Tasks can be linked to specific jobs or projects, keeping everything
connected.</p>
`
},
{
question: "Can meMate integrate with other software?",
key: 16,
answer: `
<p>meMate is a fully integrated platform designed to replace the need for multiple tools. Rather
than connecting a patchwork of apps, everything lives in one system. Please contact our
team for details on specific third-party integrations we offer.</p>
`
},
{
category: "Pricing & Plans",
question: "What are the pricing plans for meMate?",
key: 17,
answer: `
<p>meMate is priced per account, ranging from AUD $98 - $350 per month depending on your
plan. Your whole team is included, with no onboarding costs. Contact the team to find the
right plan for your business.</p>
`
},
{
question: "Does meMate charge per user?",
key: 18,
answer: `
<p>No, meMate is priced per month. Your subscription is based on which features are right for
your business, and will always cover multiple admin and field staff users. This means your
costs stay predictable and tailored. You can add and remove users at any time as your
business grows. Get in touch with us to find out more.</p>
`
},
{
question: "Does meMate have lock-in contracts or onboarding fees?",
key: 19,
answer: `
<p>No, meMate has no lock-in contracts and no onboarding fees. Most businesses are up and
running within days, with direct support from the meMate team included.</p>
`
},
{
question: "Is there a free trial for meMate?",
key: 20,
answer: `
<p>Yes, you can sign up and start a free trial directly from the meMate website. You can also
book a free 30-minute demo with a customer specialist who will tailor the walkthrough to
your specific business type.</p>
`
},
{
category: "Getting Started",
question: "How long does it take to set up meMate?",
key: 21,
answer: `
<p>Most businesses are up and running within a few days. meMate is designed to be simple
and requires no technical background. There are no implementation fees, and the meMate
team provides direct onboarding support to get you set up quickly.</p>
`
},
{
question: "Is training available for new users?",
key: 22,
answer: `
<p>Yes, meMate is designed to be easy to learn, no technical background required. Onboarding
support is included and the team will walk you through the platform. A free demo is also
available before you commit, tailored to your specific business.</p>
`
},
{
question: "What customer support does meMate offer?",
key: 23,
answer: `
<p>meMate offers direct access to our small team of real humans. You can book a call with a
customer specialist, or request a demo. Onboarding support is included at no extra cost.</p>
`
},
{
question: "How does meMate ensure data security?",
key: 24,
answer: `
<p>meMate is a cloud-based platform built with business data security in mind. Your data is
stored securely and accessible only to authorised users within your account. Contact the
meMate team for detailed information about data security, privacy policies, and compliance
practices.</p>
`
},
{
category: "meMate vs Competitors",
question: "How does meMate compare to ServiceM8?",
key: 25,
answer: `
<p>meMate offers more depth than ServiceM8 for growing businesses. ServiceM8 is an iOS-first
field service tool suited to sole traders running simple, repeatable jobs. meMate adds a full
desktop management interface, CRM with client history and turnover tracking, a sales
pipeline, custom quoting calculators with margin control, real-time job profitability, and
supplier management, all included within the price of your account.</p>
`
},
{
question: "How does meMate compare to Tradify?",
key: 26,
answer: `
<p>Tradify is a solid entry-level tool for small AU trades teams with straightforward, consistent
jobs. However, it lacks a full CRM, sales pipeline, margin-based quoting calculators, and
real-time profitability reporting. meMate is the better fit for businesses managing variable job
types, a growing client base, and those wanting to see live profit per job (without per-user
fees).</p>
`
},
{
question: "Is meMate a good alternative to Monday.com for Australian businesses?",
key: 27,
answer: `
<p>Yes, particularly for service businesses that need more than task management. Monday.com
doesn’t include native quoting, GST-compliant invoicing, job profitability tracking, or supplier
management. meMate covers all of these in AUD, built for Australian workflows, at a flat
per-account price.</p>
`
},
{
question: "How does meMate compare to Jobber?",
key: 28,
answer: `
<p>Jobber is a US-built home services platform focused on residential trade callouts. meMate is
purpose-built for Australian businesses, with native AUD pricing, GST invoicing, and
workflows proven across construction, repair, and B2B service industries. meMate also
includes a full CRM with client revenue tracking, a sales pipeline, and real-time
business-wide profitability, features not available in Jobber.</p>
`
},
{
question: "Can meMate replace multiple software subscriptions?",
key: 29,
answer: `
<p>Yes, meMate is designed to replace the common combination of a job management tool +
spreadsheet + Xero or MYOB + a separate CRM. Everything from your first client enquiry
through to quoting, job delivery, invoicing, and profit reporting is handled in one platform.
Businesses that switch typically eliminate two separate subscriptions./p>
`
}

];

  const toggleQuestion = (key) => {
    setSelectedQuestion(selectedQuestion === key ? null : key);
  };

  // Generate FAQ Schema dynamically
  const generateFAQSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map((ques) => ({
        "@type": "Question",
        name: ques.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: ques.answer,
        },
      })),
    };
    return JSON.stringify(schema);
  };

  // Filter questions based on search query
  const filteredQuestions = questions.filter((ques) =>
    ques.question.toLowerCase().includes(searchQuery.toLowerCase())
  );


  
  return (
    <>
      <div className={style.faquSearchFilterF}>
        <div className={style.searchFilterListF}>
        <img src={FilterIcon} alt='filter Icon' /> 
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={style.searchInput}
          />
        </div>
      </div>
      <div className={style.faqmaintitle}>
        <h1 className="h1tagsseo h1tagsseof fontWeight">Frequently Asked Questions About meMate</h1>
        <h4>
         Discover answers to the most commonly asked questions about managing your business efficiently. 
        </h4>
        </div>
      <div className="question-answer-wrapper">
        {/* Inject JSON-LD Schema into the <head> */}
        <Helmet>
          <script type="application/ld+json">{generateFAQSchema()}</script>
        </Helmet>

        <div className={`question-answer-content question-answer-content-faqs ${style.faqmainquestionhead}`}>
          <div className="question-answer-heading-wrapperF">
            <h4>We answer your questions</h4>
          </div>
          <div className="questions-wrapperFQ">
      {filteredQuestions.length > 0 ? (
    filteredQuestions.map((ques, index) => {
      const prevCategory =
        index > 0 ? filteredQuestions[index - 1].category : null;

      const showHeading =
        ques.category && ques.category !== prevCategory;

      return (
        <React.Fragment key={ques.key}>
          {showHeading && (
            <div className="faq-category-heading">
              <h2>{ques.category}</h2>
            </div>
          )}

                <div key={ques.key} className="each-ques-wrapperFQ">
                  <div
                    className={`question-answer-quesFQ ${
                      selectedQuestion === ques.key ? "selected" : ""
                    }`}
                    onClick={() => toggleQuestion(ques.key)}
                  >
                    <p className="question-answer-ques-infoFQ">
                      {ques.question}
                    </p>
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
                    className={`question-answer-ans-infoFQ ${
                      selectedQuestion === ques.key ? "expanded" : ""
                    }`}
                  >
                   {selectedQuestion === ques.key && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: ques.answer,
                      }}
                    />
                  )}
                  </div>
                </div>
               </React.Fragment>
      );
    })
  ) : (
    <p>No questions found.</p>
  )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAnswer;
