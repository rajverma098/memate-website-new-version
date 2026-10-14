import ServicesVsSagePage from '../../../page-components/memate-vs-sage';

export const metadata = {
  title: 'Compare MeMate vs Sage | Best Smarter Business Management',
  description:
    'Compare MeMate vs Sage to see which software boosts your business efficiency. Discover features, pricing & benefits today—make the smart choice with MeMate now!',
  openGraph: {
    title: 'Compare MeMate vs Sage | Best Smarter Business Management',
    description:
      'Compare MeMate vs Sage to see which software boosts your business efficiency. Discover features, pricing & benefits today—make the smart choice with MeMate now!',
    url: 'https://memate.com.au/compare/memate-vs-sage',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-sage',
  },
};

export default function ServicesVsSage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/compare/memate-vs-sage#webpage',
        url: 'https://memate.com.au/compare/memate-vs-sage',
        name: 'Compare MeMate vs Sage | Best Smarter Business Management',
        description:
          'Compare MeMate vs Sage to see which software boosts your business efficiency. Discover features, pricing & benefits today—make the smart choice with MeMate now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id': 'https://memate.com.au/compare/memate-vs-sage#list',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://memate.com.au/compare/memate-vs-sage#list',
        name: 'MeMate vs Sage',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'MeMate',
            url: 'https://memate.com.au/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Sage',
            url: 'https://www.sage.com/en-au/',
          },
        ],
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
      <ServicesVsSagePage />
    </>
  );
}