import ClientPage from '../../../page-components/client-management';

export const metadata = {
  title: 'Client Management Software for Better Workflows | meMate',
  description:
    'Manage client information, jobs and workflows with meMate client management software. Organise client relationships and customer data in one place. Try it now.',
  openGraph: {
    title: 'Client Management Software for Better Workflows | meMate',
    description:
      'Manage client information, jobs and workflows with meMate client management software. Organise client relationships and customer data in one place. Try it now.',
    url: 'https://memate.com.au/features/client-management-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/client-management-software',
  },
};

export default function Client() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/client-management-software#webpage',
        url: 'https://memate.com.au/features/client-management-software',
        name: 'Client Management Software for Better Workflows | meMate',
        description:
          'Manage client information, jobs and workflows with meMate client management software. Organise client relationships and customer data in one place. Try it now.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/client-management-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/client-management-software#software',
        name: 'MeMate Client Management',
        url: 'https://memate.com.au/features/client-management-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Client management software from MeMate. Manage client information, jobs and workflows in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/client-management-software#webpage',
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
      <ClientPage />
    </>
  );
}