import TimeTrackerPage from '../../../page-components/time-tracker';

export const metadata = {
  title: 'Time Tracking Software for Aussie Teams | MeMate',
  description:
    'Track time, log hours and simplify timesheets. MeMate’s time tracking software helps Aussie businesses manage jobs and staff without the paperwork.',
  openGraph: {
    title: 'Time Tracking Software for Aussie Teams | MeMate',
    description:
      'Track time, log hours and simplify timesheets. MeMate’s time tracking software helps Aussie businesses manage jobs and staff without the paperwork.',
    url: 'https://memate.com.au/features/time-tracking-tools',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/time-tracking-tools',
  },
};

export default function TimeTracker() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/features/time-tracking-tools#webpage',
        url: 'https://memate.com.au/features/time-tracking-tools',
        name: 'Time Tracking Software for Aussie Teams | MeMate',
        description:
          'Track time, log hours and simplify timesheets. MeMate’s time tracking software helps Aussie businesses manage jobs and staff without the paperwork.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/time-tracking-tools#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id': 'https://memate.com.au/features/time-tracking-tools#software',
        name: 'MeMate Time Tracking Tools',
        url: 'https://memate.com.au/features/time-tracking-tools',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Time tracking tools from MeMate. Track hours, log time against jobs and simplify timesheets.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id': 'https://memate.com.au/features/time-tracking-tools#webpage',
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
      <TimeTrackerPage />
    </>
  );
}