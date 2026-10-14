import SchedulingPage from '../../../page-components/scheduling';

export const metadata = {
  title: 'Job Scheduling Software | MeMate',
  description:
    'Discover the best job scheduling software for your business. Streamline your job scheduling with MeMate.',
  openGraph: {
    title: 'Job Scheduling Software | MeMate',
    description:
      'Discover the best job scheduling software for your business. Streamline your job scheduling with MeMate.',
    url: 'https://memate.com.au/features/job-scheduling-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/job-scheduling-software',
  },
};

export default function Scheduling() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/job-scheduling-software#webpage',
        url: 'https://memate.com.au/features/job-scheduling-software',
        name: 'Job Scheduling Software | MeMate',
        description:
          'Discover the best job scheduling software for your business. Streamline your job scheduling with MeMate.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/job-scheduling-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/job-scheduling-software#software',
        name: 'MeMate Job Scheduling',
        url: 'https://memate.com.au/features/job-scheduling-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Job scheduling software from MeMate. Streamline scheduling, dispatch and job tracking in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/job-scheduling-software#webpage',
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
      <SchedulingPage />
    </>
  );
}