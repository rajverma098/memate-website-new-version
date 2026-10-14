import StatisticPage from '../../../page-components/statistic';

export const metadata = {
  title: 'MeMate Business Statistics Tools | Boost Your Insights',
  description:
    'Unlock powerful business statistics tools with MeMate. Track growth, boost performance & make smarter decisions. Try MeMate today! For more details visit now.',
  openGraph: {
    title: 'MeMate Business Statistics Tools | Boost Your Insights',
    description:
      'Unlock powerful business statistics tools with MeMate. Track growth, boost performance & make smarter decisions. Try MeMate today! For more details visit now.',
    url: 'https://memate.com.au/features/business-statistics-tools',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/business-statistics-tools',
  },
};

export default function Statistic() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/business-statistics-tools#webpage',
        url: 'https://memate.com.au/features/business-statistics-tools',
        name: 'MeMate Business Statistics Tools | Boost Your Insights',
        description:
          'Unlock powerful business statistics tools with MeMate. Track growth, boost performance & make smarter decisions. Try MeMate today! For more details visit now.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/business-statistics-tools#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/business-statistics-tools#software',
        name: 'MeMate Business Statistics',
        url: 'https://memate.com.au/features/business-statistics-tools',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Business statistics and analytics tools from MeMate. Track growth, monitor performance and make data-driven decisions in real time.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/business-statistics-tools#webpage',
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
      <StatisticPage />
    </>
  );
}