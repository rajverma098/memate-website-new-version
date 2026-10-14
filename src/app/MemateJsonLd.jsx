"use client";

import { usePathname } from "next/navigation";

export default function MemateJsonLd() {
  const pathname = usePathname();

  const sitewide = [
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
      knowsAbout: [
        "Business management software",
        "Job management software",
        "Client management (CRM)",
        "Quoting and invoicing",
        "Project management",
        "Employee and contractor management",
        "Team communication",
        "Business reporting",
      ],
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
      url: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
      contentUrl:
        "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
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
    {
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": "https://memate.com.au/#software",
      name: "meMate",
      
      url: "https://memate.com.au/",
      description:
        "meMate is all-in-one, cloud-based business management software for Australian small and medium-sized service businesses. The browser-based base plan covers clients, suppliers, quotes, projects, invoicing, expenses, real-time profit, reports and team chat, with add-ons for job scheduling, shifts, timesheets, employee and contractor management, enquiries, assets and multiple locations, plus iOS and Android apps for field teams.",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Business Management Software",
      operatingSystem: "Any (web browser)",
      browserRequirements: "Requires a modern web browser and an internet connection.",
      inLanguage: "en-AU",
      countriesSupported: "AU",
      image: { "@id": "https://memate.com.au/#logo" },
      publisher: { "@id": "https://memate.com.au/#organization" },
      provider: { "@id": "https://memate.com.au/#organization" },
      mainEntityOfPage: { "@id": "https://memate.com.au/#webpage" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Small and medium-sized service businesses in Australia",
      },
      softwareHelp: {
        "@type": "CreativeWork",
        url: "https://memate.com.au/faqs",
      },
      featureList: [
        "Client Management",
        "Supplier Management",
        "Sales Pipeline",
        "Quoting",
        "Project Management",
        "Invoicing",
        "Expenses",
        "Real-time Profit and Budgeting",
        "Statistics and Reports",
        "Team Chat",
        "Job Scheduling (meMate Work add-on)",
        "Shifts and Timesheets (meMate Work add-on)",
        "Employee and Contractor Management (meMate Work add-on)",
        "Enquiries Inbox (add-on)",
        "Asset Management (add-on)",
        "Multi-Location Management (add-on)",
        "Business Calculators",
      ],
      hasPart: [
        { "@id": "https://memate.com.au/#app-ios" },
        { "@id": "https://memate.com.au/#app-android" },
      ],
      aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "37",
    bestRating: "5",
    worstRating: "1",
  },
    },
    {
      "@type": "MobileApplication",
      "@id": "https://memate.com.au/#app-ios",
      name: "meMate for iOS",
      operatingSystem: "iOS",
      applicationCategory: "BusinessApplication",
      description:
        "meMate mobile app for crews and contractors. Requires a meMate subscription with mobile app users.",
      installUrl: "https://apps.apple.com/au/app/memate/id1563935364",
      downloadUrl: "https://apps.apple.com/au/app/memate/id1563935364",
      isPartOf: { "@id": "https://memate.com.au/#software" },
      publisher: { "@id": "https://memate.com.au/#organization" },
    },
    {
      "@type": "MobileApplication",
      "@id": "https://memate.com.au/#app-android",
      name: "meMate for Android",
      operatingSystem: "Android",
      applicationCategory: "BusinessApplication",
      description:
        "meMate mobile app for crews and contractors. Requires a meMate subscription with mobile app users.",
      installUrl: "https://play.google.com/store/apps/details?id=com.memate",
      downloadUrl: "https://play.google.com/store/apps/details?id=com.memate",
      isPartOf: { "@id": "https://memate.com.au/#software" },
      publisher: { "@id": "https://memate.com.au/#organization" },
    },
  ];

  const pageMap = {
    "/": {
      url: "https://memate.com.au/",
      name: "Business Management Software for Service Businesses | meMate",
      description:
        "Manage enquiries, quotes, projects, jobs, shifts, employees and invoicing — all in one place. Built for Australian businesses. Free onboarding and setup.",
      mainEntity: { "@id": "https://memate.com.au/#software" },
    },
    "/pricing": {
      url: "https://memate.com.au/pricing",
      name: "Pricing | meMate Business Management Software",
      description:
        "Simple, transparent pricing for meMate. One base plan plus optional add-ons — no tiers, no lock-in, switch add-ons on or off any month.",
      mainEntity: { "@id": "https://memate.com.au/pricing#product" },
    },
    "/landscapers": {
  url: "https://memate.com.au/landscapers",
  name: "Landscaping & Lawn Mowing Business Software | meMate",
  description:
    "All-in-one business management software for Australian landscaping and lawn mowing businesses. Manage quotes, job scheduling, crew and invoicing in one place.",
  mainEntity: { "@id": "https://memate.com.au/landscapers#software" },
},
  };

  const pageInfo = pageMap[pathname] || {
    url: `https://memate.com.au${pathname}`,
    name: "meMate",
    description:
      "meMate is all-in-one business management software for Australian service businesses.",
    mainEntity: { "@id": "https://memate.com.au/#software" },
  };

  const webpageNode = {
    "@type": "WebPage",
    "@id": `${pageInfo.url}#webpage`,
    url: pageInfo.url,
    name: pageInfo.name,
    description: pageInfo.description,
    inLanguage: "en-AU",
    isPartOf: { "@id": "https://memate.com.au/#website" },
    about: { "@id": "https://memate.com.au/#organization" },
    mainEntity: pageInfo.mainEntity,
    publisher: { "@id": "https://memate.com.au/#organization" },
  };

  const extraNodes = [];

  if (pathname === "/") {
    extraNodes.push({
      "@type": "FAQPage",
      "@id": "https://memate.com.au/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is MeMate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MeMate is an all-in-one business management software that helps companies manage projects, teams, clients, finances, and workflows from one platform.",
          },
        },
        {
          "@type": "Question",
          name: "Is MeMate suitable for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MeMate is designed as a powerful small business management software, offering simple setup, intuitive workflows, and the ability to scale as your business grows.",
          },
        },
        {
          "@type": "Question",
          name: "What type of businesses uses MeMate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MeMate is ideal for service-based businesses, agencies, trades, consultants, and growing SMEs that need better control over operations and reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Can MeMate replace multiple tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. MeMate is built to replace spreadsheets, CRMs, project tools, invoicing software, and scheduling apps with one integrated solution.",
          },
        },
        {
          "@type": "Question",
          name: "Is MeMate cloud-based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MeMate is a secure, cloud-based company management software accessible from anywhere.",
          },
        },
      ],
    });
  }

  if (pathname === "/pricing") {
    extraNodes.push({
      "@type": "Product",
      "@id": "https://memate.com.au/pricing#product",
      name: "meMate",
      description:
        "meMate is all-in-one, cloud-based business management software for Australian small and medium-sized service businesses. One base plan plus optional add-ons for job scheduling, shifts, timesheets, employee and contractor management, enquiries, assets and multiple locations.",
      brand: { "@id": "https://memate.com.au/#organization" },
      image: { "@id": "https://memate.com.au/#logo" },
      url: "https://memate.com.au/pricing",
      mainEntityOfPage: { "@id": "https://memate.com.au/pricing#webpage" },
      offers: {
        "@type": "Offer",
        "@id": "https://memate.com.au/pricing#offer-business",
        name: "meMate Business (base plan)",
        description:
          "The base plan: clients, suppliers, quotes, projects, invoicing, expenses, real-time profit, reports and team chat. Includes 2 desktop users. No tiers, no lock-in; add-ons can be switched on or off any month.",
        price: "99.85",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "99.85",
          priceCurrency: "AUD",
          valueAddedTaxIncluded: true,
          billingDuration: "P1M",
          unitText: "per month",
        },
        url: "https://memate.com.au/pricing",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://memate.com.au/#organization" },
        addOn: [
          {
            "@type": "Offer",
            "@id": "https://memate.com.au/pricing#addon-work",
            name: "meMate Work",
            description:
              "Job scheduling, shifts, timesheets, and employee and contractor management. Includes 5 mobile app users.",
            price: "62.32",
            priceCurrency: "AUD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "62.32",
              priceCurrency: "AUD",
              valueAddedTaxIncluded: true,
              billingDuration: "P1M",
              unitText: "per month",
            },
            url: "https://memate.com.au/pricing",
            availability: "https://schema.org/InStock",
            seller: { "@id": "https://memate.com.au/#organization" },
          },
          {
            "@type": "Offer",
            "@id": "https://memate.com.au/pricing#addon-enquiries",
            name: "Enquiries",
            description:
              "Every enquiry lands in one inbox and turns into a quote in a click.",
            price: "20.63",
            priceCurrency: "AUD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "20.63",
              priceCurrency: "AUD",
              valueAddedTaxIncluded: true,
              billingDuration: "P1M",
              unitText: "per month",
            },
            url: "https://memate.com.au/pricing",
            availability: "https://schema.org/InStock",
            seller: { "@id": "https://memate.com.au/#organization" },
          },
          {
            "@type": "Offer",
            "@id": "https://memate.com.au/pricing#addon-assets",
            name: "Assets",
            description:
              "Track tools, vehicles and equipment, with service dates.",
            price: "9.85",
            priceCurrency: "AUD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "9.85",
              priceCurrency: "AUD",
              valueAddedTaxIncluded: true,
              billingDuration: "P1M",
              unitText: "per month",
            },
            url: "https://memate.com.au/pricing",
            availability: "https://schema.org/InStock",
            seller: { "@id": "https://memate.com.au/#organization" },
          },
          {
            "@type": "Offer",
            "@id": "https://memate.com.au/pricing#addon-desktop-user",
            name: "Additional desktop user",
            description: "Extra desktop (web) user for office staff.",
            price: "14.77",
            priceCurrency: "AUD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "14.77",
              priceCurrency: "AUD",
              valueAddedTaxIncluded: true,
              billingDuration: "P1M",
              unitText: "per desktop user per month",
            },
            url: "https://memate.com.au/pricing",
            availability: "https://schema.org/InStock",
            seller: { "@id": "https://memate.com.au/#organization" },
          },
          {
            "@type": "Offer",
            "@id": "https://memate.com.au/pricing#addon-mobile-user",
            name: "Additional mobile app user",
            description:
              "Extra iOS/Android app user for crews and contractors.",
            price: "3.18",
            priceCurrency: "AUD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "3.18",
              priceCurrency: "AUD",
              valueAddedTaxIncluded: true,
              billingDuration: "P1M",
              unitText: "per app user per month",
            },
            url: "https://memate.com.au/pricing",
            availability: "https://schema.org/InStock",
            seller: { "@id": "https://memate.com.au/#organization" },
          },
          {
            "@type": "Offer",
            "@id": "https://memate.com.au/pricing#addon-location",
            name: "Additional location",
            description: "Run every branch from one account.",
            price: "45.85",
            priceCurrency: "AUD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "45.85",
              priceCurrency: "AUD",
              valueAddedTaxIncluded: true,
              billingDuration: "P1M",
              unitText: "per location per month",
            },
            url: "https://memate.com.au/pricing",
            availability: "https://schema.org/InStock",
            seller: { "@id": "https://memate.com.au/#organization" },
          },
        ],
      },
    });
  }

  if (pathname === "/landscapers") {
  extraNodes.push(
    {
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": "https://memate.com.au/landscapers#software",
      name: "meMate for Landscaping & Lawn Mowing",
      url: "https://memate.com.au/landscapers",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Business Management Software",
      operatingSystem: "Web, iOS, Android",
      description:
        "All-in-one business management software for Australian landscaping and lawn mowing businesses. Manage quotes, job scheduling, crew and invoicing in one place.",
      inLanguage: "en-AU",
      countriesSupported: "AU",
      image: { "@id": "https://memate.com.au/#logo" },
      publisher: { "@id": "https://memate.com.au/#organization" },
      provider: { "@id": "https://memate.com.au/#organization" },
      mainEntityOfPage: {
        "@id": "https://memate.com.au/landscapers#webpage",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Landscaping and lawn mowing businesses in Australia",
      },
      isRelatedTo: { "@id": "https://memate.com.au/#software" },
      offers: {
        "@type": "Offer",
        "@id": "https://memate.com.au/landscapers#offer-trial",
        name: "14-day free trial",
        description: "14-day free trial of meMate. No credit card required.",
        price: "0",
        priceCurrency: "AUD",
        url: "https://memate.com.au/pricing",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://memate.com.au/#organization" },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://memate.com.au/landscapers#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "I'm flat out on jobs all day — when am I supposed to learn new software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Setup takes under an hour. Most MeMate users are running their first job through it on day one — no training course required.",
          },
        },
        {
          "@type": "Question",
          name: "I've got a mix of one-off jobs and weekly regulars — can it handle both?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Set up recurring rounds once and MeMate auto-creates every job. One-offs are just as easy — quote, schedule, done.",
          },
        },
        {
          "@type": "Question",
          name: "My guys aren't great with tech. Will they actually use it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The crew app is dead simple — they see their jobs for the day, update progress and that's it. No manuals, no confusion.",
          },
        },
        {
          "@type": "Question",
          name: "Does it talk to Xero or MYOB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Invoices and payments flow straight to your accounting software. No double entry, no chasing your bookkeeper.",
          },
        },
        {
          "@type": "Question",
          name: "What if I try it and it's not for me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "14-day free trial, no credit card needed. And there's a real Australian you can call if you need help — not a chatbot.",
          },
        },
      ],
    }
  );
}
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [...sitewide, webpageNode, ...extraNodes],
  };

  return (
    <script
      id="ld-memate"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}