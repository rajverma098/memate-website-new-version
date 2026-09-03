import Script from 'next/script';
import AppWrapper from '../components/AppWrapper';
import LandingPage from '../page-components/landing-page';

export const metadata = {
  title: 'All-in-One Business Management Software for SMEs | MeMate',
  description:
    'MeMate is business management software for Australian SMEs, managing CRM, project management, quoting, invoicing and workflow automation to improve efficiency.',
  openGraph: {
    title: 'All-in-One Business Management Software for SMEs | MeMate',
    description:
      'MeMate is business management software for Australian SMEs, managing CRM, project management, quoting, invoicing and workflow automation to improve efficiency.',
    url: 'https://memate.com.au/',
  },
  alternates: {
    canonical: 'https://memate.com.au/',
  },
};

export default function Home() {
  return (
    <>
     <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://memate.com.au/#organization",
              "name": "MeMate",
              "alternateName":
                "All-in-One Business Management Software for SMEs | MeMate",
              "url": "https://memate.com.au/",
              "logo":
                "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
              "sameAs": [
                "https://www.facebook.com/mematesoftware/",
                "https://www.instagram.com/memateapp/",
                "https://www.linkedin.com/company/mematesoftware/"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://memate.com.au/#localbusiness",
              "name": "MeMate",
              "url": "https://memate.com.au/",
              "image":
                "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-hero-min.webp",
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
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/mematesoftware/",
                "https://www.instagram.com/memateapp/",
                "https://www.linkedin.com/company/mematesoftware/"
              ]
            },
             {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://memate.com.au/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is MeMate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MeMate is an all-in-one business management software that helps companies manage projects, teams, clients, finances, and workflows from one platform."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is MeMate suitable for small businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. MeMate is designed as a powerful small business management software, offering simple setup, intuitive workflows, and the ability to scale as your business grows."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What type of businesses uses MeMate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MeMate is ideal for service-based businesses, agencies, trades, consultants, and growing SMEs that need better control over operations and reporting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can MeMate replace multiple tools?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. MeMate is built to replace spreadsheets, CRMs, project tools, invoicing software, and scheduling apps with one integrated solution."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is MeMate cloud-based?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. MeMate is a secure, cloud-based company management software accessible from anywhere."
                  }
                }
              ]
            }
          ])
        }}
      />
    <AppWrapper>
  
      <LandingPage />
    </AppWrapper>
    </>
  );
}