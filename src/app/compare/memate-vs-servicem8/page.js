import Services8Page from '../../../page-components/memate-vs-servicem8';

export const metadata = {
  title: 'Compare MeMate vs ServiceM8 | Smarter Job Management Tool',
  description:
    'Compare MeMate vs ServiceM8 and find out why MeMate is the better choice for your business. Discover features, pricing & benefits—click here to explore now!',
  openGraph: {
    title: 'Compare MeMate vs ServiceM8 | Smarter Job Management Tool',
    description:
      'Compare MeMate vs ServiceM8 and find out why MeMate is the better choice for your business. Discover features, pricing & benefits—click here to explore now!',
    url: 'https://memate.com.au/compare/memate-vs-servicem8',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-servicem8',
  },
};

export default function Services8() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/compare/memate-vs-servicem8#webpage',
        url: 'https://memate.com.au/compare/memate-vs-servicem8',
        name: 'Compare MeMate vs ServiceM8 | Smarter Job Management Tool',
        description:
          'Compare MeMate vs ServiceM8 and find out why MeMate is the better choice for your business. Discover features, pricing & benefits—click here to explore now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id': 'https://memate.com.au/compare/memate-vs-servicem8#list',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://memate.com.au/compare/memate-vs-servicem8#list',
        name: 'MeMate vs ServiceM8',
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
            name: 'ServiceM8',
            url: 'https://www.servicem8.com/',
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
      <Services8Page />
    </>
  );
}