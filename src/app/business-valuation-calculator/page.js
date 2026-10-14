import ValuationCalculatorPage from '../../page-components/business-valuation-calculator';

export const metadata = {
  metadataBase: new URL('https://memate.com.au'),
  title: 'Business Valuation Calculator | Estimate Your Business Worth | MeMate',
  description:
    'Estimate your business value with our Business Valuation Calculator. Discover how revenue, profitability and systems impact what your business could be worth.',
  openGraph: {
    title: 'Business Valuation Calculator | Estimate Your Business Worth | MeMate',
    description:
      'Estimate your business value with our Business Valuation Calculator. Discover how revenue, profitability and systems impact what your business could be worth.',
    url: 'https://memate.com.au/business-valuation-calculator',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/business-valuation-calculator',
  },
};

export default function BusinessValuationCalculator() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/business-valuation-calculator#webpage',
        url: 'https://memate.com.au/business-valuation-calculator',
        name: 'Business Valuation Calculator | Estimate Your Business Worth | MeMate',
        description:
          'Estimate your business value with our Business Valuation Calculator. Discover how revenue, profitability and systems impact what your business could be worth.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/business-valuation-calculator#webapp',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['WebApplication', 'SoftwareApplication'],
        '@id': 'https://memate.com.au/business-valuation-calculator#webapp',
        name: 'MeMate Business Valuation Calculator',
        url: 'https://memate.com.au/business-valuation-calculator',
        description:
          'Calculate how much your business is worth using revenue, profitability, industry risk and trading history. Get an instant indicative business valuation online.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript enabled',
        isAccessibleForFree: true,
        inLanguage: 'en-AU',
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/business-valuation-calculator#webpage',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
          url: 'https://memate.com.au/business-valuation-calculator',
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
      <ValuationCalculatorPage />
    </>
  );
}