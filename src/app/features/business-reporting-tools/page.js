import ReportsPage from '../../../page-components/reports';

export const metadata = {
  title: 'Business Reporting Software | MeMate Performance Tools',
  description:
    'Get real-time insights with MeMate’s business reporting software tools. Track performance, manage finances, and grow your Aussie small & medium business today.',
  openGraph: {
    title: 'Business Reporting Software | MeMate Performance Tools',
    description:
      'Get real-time insights with MeMate’s business reporting software tools. Track performance, manage finances, and grow your Aussie small & medium business today.',
    url: 'https://memate.com.au/features/business-reporting-tools',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/business-reporting-tools',
  },
};

export default function Reports() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/business-reporting-tools#webpage',
        url: 'https://memate.com.au/features/business-reporting-tools',
        name: 'Business Reporting Software | MeMate Performance Tools',
        description:
          'Get real-time insights with MeMate’s business reporting software tools. Track performance, manage finances, and grow your Aussie small & medium business today.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/business-reporting-tools#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/business-reporting-tools#software',
        name: 'MeMate Business Reporting',
        url: 'https://memate.com.au/features/business-reporting-tools',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Business reporting and performance tools from MeMate. Track project performance, profitability and financials in real time.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/business-reporting-tools#webpage',
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
      <ReportsPage />
    </>
  );
}