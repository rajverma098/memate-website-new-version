import "./globals.css";
import "../index.css";
import "../prime.css";
import "../global.scss";
import "../App.css";
import "aos/dist/aos.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Providers } from "../providers";
import ChatWidgetLoader from "../components/chat-widget/ChatWidgetLoader";
import Script from "next/script";
export const metadata = {
  verification: {
    google: "-21MMiNg4HsiFdG-kiteNfjPiSWjpEzqgep8REsCJus",
  },
  other: {
    "msvalidate.01": "2B695D648C28EFB5F1925AACCC8043B3",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* <link rel="apple-touch-icon" href="/favicon.png" /> */}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GTVNNDD15Z"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-GTVNNDD15Z");
          `}
        </Script>

<Script id="microsoft-clarity" strategy="afterInteractive" >
{`
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "vin6f2k3rk");
`}
</Script>

<Script
  id="ld-localbusiness"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://memate.com.au/#localbusiness",
      "name": "MeMate",
      "url": "https://memate.com.au",
      "image": "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
      "telephone": "0280802100",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9/89-97 Jones St",
        "addressLocality": "Ultimo",
        "addressRegion": "NSW",
        "postalCode": "2007", 
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.8790957,
        "longitude": 151.1966771
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }],
      "sameAs": [
        "https://www.facebook.com/mematesoftware/",
        "https://www.instagram.com/memateapp/"
      ],
      "priceRange": "$$" 
    })
  }}
/>


<Script
  id="ld-softwareapp"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://memate.com.au/#software",
      "name": "MeMate",
      "url": "https://memate.com.au/",
      "applicationSuite": "MeMate Business Management Software",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": ["ProjectManagement","CRM","ERP"],
      "operatingSystem": ["iOS","Android","macOS","Web"], 
      "softwareVersion": "2.9",
      "description": "MeMate is an all-in-one cloud business management software for Australian SMEs, combining ERP, CRM, job & project management, scheduling, invoicing, and time tracking.",
      "keywords": [
        "Business Management Software",
        "ERP software",
        "CRM software",
        "Project management software",
        "Job management software",
        "SME software Australia"
      ],
      "inLanguage": "en-AU",
      "publisher": {
        "@type": "Organization",
        "name": "MeMate",
        "url": "https://memate.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg"
        },
        "sameAs": [
          "https://apps.apple.com/app/memate/id1563935364",
          "https://play.google.com/store/apps/details?id=com.memate"
        ]
      },
      "featureList": [
        "https://memate.com.au/features",
        "https://memate.com.au/features/project-management-software",
        "https://memate.com.au/features/job-management-software",
        "https://memate.com.au/features/employee-management-tools",
        "https://memate.com.au/features/profitability-and-budgeting-software",
        "https://memate.com.au/features/business-reporting-tools"
      ],
      "softwareHelp": "https://memate.com.au/faqs",
      "downloadUrl": [
        "https://apps.apple.com/app/memate/id1563935364",
        "https://play.google.com/store/apps/details?id=com.memate"
      ],
      "installUrl": [
        "https://apps.apple.com/app/memate/id1563935364",
        "https://play.google.com/store/apps/details?id=com.memate"
      ],
      "potentialAction": {
        "@type": "InstallAction",
        "target": [
          "https://apps.apple.com/app/memate/id1563935364",
          "https://play.google.com/store/apps/details?id=com.memate"
        ]
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Small and medium businesses"
      }
    })
  }}
/>

<Script
  id="apollo-tracker"
  strategy="afterInteractive"
>
  {`
    function initApollo() {
      var n = Math.random().toString(36).substring(7),
        o = document.createElement("script");

      o.src =
        "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;

      o.async = true;
      o.defer = true;

      o.onload = function () {
        window.trackingFunctions.onLoad({
          appId: "69fffda571184c000d879c34"
        });
      };

      document.head.appendChild(o);
    }

    initApollo();
  `}
</Script>

 {/* RB2B Script */}
        {/* <Script id="reb2b-script" strategy="beforeInteractive">
          {`
            !function(key) {
              if (window.reb2b) return;
              window.reb2b = { loaded: true };

              var s = document.createElement("script");
              s.async = true;
              s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";

              document.getElementsByTagName("script")[0]
                .parentNode
                .insertBefore(s, document.getElementsByTagName("script")[0]);
            }("7N850H5EPDN1");
          `}
        </Script> */}
  <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {
            if(f.fbq)return;
            n=f.fbq=function(){
              n.callMethod ?
              n.callMethod.apply(n,arguments) : n.queue.push(arguments)
            };
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);
          }(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '2935841356747520');
          fbq('track', 'PageView');
        `}
      </Script>
        {/* <!-- ADDED 15-05-2026 --> */}
    {/* <script>!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("7N850H5EPDN1");</script> */}

        {/* Google Ads  */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17393005307" id="ga-script" strategy="afterInteractive">
        </Script>
        <Script id="ga-script" strategy="afterInteractive">
         {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17393005307');`}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PX86X4XP');
          `}
        </Script>

        {/* Jotform Embed Script */}
        {/* <Script id="jotform-script" strategy="lazyOnload">
          {`
            const jotScript = document.createElement("script");
            jotScript.src = "https://cdn.jotfor.ms/agent/embedjs/01975471ce517020b33b83343ee6c3d6fcc7/embed.js?skipWelcome=1&maximizable=1";
            document.body.appendChild(jotScript);
          `}
        </Script> */}
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PX86X4XP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Providers>
          {children}
          <ChatWidgetLoader />
        </Providers>
      </body>
    </html>
  );
}