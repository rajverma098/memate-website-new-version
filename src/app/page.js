import AppWrapper from '../components/AppWrapper';
import LandingPage from '../page-components/landing-page';

export const metadata = {
  title: 'Business Management Software for Service Businesses | meMate',
  description:
    'Manage enquiries, quotes, projects, jobs, shifts, employees and invoicing — all in one place. Built for Australian businesses. Free onboarding and setup.',
  openGraph: {
    title: 'Business Management Software for Service Businesses | meMate',
    description:
      'Manage enquiries, quotes, projects, jobs, shifts, employees and invoicing — all in one place. Built for Australian businesses. Free onboarding and setup.',
    url: 'https://memate.com.au/',
  },
  alternates: {
    canonical: 'https://memate.com.au/',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id': 'https://memate.com.au/#software',
        name: 'meMate',
        url: 'https://memate.com.au/',
        description:
          'meMate is all-in-one, cloud-based business management software for Australian small and medium-sized service businesses. The browser-based base plan covers clients, suppliers, quotes, projects, invoicing, expenses, real-time profit, reports and team chat, with add-ons for job scheduling, shifts, timesheets, employee and contractor management, enquiries, assets and multiple locations, plus iOS and Android apps for field teams.',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Any (web browser)',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: { '@id': 'https://memate.com.au/#webpage' },
        audience: {
          '@type': 'BusinessAudience',
          audienceType:
            'Small and medium-sized service businesses in Australia',
        },
        featureList: [
          'Client Management',
          'Supplier Management',
          'Sales Pipeline',
          'Quoting',
          'Project Management',
          'Invoicing',
          'Expenses',
          'Real-time Profit and Budgeting',
          'Statistics and Reports',
          'Team Chat',
          'Job Scheduling (meMate Work add-on)',
          'Shifts and Timesheets (meMate Work add-on)',
          'Employee and Contractor Management (meMate Work add-on)',
          'Enquiries Inbox (add-on)',
          'Asset Management (add-on)',
          'Multi-Location Management (add-on)',
          'Business Calculators',
        ],
        hasPart: [
          { '@id': 'https://memate.com.au/#app-ios' },
          { '@id': 'https://memate.com.au/#app-android' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/#webpage',
        url: 'https://memate.com.au/',
        name: 'Business Management Software for Service Businesses | meMate',
        description:
          'Manage enquiries, quotes, projects, jobs, shifts, employees and invoicing — all in one place. Built for Australian businesses. Free onboarding and setup.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: { '@id': 'https://memate.com.au/#software' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://memate.com.au/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is MeMate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'MeMate is an all-in-one business management software that helps companies manage projects, teams, clients, finances, and workflows from one platform.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is MeMate suitable for small businesses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. MeMate is designed as a powerful small business management software, offering simple setup, intuitive workflows, and the ability to scale as your business grows.',
            },
          },
          {
            '@type': 'Question',
            name: 'What type of businesses uses MeMate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'MeMate is ideal for service-based businesses, agencies, trades, consultants, and growing SMEs that need better control over operations and reporting.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can MeMate replace multiple tools?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. MeMate is built to replace spreadsheets, CRMs, project tools, invoicing software, and scheduling apps with one integrated solution.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is MeMate cloud-based?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. MeMate is a secure, cloud-based company management software accessible from anywhere.',
            },
          },
        ],
      },
      {
        '@type': 'MobileApplication',
        '@id': 'https://memate.com.au/#app-ios',
        name: 'meMate for iOS',
        operatingSystem: 'iOS',
        applicationCategory: 'BusinessApplication',
        description:
          'meMate mobile app for crews and contractors. Requires a meMate subscription with mobile app users.',
        installUrl: 'https://apps.apple.com/au/app/memate/id1563935364',
        downloadUrl: 'https://apps.apple.com/au/app/memate/id1563935364',
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'MobileApplication',
        '@id': 'https://memate.com.au/#app-android',
        name: 'meMate for Android',
        operatingSystem: 'Android',
        applicationCategory: 'BusinessApplication',
        description:
          'meMate mobile app for crews and contractors. Requires a meMate subscription with mobile app users.',
        installUrl:
          'https://play.google.com/store/apps/details?id=com.memate',
        downloadUrl:
          'https://play.google.com/store/apps/details?id=com.memate',
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
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
      <AppWrapper>
        <LandingPage />
      </AppWrapper>
    </>
  );
}