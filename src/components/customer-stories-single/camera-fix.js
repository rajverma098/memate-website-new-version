import React from "react";
import "./style.css";
import "./pv.css";
import Link from "next/link";
import SuccessStories from "../success-stories";
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
const ProVinyl01 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersories01.png";
const ProVinyl02 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/imagescustomersories02.png";
const ProVinyl03 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/imagescustomersories03.png";
const ProVinyl04 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/imagescustomersories04.png";
const ProVinyl05 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/ProVinyl05.jpg";
const ProVinyl06 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/ProVinyl06.jpg";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";
function CameraFix() {
const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://memate.com.au/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Customer Stories",
        item: "https://memate.com.au/customer-stories",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Camera Fix",
        item: "https://memate.com.au/customer-stories/camera-fix",
      },
    ],
  };
 const article = {
    type: "customer-stories",
    headline: "Camera Repair Software in Action | MeMate Case Study",
    author: "admin",
    publisherName: "Customer Stories",
    publisherLogo:
      "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
    keywords: "Camera Repair Software in Action | MeMate Case Study",
  };
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
               <Link href="/customer-stories/camera-fix">
               Camera Fix</Link>
            </li>
         </ul>
         <Link href="/customer-stories" className="backButStories">
         <img src={arrowIconBack} alt="Arrow" /> Back</Link>
      </div>
      <div className="proVinylHeader camraFixSubHeading">
         <div className="subHeading">
            Camera Fix 
         </div>
         <h1>How Camera Fix Runs Their Repair Business with MeMate</h1>
         <p className="headPara">Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</p>
         <div className="videoGrayBackground">
            <div className="innerGrid imageOverlyText videoPlayWrap bgshadowwrapper">
               <div className="video-wrapper video-wrapperCamera" onClick={togglePlay}>
                  <video
                  width="100%"
                  height="100%"
                  // autoPlay
                  // muted
                  loop
                  poster="https://memate-website.s3.ap-southeast-2.amazonaws.com/camrafixVideo.jpg"
                  ref={videoRef}
                  playsInline
                  >
                  <source
                     src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/MeMate+x+Camerafix-edit1208+(1).mp4"
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
                     <a href="https://camerafix.com.au" target="_blank" rel="noopener noreferrer">
                        <Webicon />
                        camerafix.com.au
                     </a>
                  </li>
                  <li>
                     <SettingIcon />
                      Electronics Repair Shop
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
                  <h2>Business management software for Electronics Repair Shop in Australia</h2>
               </div>
               <div className="flexitem">
                  <p>With MeMate, you can effortlessly communicate with clients and effortlessly submit jobs, all from a centralised and streamlined interface. Say goodbye to scattered systems and embrace the convenience of MeMate for unparalleled business management in the electronics repair industry.</p>
               </div>
            </div>
         </div>
         <div className="flexContentWrapper">
            <div className="flexboxitems">
               <div className="flexitem">
                  <h3>Software that helps Australian repair shops operate efficiently</h3>
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
                  <p>meMate is streamlining operations for a camera repair company.</p>
                  <p>Camera Fix, a company specialising in camera repairs, has been serving its community with dedication and precision. With a small but efficient team, Camera Fix manages to handle over 100 clients each month. To maintain their high standards and continue growing their business, they needed a comprehensive tool to streamline their operations. Business Management software that has transformed the way Camera Fix operates.</p>
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
                  <h3>Transforming Day-to-Day Operations</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color2">
                        <div>
                           <SalesLetterPad />
                           <p>Sales</p>
                        </div>
                     </div>
                     <div className="iconsItem color2">
                        <div>
                            <TeamIcon />
                           <p>Clients</p>
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
                  <p>meMate has become an integral part of Camera Fix’s daily workflow. From sending and calculating quotes to tracking orders and updating clients, meMate ensures that every step of the repair process is seamless and efficient. With meMate, Camera Fix can now:</p>
                  <ul>
                    <li>Send and Calculate Quotes: Generate accurate quotes quickly, providing customers with clear and transparent pricing.</li>
                    <li>Track Orders: Monitor the status of every repair order in real time, ensuring nothing falls through the cracks.</li>
                    <li>Update Clients: Keep clients informed at every stage of the repair process, enhancing customer satisfaction.</li>
                  </ul>
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
                  <h3>Comprehensive Business Management</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color3">
                        <div>
                           <ManagementIcon />
                           <p>Management</p>
                        </div>
                     </div>
                      <div className="iconsItem color7">
                        <div>
                           <ExpenseIcon />
                           <p>Expense</p>
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
                  <p>Beyond just repairs, meMate supports Camera Fix in various other business functions. The software is used to:</p>
                <ul>
                  <li>Receive Payments: Process payments securely and efficiently, making transactions smooth for both the business and its clients.</li>
                  <li>Handle Marketing Activities: Manage marketing campaigns to attract new clients and keep existing ones engaged.</li>
                  <li>Track Expenses: Monitor and manage expenses to ensure the business remains profitable.</li>
                </ul>
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
                  <h3>Supporting a Small Team with Big Responsibilities</h3>
                  <div className="iconsWrap">
                     <div className="iconsItem color4">
                        <div>
                           <JobIcon />
                           <p>Jobs</p>
                        </div>
                     </div>
                       <div className="iconsItem color1">
                        <div>
                           <ClipPathGroup />
                           <p>Enquiries</p>
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
                  <p>Despite having a small team, Camera Fix successfully manages over 100 clients a month with the help of meMate. The software’s user-friendly interface and comprehensive features allow the team to work more efficiently, saving time and reducing errors. This efficiency not only improves the customer experience but also allows the team to focus on growing the business.</p>
                  <p>meMate has revolutionised the way Camera Fix operates. By automating and streamlining key business processes, Camera Fix has seen significant improvements in both productivity and client satisfaction. The software has enabled the team to handle more clients without compromising on service quality.</p>
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
            <div className="pvOutCome OutComeCameraFix">
               <h2 className="proVynclText">The outcome</h2>
            </div>
            <div className="flexboxitems pvOutComeFlex outcomeCameraFix">
               <div className="flexitem LeftItem">
                  <h2>A Game-Changer for Camera Fix</h2>
                  <a href="https://app.memate.com.au/requestdemo?_gl=1*1ck2m8k*_gcl_au*MTIyNDE2ODAwNS4xNzczMTM4NDM5" target="_blank" rel="noopener noreferrer">See how it can work for your business</a>
               </div>
               <div className="flexitem">
                 <p>“Switching to meMate has been a game-changer for us. We’re able to provide the next level of service to our clients, and the software has made our operations much smoother. It’s an essential tool for our business.” <b>— Alex , Owner of Camera Fix</b></p>
                 <p>With meMate, Camera Fix is well-equipped to continue delivering exceptional service while expanding its reach and growing its business.</p>
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
export default CameraFix;