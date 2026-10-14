import ContractorPage from '../../../page-components/contractor';

export const metadata = {
  title: 'Contractor Management Software for Aussie Business | MeMate',
  description:
    'MeMate contractor management software helps Aussie businesses to assign jobs, track progress, and manage teams with powerful contractor software tools.',
  openGraph: {
    title: 'Contractor Management Software for Aussie Business | MeMate',
    description:
      'MeMate contractor management software helps Aussie businesses to assign jobs, track progress, and manage teams with powerful contractor software tools.',
    url: 'https://memate.com.au/features/contractor-management-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/contractor-management-software',
  },
};

export default function Contractor() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/contractor-management-software#webpage',
        url: 'https://memate.com.au/features/contractor-management-software',
        name: 'Contractor Management Software for Aussie Business | MeMate',
        description:
          'MeMate contractor management software helps Aussie businesses to assign jobs, track progress, and manage teams with powerful contractor software tools.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/contractor-management-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/contractor-management-software#software',
        name: 'MeMate Contractor Management',
        url: 'https://memate.com.au/features/contractor-management-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Contractor management software from MeMate. Assign jobs to contractors, track progress and manage teams.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/contractor-management-software#webpage',
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
      <ContractorPage />
    </>
  );
}