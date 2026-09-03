// import { useState, useEffect } from 'react';  
import "./style.css";
import React, { useState, useEffect, useRef } from "react";
// import { Helmet } from "react-helmet-async";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
// import StickyBox from "react-sticky-box";
// import MiddleSection from "./privacy-middle-section";
// import style from './privacy-module.module.scss';
import NewsSchema from "../blog/news-schema";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";
// import '../App.css'

const PrivacyComponent = () => {
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
      "name": "Privacy",
      "item": "https://memate.com.au/privacy"
    },
  ]
} ;

const article =  {
  type: "privacy",
  headline: "Privacy Policy | meMate Business Management Software",
  author: "admin",
  publisherName: "Terms of use",
  publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
  keywords: "Privacy Policy | meMate Business Management Software",

} 


  return (
    <>
 {article && breadcrumbList && <NewsSchema article={article} breadcrumbList={breadcrumbList} />}
         <div className="conditionWrrapperF">
                     <div className="pageBreadcrumbs">
                          <ul>
                            <li><Link href="/">Home</Link></li>/<li> <Link className="MainPageLink" href="/privacy">Privacy</Link></li>
                          </ul>
                          <Link href="/" className="backButStories"><img src={arrowIconBack} alt="Arrow"/> Back</Link>
                        </div>
                <div className="tmsheadF">
                 <p className="tos-section-headingF" id="section1">
                   meMate
                 </p>
                <h1 className="blackH1Tag">Privacy Policy</h1>
             </div>
             </div>
      {/* <MiddleSection /> */}
         <main className="mx-auto max-w-4xl px-4 py-10 text-sm leading-relaxed newPrivacyPlicy text-slate-800">
      <h2 className="mb-6 text-3xl font-semibold">Data protection</h2>

      <p className="mb-4">
        The protection of your personal data is a top priority for us. Our Data
        Protection Terms (Website) inform you about the type, extent and purpose
        of the collection, processing and use of your personal data on our
        website.
      </p>

      <h2>Location Data Usage</h2>
      <p>Our application collects location data to support job-related functionality, including both foreground and background usage when required.</p>
      <h3>Data Collected: </h3>
      <p>The app collects precise location data (GPS), including when the app is in use and, where necessary, in the background.</p>
      <h3>Purpose:</h3>
      <p>Location data is used to verify user work locations, track job progress, and ensure accurate completion of job-related activities.</p>
      <h3>Usage:</h3>
      <p>Location tracking may continue in the background during an active job to ensure continuous and reliable tracking, even if the app is not actively in use.</p>
      <h3>Background Location:</h3>
      <p>The app collects location data in the background only while a job is active. Background location tracking is not performed when no job is in progress.</p>
      <h3>Sharing:</h3>
      <p>Location data may be shared with the employer or organization using the app solely for work verification, monitoring, and management purposes.</p>
      <h3>User Control:</h3>
      <p>Users can enable or disable location permissions at any time through their device settings. Disabling location access may impact the functionality of job-related features.</p>
      <h3>Consent:</h3>
      <p>Location data is collected only with the user’s explicit permission and is used strictly for legitimate business purposes related to job tracking and verification.</p>
<div className="google-api-policy">
  <h2>Google User Data & API Usage</h2>

  <h3>Google User Data Access</h3>
  <p>
    When users connect their Google account to meMate, we may access certain Google user
    data via Google APIs, including:
  </p>
  <ul>
    <li>Google Analytics account information</li>
    <li>Property and reporting data</li>
    <li>Read-only analytics metrics and insights</li>
  </ul>

  <h3>How We Use This Data</h3>
  <p>We use this data only to:</p>
  <ul>
    <li>Display analytics dashboards inside meMate</li>
    <li>Provide insights and reports to users</li>
    <li>Improve user experience</li>
  </ul>
  <p>
    We do not use Google user data for advertising or sell it to third parties.
  </p>

  <h3>Data Sharing</h3>
  <p>
    We do not sell, trade, or share Google user data with third parties.
  </p>
  <p>Data is only processed:</p>
  <ul>
    <li>Within our application</li>
    <li>Through secure infrastructure providers (hosting, cloud services)</li>
  </ul>

  <h3>Data Storage & Security</h3>
  <p>We store Google user data securely using:</p>
  <ul>
    <li>Encrypted storage</li>
    <li>HTTPS communication</li>
    <li>Access control mechanisms</li>
  </ul>

  <h3>Data Retention & Deletion</h3>
  <p>
    We retain data only as long as necessary.
  </p>
  <p>Users can delete their data by:</p>
  <ul>
    <li>Disconnecting their Google account</li>
    <li>
      Contacting us at:
      <a href="mailto:support@memate.com.au">support@memate.com.au</a>
    </li>
  </ul>
  <p>
    All associated Google data will be permanently removed upon request.
  </p>

  <h3>Google API Compliance</h3>
  <p>
    meMate’s use and transfer of information received from Google APIs will adhere to the
    Google API Services User Data Policy, including Limited Use requirements.
  </p>
</div>
      {/* Usage data */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Usage data</h2>
        <p className="mb-2">
          When you visit one of our web pages, our web server will temporarily
          analyze so-called usage data contained in a log file for statistical
          purposes and to improve the quality of our web pages. The logged data
          consists of:
        </p>
        <ul className="mb-2 list-disc pl-6 space-y-1">
          <li>the name and address of the requested contents</li>
          <li>the date and time of the access</li>
          <li>the data volume transferred</li>
          <li>the access status (content transmitted, content not found)</li>
          <li>the description of your web browser and operating system</li>
          <li>
            the referral link, which specifies the page from which you came to
            our website
          </li>
          <li>the IP address of the accessing computer</li>
        </ul>
      </section>

      {/* IP storage */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">
          Storage of your IP address for security purposes
        </h2>
        <p>
          We also store the complete IP address transmitted by your browser for
          the duration of one year for the limited purpose of identifying,
          mitigating and rectifying attacks on our web pages. Your IP address
          will be deleted or anonymized after the one-year period has expired.
          The legal basis is Australian Privacy Principles.
        </p>
      </section>

      {/* Data security */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Data security</h2>
        <p>
          We have implemented technical and organizational measures to protect
          your data as good as possible against unauthorized access. Our
          websites use encryption technologies. Your data will be encrypted
          using TLS encryption technology before it is transmitted from your
          computer to our server and vice versa. You can verify the encryption
          by looking for the closed padlock symbol in your browser’s status bar
          and an address that begins with &quot;https://&quot;.
        </p>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Cookies</h2>
        <p className="mb-2">
          Our web pages use cookies. Cookies are small text files that are
          stored on your computer and contain readable data. A distinction is
          made between session cookies, which are deleted as soon as you close
          your browser, and permanent cookies that are stored for longer than a
          single session.
        </p>
        <p className="mb-2">
          Cookies that are strictly necessary for the operation of our website
          may contain information on certain settings. They may also be
          necessary for user navigation, security and layout purposes. We use
          these cookies on the legal basis of Section 25 (2 no. 2) TTDSG.
        </p>
        <p>
          You can adjust the settings of your browser so that you are alerted
          each time a cookie is placed on your computer. This assures a
          transparent use of cookies. You can also use your browser settings to
          delete cookies and prevent the placement of new cookies. Please note
          that this may result in difficulties displaying our website and some
          functions may no longer be available for technical reasons.
        </p>
      </section>

      {/* Analysis tracking */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">
          Third-party tracking technologies for analysis purposes
        </h2>
        <p className="mb-2">
          We use web analysis tools in order to provide a website layout that
          caters to the requirements of our users. The web analysis tools used
          on our website allow for the generation of usage profiles that are
          compiled on the basis of pseudonyms. This is done by storing permanent
          cookies on your user device and reading their contents, which allows
          us to recognize and count return visitors.
        </p>
        <p className="mb-2">
          If you have used our banner to declare your consent, the data
          processing is based on your declaration of consent (Section 25 (1)
          TTDSG, Article 6 (1 lit. a) GDPR), Australian Privacy Principles. You
          may revoke your declaration of consent at any time. To revoke your
          consent, simply click on the link &quot;cookie settings&quot; in the
          footer of our web page, amend your consent in the new window showing
          the Cookie Statement, and save your new settings by clicking on the
          relevant button.
        </p>
        <p className="mb-2">
          The third-party providers we work with for analysis purposes are
          specified below. The respective providers make these web analysis
          tools available to us in the capacity of contract data processors
          pursuant to Australian Privacy Principles.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr>
                <th className="border-b px-3 py-2 font-semibold">Provider</th>
                <th className="border-b px-3 py-2 font-semibold">
                  Service/function
                </th>
                <th className="border-b px-3 py-2 font-semibold">
                  Adequate data protection level
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b px-3 py-2 align-top">
                  Google LLC (USA)
                  <br />
                  Google Ireland Limited (Ireland)
                </td>
                <td className="border-b px-3 py-2 align-top">
                  Google Analytics
                </td>
                <td className="border-b px-3 py-2 align-top">
                  Standard data protection clauses pursuant to Australian
                  Privacy Principles. The data transmission is also based on
                  Australian Privacy Principles.
                </td>
              </tr>
              <tr>
                <td className="border-b px-3 py-2 align-top">
                  Google LLC (USA)
                  <br />
                  Google Ireland Limited (Ireland)
                </td>
                <td className="border-b px-3 py-2 align-top">
                  Google Optimize (functions for A/B and website testing)
                </td>
                <td className="border-b px-3 py-2 align-top">
                  Standard data protection clauses pursuant to Australian
                  Privacy Principles. The data transmission is also based on
                  Australian Privacy Principles.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top">
                  Microsoft Corporation (USA)
                  <br />
                  Microsoft Ireland Operations Limited (Ireland)
                </td>
                <td className="px-3 py-2 align-top">Clarity</td>
                <td className="px-3 py-2 align-top">
                  Standard data protection clauses pursuant to Australian
                  Privacy Principles. The data transmission is also based on
                  Australian Privacy Principles.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Advertising tracking */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">
          Third-party tracking technologies for advertising purposes
        </h2>
        <p className="mb-2">
          We use cross-device tracking technologies in order to serve you with
          targeted advertising on other Internet pages and to determine the
          effectiveness of our own advertising measures.
        </p>
        <p className="mb-2">
          If you have used our banner to declare consent, the data processing is
          based on your declaration of consent. Your consent is voluntary and
          you may revoke your consent at any time.
        </p>
        <p className="mb-2">
          The third-party providers we work with for advertising purposes are
          specified below. Insofar this entails the processing of data outside
          the EU or EEA, please take note of the risk that public authorities
          may access the data for security and surveillance purposes without
          giving you prior notice or legal remedies. In cases where you have
          consented to us using a provider in an unsafe third country, the data
          is transmitted to such third country on the basis of Australian
          Privacy Principles.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr>
                <th className="border-b px-3 py-2 font-semibold">Provider</th>
                <th className="border-b px-3 py-2 font-semibold">
                  Service/function
                </th>
                <th className="border-b px-3 py-2 font-semibold">
                  Adequate data protection level
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b px-3 py-2 align-top">
                  Google LLC (USA)
                  <br />
                  Google Ireland Limited (Ireland)
                </td>
                <td className="border-b px-3 py-2 align-top">Google Ads</td>
                <td className="border-b px-3 py-2 align-top">
                  Standard data protection clauses pursuant to Australian
                  Privacy Principles. The data transmission is also based on
                  Australian Privacy Principles.
                </td>
              </tr>
              <tr>
                <td className="border-b px-3 py-2 align-top">
                  Microsoft Corporation (USA)
                </td>
                <td className="border-b px-3 py-2 align-top">Microsoft Ads</td>
                <td className="border-b px-3 py-2 align-top">
                  Standard data protection clauses pursuant to Australian
                  Privacy Principles. The data transmission is also based on
                  Australian Privacy Principles.
                </td>
              </tr>
              <tr>
                <td className="border-b px-3 py-2 align-top">
                  Meta Platforms, Inc (USA)
                  <br />
                  Meta Platforms Ireland Ltd (Ireland)
                </td>
                <td className="border-b px-3 py-2 align-top">Meta Pixel</td>
                <td className="border-b px-3 py-2 align-top">
                  Standard data protection clauses pursuant to Australian
                  Privacy Principles. The data transmission is also based on
                  Australian Privacy Principles.
                </td>
              </tr>
              <tr>
                <td className="border-b px-3 py-2 align-top">
                  Twitter Inc. (USA)
                  <br />
                  Twitter International Company (Ireland)
                </td>
                <td className="border-b px-3 py-2 align-top">Twitter Ads</td>
                <td className="border-b px-3 py-2 align-top">
                  Standard data protection clauses pursuant to Australian
                  Privacy Principles. The data transmission is also based on
                  Australian Privacy Principles.
                </td>
              </tr>
              <tr>
                <td className="border-b px-3 py-2 align-top">
                  LinkedIn Corporation (USA)
                  <br />
                  LinkedIn Ireland Unlimited Company (Ireland)
                </td>
                <td className="border-b px-3 py-2 align-top">
                  LinkedIn Insight Tag / Retargeting
                </td>
                <td className="border-b px-3 py-2 align-top">
                  Standard data protection clauses pursuant to Australian
                  Privacy Principles. The data transmission is also based on
                  Australian Privacy Principles.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact forms */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Contact Forms</h2>
        <p className="mb-2">
          You may contact us at any time by using our contact forms. Using these
          contact forms requires you to disclose your data in the fields marked
          as mandatory. We will use this data on the legal basis of Australian
          Privacy Principles for responding to your inquiry.
        </p>
        <p className="mb-2">
          The disclosure of any further details is voluntary. These details are
          provided on a voluntary basis and are not a mandatory requirement when
          contacting us. Any data disclosed to us voluntarily will be processed
          on the basis of your declaration of consent.
        </p>
        <p className="mb-2">
          The data will only be processed for the purpose of responding to your
          inquiry. We will delete your data once they are no longer needed and
          their deletion is not opposed by a statutory data retention
          obligation.
        </p>
        <p>
          You may object at any time against the processing of your data
          submitted via the contact form on the basis of Australian Privacy
          Principles. You also have the right to at any time revoke your consent
          to the processing of data provided on a voluntary basis. Please send
          your revocation notice to the email address specified in the imprint.
        </p>
      </section>

      {/* Product demonstration */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Product demonstration</h2>
        <p className="mb-2">
          Our website gives you the option of requesting an appointment for a
          presentation of our software. A request for a product demonstration
          requires you to provide us with the data in the field marked as
          mandatory (your name, email address, telephone number, company name).
          We will use this data on the legal basis of Australian Privacy
          Principles for responding to your inquiry.
        </p>
        <p className="mb-2">
          The disclosure of any further details is voluntary. These details are
          provided on a voluntary basis and are not a mandatory requirement when
          requesting a product demonstration. Any data disclosed to us
          voluntarily will be processed on the basis of your declaration of
          consent.
        </p>
        <p className="mb-2">
          The data will only be processed for the purpose of offering you a
          product demonstration. We will delete your data once they are no
          longer needed and their deletion is not opposed by a statutory data
          retention obligation.
        </p>
        <p>
          You may object at any time against the processing of your data
          submitted via the contact form on the basis of Australian Privacy
          Principles. You also have the right to at any time revoke your consent
          to the processing of data provided on a voluntary basis. Please send
          your revocation notice to the email address specified in the imprint.
        </p>
      </section>

      {/* Newsletters */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Newsletters</h2>
        <p className="mb-2">
          Our website offers you the option of subscribing to our newsletter.
          Please note that subscription to our newsletter requires you to
          disclose certain data (your email address is mandatory).
        </p>
        <p className="mb-2">
          We will only send our newsletter to you if you have expressly granted
          us your consent. When you subscribe to the newsletter, you will
          receive a confirmation email at the email address provided by you
          (double opt-in). You may revoke your declaration of consent at any
          time. You may conveniently submit your revocation notice by using the
          unsubscribe link contained in each copy of our newsletter.
        </p>
        <p className="mb-2">
          In addition to the data specified above, the subscription to our
          newsletter will result in the processing of further data that may be
          necessary for us to verify your newsletter subscription. This may
          include storage of your complete IP address at the time of newsletter
          subscription or confirmation as well as a copy of our confirmation
          email. The data is in this case processed on the basis of Australian
          Privacy Principles in our interest to establish the lawfulness of our
          newsletter dispatch.
        </p>
        <p className="mb-2">
          When you subscribe to our newsletter, we also ask you to consent to
          newsletter tracking in subsequent newsletter emails. Provided you have
          granted your consent, our future newsletters will include individual
          tracking pixels that allow us to determine when you have downloaded
          and/or opened the newsletter message and to individualize the links
          contained in the newsletter for the purpose of analyzing if and when
          you have clicked on a link. You may revoke your consent by using the
          unsubscribe link contained in our newsletter email.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Storage duration</h2>
        <p>
          In cases where the specific duration of storage has not been stated
          above, we will delete personal data once they are no longer needed and
          their deletion is not opposed to a statutory retention obligation.
        </p>
      </section>
   
  
    </main>
      <div>

      </div>
        <style jsx>{`
        
            .newPrivacyPlicy {
      color: #222;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 20px 40px;
    font-size: 14px;
    line-height: 1.7;
}
  .newPrivacyPlicy h2{
  color: #29292b;
    font-size: 32px;
    font-style: normal;
    font-weight: 420;
    line-height: 40px;
    text-decoration: none;
    font-family: sequel_sans_semi_bold_disp !important;
        margin: 15px 0 5px;
  }
.newPrivacyPlicy p {
    font-size: 16px;
    line-height: 150%;
    color: #3F3F3F;
    font-weight: 400;
        font-family: sequel_sans_roman_head !important;
}
.newPrivacyPlicy ul li {
    padding: 3px 0;
    text-transform: capitalize;
    font-family: sequel_sans_roman_head !important;
}

.newPrivacyPlicy ul {
    display: inline-block;
    margin: 10px 17px;
}
    .newPrivacyPlicy table {
    margin-top: 32px;
    margin-bottom: 32px;
    width: 100%;
    border-collapse: collapse;
    border-color: #c2c9d0;
     border-top: 1px solid #c2c9d0;
     border-bottom: 1px solid #c2c9d0;
}
    .newPrivacyPlicy table thead tr th {
    text-align: left;
     padding: 20px;
     border-right: 1px solid #c2c9d0;
     font-family: sequel_sans_roman_head !important;
}
    .newPrivacyPlicy table tr td {
    border-top: 1px solid #c2c9d0;
    border-right: 1px solid #c2c9d0;
    padding: 20px;
    font-family: sequel_sans_roman_head !important;
}
     .newPrivacyPlicy table tr td:last-child,.newPrivacyPlicy table thead tr th:last-child {
    border-right: 0px solid #c2c9d0;
}
    @media screen and (max-width: 600px) {
  
         .overflow-x-auto {
             overflow-x:auto;
        }
          .newPrivacyPlicy table thead tr th{
                 border-top: 1px solid #c2c9d0;
    border-right: 1px solid #c2c9d0;
    padding: 8px 14px;
    font-family: sequel_sans_roman_head !important;
    min-width: 300px;
        }
}
      
            `}</style>
    </>
  );
};

export default PrivacyComponent;



