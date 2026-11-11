import CarDetailingSoftwarePage from '../../page-components/car-detailing-software';

export const metadata = {
  title: 'Car Detailing & Wrapping Software Australia | MeMate',
  description:
    'Quotes, job scheduling, contractor management and live profitability — all in one app. Built for Australian car detailing and wrapping businesses. Try free 14 days.',
  openGraph: {
    title: 'Car Detailing & Wrapping Software Australia | MeMate',
    description:
      'Quotes, job scheduling, contractor management and live profitability — all in one app. Built for Australian car detailing and wrapping businesses. Try free 14 days.',
    url: 'https://memate.com.au/car-detailing-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/car-detailing-software',
  },
};

export default function CarDetailingSoftware() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/car-detailing-software#webpage',
        url: 'https://memate.com.au/car-detailing-software',
        name: 'Car Detailing & Wrapping Software Australia | MeMate',
        description:
          'Quotes, job scheduling, contractor management and live profitability — all in one app. Built for Australian car detailing and wrapping businesses. Try free 14 days.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id': 'https://memate.com.au/car-detailing-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id': 'https://memate.com.au/car-detailing-software#software',
        name: 'MeMate for Car Detailing & Wrapping Businesses',
        url: 'https://memate.com.au/car-detailing-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'All-in-one business management software for Australian car detailing and vehicle wrapping businesses. Manage quotes, job scheduling, contractor management, invoicing and live profitability in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id': 'https://memate.com.au/car-detailing-software#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType:
            'Car detailing and vehicle wrapping businesses in Australia',
        },
        knowsAbout: [
          'Car detailing software',
          'Auto detailing business software',
          'Vehicle wrap software',
          'Car detailing job scheduling',
          'Contractor management',
          'Detailing quotes and invoicing',
          'Live profitability tracking',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id': 'https://memate.com.au/car-detailing-software#offer-trial',
          name: '14-day free trial',
          description: '14-day free trial of MeMate. No credit card required.',
          price: '0',
          priceCurrency: 'AUD',
          url: 'https://memate.com.au/pricing',
          availability: 'https://schema.org/InStock',
          seller: { '@id': 'https://memate.com.au/#organization' },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '120',
        },
      },

      {
        '@type': 'FAQPage',
        '@id': 'https://memate.com.au/car-detailing-software#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "I've tried car detailing software before and it just added more admin — why is MeMate different?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most auto detailing software is built for bookings, not for running a real business. MeMate handles the full picture — quotes, job scheduling, contractor management, invoicing and live financials — so your admin actually shrinks as your job volume grows.',
            },
          },
          {
            '@type': 'Question',
            name: 'I work with contractors who come and go — can the system handle that?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. MeMate lets you assign jobs to contractors the same way you assign staff. They see their schedule, update job progress and submit their work — and you get full visibility without a single phone call.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I stop underquoting wraps and details and losing money on every third job?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You set your service pricing once in MeMate. Every quote that goes out is built from those locked rates. No more quoting from memory, no more margin surprises when the job is done.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I actually see if the detailing business is making money in real time?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes. Live job costs, labour, materials and contractor expenses are tracked against revenue on every single job. You'll see your margin per job, your weekly revenue and how you're tracking against your monthly target.",
            },
          },
          {
            '@type': 'Question',
            name: "Right now one manager could pocket cash and I'd never know — how does MeMate fix that?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Every payment, invoice and job is logged in the system the moment it happens. Nothing lives in someone's head, pocket or personal phone. You get a full financial trail — so whether you're on the floor or not, nothing moves without you seeing it.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can I actually scale this business or will it fall apart the moment I take on more jobs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "That's exactly what MeMate is built for. The system that works for 5 jobs a week works just as well for 50. Add staff, add contractors, set team targets and track performance — MeMate grows with you instead of becoming the thing that holds you back.",
            },
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://memate.com.au/#organization',
        name: 'MeMate',
        description:
          'Business management software for Australian car detailing and vehicle wrapping businesses.',
        url: 'https://memate.com.au',
        areaServed: {
          '@type': 'Country',
          name: 'Australia',
        },
        knowsAbout: [
          'Car detailing software',
          'Auto detailing business software',
          'Vehicle wrap software',
          'Job scheduling',
          'Contractor management',
          'Invoicing',
          'Quoting',
          'Live profitability tracking',
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <CarDetailingSoftwarePage />
    </>
  );
}