import ServicesNetsuitePage from '../../../page-components/memate-vs-netsuite';

export const metadata = {
  title: 'MeMate vs NetSuite Comparison | Make the Right Pick | MeMate',
  description:
    'Discover how MeMate stacks up against NetSuite. Compare features, pricing & benefits—see why MeMate is the smarter choice. Start your journey today! Visit now!',
  openGraph: {
    title: 'MeMate vs NetSuite Comparison | Make the Right Pick | MeMate',
    description:
      'Discover how MeMate stacks up against NetSuite. Compare features, pricing & benefits—see why MeMate is the smarter choice. Start your journey today! Visit now!',
    url: 'https://memate.com.au/compare/memate-vs-netsuite',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-netsuite',
  },
};

export default function ServicesNetsuite() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/compare/memate-vs-netsuite#webpage',
        url: 'https://memate.com.au/compare/memate-vs-netsuite',
        name: 'MeMate vs NetSuite Comparison | Make the Right Pick | MeMate',
        description:
          'Discover how MeMate stacks up against NetSuite. Compare features, pricing & benefits—see why MeMate is the smarter choice. Start your journey today! Visit now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id': 'https://memate.com.au/compare/memate-vs-netsuite#list',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://memate.com.au/compare/memate-vs-netsuite#list',
        name: 'MeMate vs NetSuite',
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
            name: 'NetSuite',
            url: 'https://www.netsuite.com/portal/home.shtml',
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
      <ServicesNetsuitePage />
    </>
  );
}