import CleaningBusinessPage from '../../page-components/cleaning-companies';

export const metadata = {
  title: 'Cleaning Business Software | Manage Jobs & Teams | meMate',
  description:
    'Streamline your cleaning business with meMate, cleaning business software for jobs, scheduling, teams, quotes, and invoicing. Start your free trial today.',
  openGraph: {
    title: 'Cleaning Business Software | Manage Jobs & Teams | meMate',
    description:
      'Streamline your cleaning business with meMate, cleaning business software for jobs, scheduling, teams, quotes, and invoicing. Start your free trial today.',
    url: 'https://memate.com.au/cleaning-companies',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/cleaning-companies',
  },
};

export default function CleaningBusiness() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/cleaning-companies#webpage',
        url: 'https://memate.com.au/cleaning-companies',
        name: 'Cleaning Business Software | Manage Jobs & Teams | meMate',
        description:
          'Streamline your cleaning business with meMate, cleaning business software for jobs, scheduling, teams, quotes, and invoicing. Start your free trial today.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id': 'https://memate.com.au/cleaning-companies#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id': 'https://memate.com.au/cleaning-companies#software',
        name: 'MeMate for Cleaning Businesses',
        url: 'https://memate.com.au/cleaning-companies',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Business management software for Australian cleaning businesses. Manage jobs, scheduling, teams, quotes, invoicing and payments in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id': 'https://memate.com.au/cleaning-companies#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Cleaning businesses in Australia',
        },
        knowsAbout: [
          'Cleaning business software',
          'Cleaning job scheduling',
          'Cleaning crew management',
          'Cleaning quotes and invoicing',
          'Field service software for cleaners',
          'Recurring cleaning jobs',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id': 'https://memate.com.au/cleaning-companies#offer-trial',
          name: '14-day free trial',
          description: '14-day free trial of MeMate. No credit card required.',
          price: '0',
          priceCurrency: 'AUD',
          url: 'https://memate.com.au/pricing',
          availability: 'https://schema.org/InStock',
          seller: { '@id': 'https://memate.com.au/#organization' },
        },
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
      <CleaningBusinessPage />
    </>
  );
}