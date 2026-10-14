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
  const sharedJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://memate.com.au/#organization",
        name: "meMate",
        alternateName: "MeMate",
        legalName: "MEMATE ENTERPRISE PTY LIMITED",
        taxID: "49 654 081 482",
        url: "https://memate.com.au/",
        description:
          "meMate is an Australian company that makes all-in-one business management software for small and medium-sized service businesses.",
        logo: { "@id": "https://memate.com.au/#logo" },
        image: { "@id": "https://memate.com.au/#logo" },
        telephone: "+61-2-8080-2100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9/89-97 Jones St",
          addressLocality: "Ultimo",
          addressRegion: "NSW",
          postalCode: "2007",
          addressCountry: "AU",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+61-2-8080-2100",
          areaServed: "AU",
          availableLanguage: "en",
        },
        areaServed: { "@type": "Country", name: "Australia" },
        sameAs: [
          "https://www.facebook.com/mematesoftware/",
          "https://www.instagram.com/memateapp/",
          "https://www.linkedin.com/company/mematesoftware/",
          "https://www.youtube.com/@MeMate-Aus",
        ],
      },
      {
        "@type": "ImageObject",
        "@id": "https://memate.com.au/#logo",
        url: "https://memate-website.s3.ap-southeast-2.amazonaws.com/memte-512x512-logo.png",
        contentUrl:
          "https://memate-website.s3.ap-southeast-2.amazonaws.com/memte-512x512-logo.png",
        caption: "meMate",
      },
      {
        "@type": "WebSite",
        "@id": "https://memate.com.au/#website",
        url: "https://memate.com.au/",
        name: "meMate",
        alternateName: "MeMate",
        inLanguage: "en-AU",
        publisher: { "@id": "https://memate.com.au/#organization" },
      },
    ],
  };

  return (
    <html lang="en-AU">
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


 <Script
          id="reddit-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(w,d){
                if(!w.rdt){
                  var p=w.rdt=function(){
                    p.sendEvent
                      ? p.sendEvent.apply(p,arguments)
                      : p.callQueue.push(arguments)
                  };
                  p.callQueue=[];
                  var t=d.createElement("script");
                  t.src="https://www.redditstatic.com/ads/pixel.js";
                  t.async=!0;
                  var s=d.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(t,s);
                }
              }(window,document);

              rdt('init', 'a2_jpx3dxhj64dw');
              rdt('track', 'PageVisit');
            `,
          }}
        />

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
           <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sharedJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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