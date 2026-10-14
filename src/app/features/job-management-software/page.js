import ScheduleJobsPage from '../../../page-components/schedule-jobs';

export const metadata = {
  title: 'Job Management Software for Smarter Workflows | meMate',
  description:
    'Manage, schedule, and track jobs with meMate job management software. Use a powerful job management app and job tracking software for your team. Try meMate now.',
  openGraph: {
    title: 'Job Management Software for Smarter Workflows | meMate',
    description:
      'Manage, schedule, and track jobs with meMate job management software. Use a powerful job management app and job tracking software for your team. Try meMate now.',
    url: 'https://memate.com.au/features/job-management-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/job-management-software',
  },
};

export default function ScheduleJobs() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/job-management-software#webpage',
        url: 'https://memate.com.au/features/job-management-software',
        name: 'Job Management Software for Smarter Workflows | meMate',
        description:
          'Manage, schedule, and track jobs with meMate job management software. Use a powerful job management app and job tracking software for your team. Try meMate now.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/job-management-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/job-management-software#software',
        name: 'MeMate Job Management',
        url: 'https://memate.com.au/features/job-management-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Job management software from MeMate. Manage, schedule and track jobs in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/job-management-software#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType:
            'Small and medium-sized service businesses in Australia',
        },
        isPartOf: { '@id': 'https://memate.com.au/#software' },
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
      <ScheduleJobsPage />
    </>
  );
}