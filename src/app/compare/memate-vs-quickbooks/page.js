import ServicesVsQuickBooksPage from '../../../page-components/memate-vs-quickbooks';

export const metadata = {
  title: 'MeMate vs QuickBooks: Which Is Better for Your Business?',
  description:
    'Compare MeMate vs QuickBooks for Australian businesses. Explore features, job management, invoicing and workflows to find the right software for you.',
  openGraph: {
    title: 'MeMate vs QuickBooks: Which Is Better for Your Business?',
    description:
      'Compare MeMate vs QuickBooks for Australian businesses. Explore features, job management, invoicing and workflows to find the right software for you.',
    url: 'https://memate.com.au/compare/memate-vs-quickbooks',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-quickbooks',
  },
};

export default function ServicesVsQuickBooks() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/compare/memate-vs-quickbooks#webpage',
        url: 'https://memate.com.au/compare/memate-vs-quickbooks',
        name: 'MeMate vs QuickBooks: Which Is Better for Your Business?',
        description:
          'Compare MeMate vs QuickBooks for Australian businesses. Explore features, job management, invoicing and workflows to find the right software for you.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id': 'https://memate.com.au/compare/memate-vs-quickbooks#list',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://memate.com.au/compare/memate-vs-quickbooks#list',
        name: 'MeMate vs QuickBooks',
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
            name: 'QuickBooks',
            url: 'https://quickbooks.intuit.com/au/',
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
      <ServicesVsQuickBooksPage />
    </>
  );
}