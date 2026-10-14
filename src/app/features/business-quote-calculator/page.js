import CalculatorsPage from '../../../page-components/calculators';

export const metadata = {
  title: 'MeMate Business Quote Calculator | Instant Cost Estimates',
  description:
    'Simplify project costs with MeMate’s Business Quote Calculator. Get instant, accurate estimates and streamline your workflow today! try our services now!',
  openGraph: {
    title: 'MeMate Business Quote Calculator | Instant Cost Estimates',
    description:
      'Simplify project costs with MeMate’s Business Quote Calculator. Get instant, accurate estimates and streamline your workflow today! try our services now!',
    url: 'https://memate.com.au/features/business-quote-calculator',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/business-quote-calculator',
  },
};

export default function Calculators() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/business-quote-calculator#webpage',
        url: 'https://memate.com.au/features/business-quote-calculator',
        name: 'MeMate Business Quote Calculator | Instant Cost Estimates',
        description:
          'Simplify project costs with MeMate’s Business Quote Calculator. Get instant, accurate estimates and streamline your workflow today! try our services now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/business-quote-calculator#webapp',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['WebApplication', 'SoftwareApplication'],
        '@id':
          'https://memate.com.au/features/business-quote-calculator#webapp',
        name: 'MeMate Business Quote Calculator',
        url: 'https://memate.com.au/features/business-quote-calculator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        browserRequirements: 'Requires JavaScript enabled',
        isAccessibleForFree: true,
        inLanguage: 'en-AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/business-quote-calculator#webpage',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
          url: 'https://memate.com.au/features/business-quote-calculator',
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
      <CalculatorsPage />
    </>
  );
}