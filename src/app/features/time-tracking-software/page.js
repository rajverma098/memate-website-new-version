import TimeSheetPage from '../../../page-components/time-sheet';

export const metadata = {
  title: 'MeMate Time Tracking App | Employee & Project Software',
  description:
    'Boost productivity with MeMate—your all-in-one time tracking software & employee time tracking app. Try our project time tracking app today! Visit us now!',
  openGraph: {
    title: 'MeMate Time Tracking App | Employee & Project Software',
    description:
      'Boost productivity with MeMate—your all-in-one time tracking software & employee time tracking app. Try our project time tracking app today! Visit us now!',
    url: 'https://memate.com.au/features/time-tracking-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/time-tracking-software',
  },
};

export default function TimeSheet() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/time-tracking-software#webpage',
        url: 'https://memate.com.au/features/time-tracking-software',
        name: 'MeMate Time Tracking App | Employee & Project Software',
        description:
          'Boost productivity with MeMate—your all-in-one time tracking software & employee time tracking app. Try our project time tracking app today! Visit us now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/time-tracking-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/time-tracking-software#software',
        name: 'MeMate Time Tracking',
        url: 'https://memate.com.au/features/time-tracking-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Time tracking software from MeMate. Track employee and project time in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/time-tracking-software#webpage',
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
      <TimeSheetPage />
    </>
  );
}