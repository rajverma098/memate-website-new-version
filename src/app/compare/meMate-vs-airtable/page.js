import MeMateVsAirtablePage from '../../../page-components/meMate-vs-airtable';

export const metadata = {
  title: 'Compare MeMate vs Airtable | Save More, Do Less Accounting',
  description:
    'Compare MeMate vs Airtable—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  openGraph: {
    title: 'Compare MeMate vs Airtable | Save More, Do Less Accounting',
    description:
      'Compare MeMate vs Airtable—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
    url: 'https://memate.com.au/compare/memate-vs-airtable',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-airtable',
  },
};

export default function MeMateVsAirtable() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/compare/memate-vs-airtable#webpage',
        url: 'https://memate.com.au/compare/memate-vs-airtable',
        name: 'Compare MeMate vs Airtable | Save More, Do Less Accounting',
        description:
          'Compare MeMate vs Airtable—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id': 'https://memate.com.au/compare/memate-vs-airtable#list',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://memate.com.au/compare/memate-vs-airtable#list',
        name: 'MeMate vs Airtable',
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
            name: 'Airtable',
            url: 'https://www.airtable.com/',
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
      <MeMateVsAirtablePage />
    </>
  );
}