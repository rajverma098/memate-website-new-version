import React from "react";
import "./style.css";
import "./pv.css";
import Link from "next/link";
import SuccessStories from "../success-stories";
import { Helmet } from "react-helmet-async";
import NewsSchema from "../blog/news-schema";
import { useRef, useState } from "react";
import Webicon from "../../svg/Webicon";
import SettingIcon from "../../svg/SettingIcon";
import Profile2user from "../../svg/Profile2user";
import LocationTickIcon from "../../svg/LocationTickIcon";
import ClipPathGroup from "../../svg/ClipPathGroup";
import SalesLetterPad from "../../svg/SalesLetterPad";
import TeamIcon from "../../svg/ClientUserIcon";
import ManagementIcon from "../../svg/ManagementIcon";
import JobIcon from "../../svg/JobIcon";
import InvoicesIcon from "../../svg/InvoicesIcon";
import DashBoardIcons from "../../svg/DashBoardIcons";
import ExpenseIcon from "../../svg/ExpenseIcon";
const customersoriesProImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesPro.png";
const ProVinyl01 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/ProVinyl01.jpg";
const ProVinyl02 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/ProVinyl02.jpg";
const ProVinyl03 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/ProVinyl03.jpg";
const ProVinyl04 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/ProVinyl04.jpg";
const ProVinyl05 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/ProVinyl05.jpg";
const ProVinyl06 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/ProVinyl06.jpg";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";
function ProVinyl() {
const breadcrumbList = {
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{
"@type": "ListItem",
"position": 1,
"name": "Home",
"item": "https://memate.com.au/"
},
{
"@type": "ListItem",
"position": 2,
"name": "Customer Stories",
"item": "https://memate.com.au/customer-stories"
},
{
"@type": "ListItem",
"position": 3,
"name": "Pro Vinyl",
"item": "https://memate.com.au/customer-stories/case-study-provinyl-car-wrapping-business-software"
},
]
} ;
const article =  {
type: "case-study-provinyl-car-wrapping-business-software",
headline: "Pro Vinyl Case Study | Car Wrap Business Software Success",
author: "admin",
publisherName: "Customer Stories",
publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
keywords: "Pro Vinyl Case Study | Car Wrap Business Software Success",
} 
const videoRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
const togglePlay = () => {
if (!videoRef.current) return;
if (videoRef.current.paused) {
videoRef.current.play();
setIsPlaying(true);
} else {
videoRef.current.pause();
setIsPlaying(false);
}
};
return (
<>
{article && breadcrumbList && 
<NewsSchema article={article} breadcrumbList={breadcrumbList} />
}
<div className="parent-blog-page customerstoriespage">
   <div className="parent-blog">
      <div className="pageBreadcrumbs">
         <ul>
            <li>
               <Link href="/">
               Home</Link>
            </li>
            /
            <li>
               <Link className="MainPageLink" href="/customer-stories">
               Customer Stories</Link>
            </li>
            /
            <li>
               <Link href="/customer-stories/case-study-provinyl-car-wrapping-business-software">
               PRO vinyl</Link>
            </li>
         </ul>
         <Link href="/customer-stories" className="backButStories">
         <img src={arrowIconBack} alt="Arrow" /> Back</Link>
      </div>
      <div className="proVinylHeader">
         <div className="subHeading">
            ProVinyl
         </div>
         <h1>How ProVinyl Uses MeMate to Run a Smarter Car Wrapping Workflow</h1>
         <div className="videoGrayBackground">
            <div className="innerGrid imageOverlyText videoPlayWrap bgshadowwrapper">
               <div className="video-wrapper video-wrapperCamera" onClick={togglePlay}>
                  <video
                  width="100%"
                  height="100%"
                  // autoPlay
                  // muted
                  loop
                  poster="https://memate-website.s3.ap-southeast-2.amazonaws.com/pro-vinyl-single-poster.png"
                  ref={videoRef}
                  playsInline
                  >
                  <source
                     src="https://memate-website.s3.ap-southeast-2.amazonaws.com/PROVINYL-main-video.mp4"
                     type="video/mp4"
                     />
                  Your browser does not support the video tag.
                  </video>
                  {!isPlaying && 
                  <div className="play-icon"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/Play.png" alt="Play Icon" /></div>
                  }
               </div>
            </div>
            <div className="weblinkList">
               <ul>
                  <li>
                     <a href="https://provinyl.com.au/" target="_blank" rel="noopener noreferrer">
                        <Webicon />
                        provinyl.com.au
                     </a>
                  </li>
                  <li>
                     <SettingIcon />
                     Wrapping company
                  </li>
                  <li>
                     <Profile2user />
                     8 employees
                  </li>
                  <li>
                     <LocationTickIcon />
                     Sydney
                  </li>
               </ul>
            </div>
            <div className="flexboxitems">
               <div className="flexitem">
                  <h2>How ProVinyl Built a More Controlled Car Wrapping Workflow with MeMate</h2>
               </div>
               <div className="flexitem">
                  <p>ProVinyl, an Australian car wrapping company, uses MeMate to manage the full workflow from first enquiry to final payment. Instead of handling leads, quoting, scheduling, supplier costs, subcontractors, and invoicing across separate systems, the team runs the process in one place.
                  </p>
                  <p>The result is a simpler workflow, more consistent quoting, stronger control over project profitability, and fewer mistakes as jobs move from enquiry to installation.</p>
               </div>
            </div>
         </div>
         <div className="flexContentWrapper">
            <div className="flexboxitems">
               <div className="flexitem">
                  <h3>All enquiries land in one place</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color1">
                        <div>
                           <ClipPathGroup />
                           <p>Enquiries</p>
                        </div>
                     </div>
                     <div className="iconsItem color2">
                        <div>
                           <SalesLetterPad />
                           <p>Sales</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flexitem">
                  <p>Every new enquiry from the website and Facebook flows into the <b>Enquiries</b> section in MeMate.</p>
                  <p>From there, the manager reviews the request, asks any follow-up questions, and sends a pre-set email with general information about materials, process, and warranty. This helps qualify the lead properly before any pricing is prepared.</p>
                  <p>Once enough information is collected, the enquiry is moved into the <b>Sales</b> stage.</p>
               </div>
            </div>
            <div className="innerGrid innerGridwrapper imageToImage">
               <div><img
                  className="img-container-stories"
                  src={ProVinyl01}
                  alt="Blog featured image"
                  /></div>
               <div className="pvOverly">
                  <img
                     className="img-container-stories"
                     src="https://memate-website.s3.ap-southeast-2.amazonaws.com/pv01.png"
                     alt="Blog featured image"
                     />
               </div>
            </div>
            <div className="flexboxitems">
               <div className="flexitem">
                  <h3>Quotes are built using preset calculators</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color2">
                        <div>
                           <SalesLetterPad />
                           <p>Sales</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flexitem">
                  <p>In the Sales stage, the manager creates the quote using preset calculators.</p>
                  <p>ProVinyl uses different calculation setups depending on the size and complexity of the vehicle, as well as the material being used. This allows the team to keep pricing consistent across jobs, avoid underquoting or overquoting, and adjust prices quickly when supplier material costs change.</p>
                  <p>Once the quote is ready, it can be sent to the client in one click. The quote includes pricing, terms and conditions, and relevant process information.</p>
               </div>
            </div>
            <div className="innerGrid imageToImage">
               <div><img
                  className="img-container-stories"
                  src={ProVinyl02}
                  alt="Blog featured image"
                  /></div>
               <div className="pvOverly">
                  <img
                     className="img-container-stories"
                     src="https://memate-website.s3.ap-southeast-2.amazonaws.com/pv02.png"
                     alt="Blog featured image"
                     />
               </div>
            </div>
            <div className="flexboxitems">
               <div className="flexitem">
                  <h3>The client can approve, decline, or request changes</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color2">
                        <div>
                           <TeamIcon />
                           <p>Clients</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flexitem">
                  <p>The client receives the quote by email and can approve it, decline it, or request changes.</p>
                  <p>This stage gives the customer clarity before the work begins and gives the manager a clean approval point before the job moves forward.</p>
                  <p>According to ProVinyl, introducing quote approval before invoicing reduced invoice payment issues by around 95%, because clients already understand and accept the scope and pricing before the invoice is raised.</p>
               </div>
            </div>
            <div className="innerGrid imageToImage">
               <div><img
                  className="img-container-stories"
                  src={ProVinyl03}
                  alt="Blog featured image"
                  /></div>
               <div className="pvOverly">
                  <img
                     className="img-container-stories"
                     src="https://memate-website.s3.ap-southeast-2.amazonaws.com/pv03.png"
                     alt="Blog featured image"
                     />
               </div>
            </div>
            <div className="flexboxitems">
               <div className="flexitem">
                  <h3>Approved quotes become projects instantly</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color3">
                        <div>
                           <ManagementIcon />
                           <p>Management</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flexitem">
                  <p>Once the quote is accepted, MeMate sends a notification and the job moves into <b>Project Management</b>.</p>
                  <p>The vehicle is then scheduled for a specific date, and that booking can also be sent to the client’s Google Calendar. This helps reduce no-shows and makes the process feel more organised and professional for the customer.</p>
                  <p>At the same time, the manager creates internal tasks for the team, including:</p>
                  <ul>
                     <li>ordering materials</li>
                     <li>preparing the vehicle booking</li>
                     <li>issuing the invoice based on the approved quote</li>
                  </ul>
               </div>
            </div>
            <div className="innerGrid imageToImage">
               <div><img
                  className="img-container-stories"
                  src={ProVinyl04}
                  alt="Blog featured image"
                  /></div>
               <div className="pvOverly">
                  <img
                     className="img-container-stories"
                     src="https://memate-website.s3.ap-southeast-2.amazonaws.com/pv04.png"
                     alt="Blog featured image"
                     />
               </div>
            </div>
            <div className="flexboxitems">
               <div className="flexitem">
                  <h3>Contractors are scheduled with clear budgets and pay</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color4">
                        <div>
                           <JobIcon />
                           <p>Jobs</p>
                        </div>
                     </div>
                     <div className="iconsItem color5">
                        <div>
                           <InvoicesIcon />
                           <p>Invoices</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flexitem">
                  <p>For each project, the manager creates a job for the subcontractor with a fixed remuneration amount based on the quoted budget.</p>
                  <p>This gives contractors a clear view of their upcoming work, timing, and payment, while also helping management keep labour aligned with project profitability.</p>
                  <p>Instead of vague instructions or disconnected messages, each contractor receives their job through the system with the project linked to it.</p>
               </div>
            </div>
            <div className="flexboxitems">
               <div className="flexitem">
                  <h3>Photos, notes, and project history are stored in one place</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color6">
                        <div>
                           <DashBoardIcons />
                           <p>Dashboard</p>
                        </div>
                     </div>
                     <div className="iconsItem color5">
                        <div>
                           <InvoicesIcon />
                           <p>Invoices</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flexitem">
                  <p>When the vehicle arrives, the team takes photos and uploads them to the project. If there are any imperfections or pre-existing issues, those are documented immediately.</p>
                  <p>During installation, additional notes and photos can be added as needed.</p>
                  <p>This creates a reliable project history, reduces unnecessary disputes, and makes it much easier to track what happened during the job from start to finish.</p>
               </div>
            </div>
            <div className="innerGrid imageToImage">
               <div><img
                  className="img-container-stories"
                  src={ProVinyl05}
                  alt="Blog featured image"
                  /></div>
               <div className="pvOverly">
                  <img
                     className="img-container-stories"
                     src="https://memate-website.s3.ap-southeast-2.amazonaws.com/pv05.png"
                     alt="Blog featured image"
                     />
               </div>
            </div>
            <div className="flexboxitems">
               <div className="flexitem">
                  <h3>Expenses are added live so profitability stays visible</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color5">
                        <div>
                           <InvoicesIcon />
                           <p>Invoices</p>
                        </div>
                     </div>
                     <div className="iconsItem color6">
                        <div>
                           <DashBoardIcons />
                           <p>Dashboard</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flexitem">
                  <p>When materials arrive, the manager creates the expense directly inside the project card.</p>
                  <p>That expense is linked to the project immediately, which means the team can see job profitability in real time instead of waiting until the end of the month to understand whether the work was actually profitable.</p>
                  <p>The same applies to supplier costs and subcontractor-related expenses. Everything is attached to the project, which keeps cost tracking simple and accurate.</p>
               </div>
            </div>
            <div className="innerGrid imageToImage">
               <div><img
                  className="img-container-stories"
                  src={ProVinyl06}
                  alt="Blog featured image"
                  /></div>
               <div className="pvOverly">
                  <img
                     className="img-container-stories"
                     src="https://memate-website.s3.ap-southeast-2.amazonaws.com/pv06.png"
                     alt="Blog featured image"
                     />
               </div>
            </div>
            <div className="flexboxitems">
               <div className="flexitem">
                  <h3>Completion, collection, and payment are managed properly</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color5">
                        <div>
                           <InvoicesIcon />
                           <p>Invoices</p>
                        </div>
                     </div>
                     <div className="iconsItem color4">
                        <div>
                           <JobIcon />
                           <p>Jobs</p>
                        </div>
                     </div>
                     <div className="iconsItem color7">
                        <div>
                           <ExpenseIcon />
                           <p>Expense</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flexitem">
                  <p>Once the vehicle is complete, the client receives a pre-set email letting them know the car is ready for collection.</p>
                  <p>The final invoice is sent through the system and can be paid online. ProVinyl reports that over 85% of invoices are paid properly and on time, helped by:</p>
                  <ul>
                     <li>clear quote approval before work begins</li>
                     <li>regular customer updates during the job</li>
                     <li>photos and visibility throughout the process</li>
                     <li>a more professional handover process</li>
                  </ul>
                  <p>Customers can also be added into follow-up sequences for future quarterly upkeep or detailing reminders.</p>
                  <p>The manager handles the operational side:</p>
                  <ul>
                     <li>raises invoices</li>
                     <li>adds project expenses</li>
                     <li>records supplier and contractor costs</li>
                  </ul>
                  <p>The bookkeeper then reviews and processes these items on a weekly basis.</p>
                  <p>Approved expenses and invoices are pushed into Xero for BAS and annual tax work, making reconciliation faster and reducing mistakes. Because payments are matched against already-recorded bills and invoices, the accounts system stays cleaner and more reliable.</p>
                  <p>This creates a practical double-check process: operations input the data, and accounts review and reconcile it. The result is fewer missed invoices, fewer overpayments or underpayments, and much stronger financial control.</p>
                  <p>When the project is complete, the manager approves the submitted contractor job, sends a Google review reminder to the customer, and archives the project.</p>
                  <p>The workflow is simple, but it gives the team full visibility from first enquiry to final payment.</p>
               </div>
            </div>
            <div className="pvOutCome">
               <h2 className="proVynclText">The outcome</h2>
            </div>
            <div className="flexboxitems pvOutComeFlex">
               <div className="flexitem LeftItem">
                  <h2>A Powerful Tool for Business Growth</h2>
                  <p>Looking for better <b>car wrapping business software</b> or a simpler way to run a <b>car detailing business</b>? This ProVinyl case study shows how one Australian vehicle wrapping company uses MeMate to manage enquiries, quotes, scheduling, contractor jobs, expenses, invoicing, and customer communication in one connected workflow.</p>
                  <a href="https://app.memate.com.au/requestdemo?_gl=1*1ck2m8k*_gcl_au*MTIyNDE2ODAwNS4xNzczMTM4NDM5" target="_blank" rel="noopener noreferrer">See how it can work for your business</a>
               </div>
               <div className="flexitem">
                  <p>For ProVinyl, MeMate provides a straightforward operating system for running more than <b>50 vehicles per month</b> with one manager while reducing mistakes along the way.
                  </p>
                  <p>What matters most is not complexity — it is control.</p>
                  <p>By keeping enquiries, quoting, scheduling, contractor coordination, expenses, invoicing, and bookkeeping connected in one workflow, the business can move faster, price more consistently, and protect profit on every job.</p>
               </div>
            </div>
         </div>
      </div>
      <div className="ccStories">
         <SuccessStories />
      </div>
   </div>
</div>
</>
);
}
export default ProVinyl;