import LandscapersPage from '../../page-components/landscaping-business-software';

export const metadata = {
  title: 'Landscaping Business Software | meMate',
  description:
    'Manage landscaping jobs, quotes, recurring schedules, crew coordination and invoicing with meMate. Simplify operations and boost profitability. Get started now.',
  openGraph: {
    title: 'Landscaping Business Software | meMate',
    description:
      'Manage landscaping jobs, quotes, recurring schedules, crew coordination and invoicing with meMate. Simplify operations and boost profitability. Get started now.',
    url: 'https://memate.com.au/landscaping-business-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/landscaping-business-software',
  },
};

export default function Landscapers() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/landscaping-business-software#webpage',
        url: 'https://memate.com.au/landscaping-business-software',
        name: 'Landscaping Business Software | meMate',
        description:
          'Manage landscaping jobs, quotes, recurring schedules, crew coordination and invoicing with meMate. Simplify operations and boost profitability. Get started now.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/landscaping-business-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id': 'https://memate.com.au/landscaping-business-software#software',
        name: 'MeMate for Landscaping & Lawn Mowing Businesses',
        url: 'https://memate.com.au/landscaping-business-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'All-in-one business management software for Australian landscaping and lawn mowing businesses. Manage quotes, job scheduling, crew and invoicing in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/landscaping-business-software#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType:
            'Landscaping and lawn mowing businesses in Australia',
        },
        knowsAbout: [
          'Landscaping software',
          'Lawn mowing business software',
          'Lawn care scheduling software',
          'Landscaping quoting and invoicing',
          'Landscaping crew management app',
          'Field service software for landscapers',
          'Gardening business software Australia',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id':
            'https://memate.com.au/landscaping-business-software#offer-trial',
          name: '14-day free trial',
          description: '14-day free trial of MeMate. No credit card required.',
          price: '0',
          priceCurrency: 'AUD',
          url: 'https://memate.com.au/pricing',
          availability: 'https://schema.org/InStock',
          seller: { '@id': 'https://memate.com.au/#organization' },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://memate.com.au/landscaping-business-software#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How can landscaping business software help manage customer enquiries and prepare quotes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Landscaping business software helps you organise customer details, manage enquiries and prepare quotes in one central system. With meMate, you can use the sales pipeline to manage quotes, follow-ups and approvals, while preset calculators help estimate service costs, margins and markups. This makes it easier to keep track of potential landscaping projects and move approved quotes into project management.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can meMate help schedule recurring and one-off landscaping jobs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'meMate helps landscaping businesses organise job schedules, team shifts and project timelines through its job scheduling and company calendar features. You can plan work, manage staff availability and coordinate jobs across your team. For businesses handling regular garden maintenance alongside one-off landscaping projects, these tools provide a central view of scheduled work and help keep daily operations organised.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can landscapers assign jobs and coordinate employees or contractors?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'meMate allows landscaping businesses to assign jobs and tasks to employees or contractors and coordinate work through a central platform. Its contractor management features support individual or group job assignments, work updates and approval processes. Employee management and timesheets also help businesses keep track of team hours and scheduled shifts, making it easier to coordinate field teams across multiple projects.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can landscaping business software manage invoices and customer payments?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, meMate helps landscaping businesses create invoices from approved quotes, manage invoice statuses and record partial or full payments. You can also send invoices to customers, support online payments and follow up on overdue amounts. Keeping quotes, invoices, and payment records connected helps reduce administrative work and gives you a clearer view of outstanding customer payments.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can landscaping software help track job costs and project profitability?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'meMate helps landscaping businesses monitor project profitability by linking budgets, expenses, timesheets and costs to individual jobs. You can establish budgets during the quotation stage and review project expenses alongside sales and invoicing information. This helps you compare costs against your planned budget, understand which landscaping projects are performing well and make more informed decisions about future pricing.',
            },
          },
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
      <LandscapersPage />
    </>
  );
}