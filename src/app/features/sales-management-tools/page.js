import FeaturePage from '../../../page-components/feature-page';

export const metadata = {
  title: 'Sales Management Software for Australian Business | MeMate',
  description:
    'MeMate offers sales management software for Aussie businesses—CRM sales tools, sales pipeline management, and a lead tracking system in one.',
  openGraph: {
    title: 'Sales Management Software for Australian Business | MeMate',
    description:
      'MeMate offers sales management software for Aussie businesses—CRM sales tools, sales pipeline management, and a lead tracking system in one.',
    url: 'https://memate.com.au/features/sales-management-tools',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/sales-management-tools',
  },
};

export default function Feature() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/sales-management-tools#webpage',
        url: 'https://memate.com.au/features/sales-management-tools',
        name: 'Sales Management Software for Australian Business | MeMate',
        description:
          'MeMate offers sales management software for Aussie businesses—CRM sales tools, sales pipeline management, and a lead tracking system in one.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/sales-management-tools#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/sales-management-tools#software',
        name: 'MeMate Sales Management',
        url: 'https://memate.com.au/features/sales-management-tools',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Sales management software from MeMate. CRM, sales pipeline and lead tracking in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/sales-management-tools#webpage',
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
      <FeaturePage />
    </>
  );
}