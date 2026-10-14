import MultiLocationPage from '../../../page-components/multi-location';

export const metadata = {
  title: 'Multi-Location Management & Scheduling Software | MeMate',
  description:
    'MeMate multi location software simplifies operations across sites. Manage staff, jobs, and schedules with our multi location management tools.',
  openGraph: {
    title: 'Multi-Location Management & Scheduling Software | MeMate',
    description:
      'MeMate multi location software simplifies operations across sites. Manage staff, jobs, and schedules with our multi location management tools.',
    url: 'https://memate.com.au/features/multi-location-management',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/multi-location-management',
  },
};

export default function MultiLocation() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/multi-location-management#webpage',
        url: 'https://memate.com.au/features/multi-location-management',
        name: 'Multi-Location Management & Scheduling Software | MeMate',
        description:
          'MeMate multi location software simplifies operations across sites. Manage staff, jobs, and schedules with our multi location management tools.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/multi-location-management#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/multi-location-management#software',
        name: 'MeMate Multi-Location Management',
        url: 'https://memate.com.au/features/multi-location-management',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Multi-location management software from MeMate. Run every branch, staff and schedule from one account.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/multi-location-management#webpage',
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
      <MultiLocationPage />
    </>
  );
}