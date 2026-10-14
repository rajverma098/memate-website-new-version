import SupplierDatabasePage from '../../page-components/supplier-database';

export const metadata = {
  title: 'List Your Business in MeMate Supplier Directory | MeMate',
  description:
    'Submit your business to the MeMate Supplier Directory. Get discovered by Aussie SMEs—free listings for trusted local vendors on MeMate. Visit us today now!',
  openGraph: {
    title: 'List Your Business in MeMate Supplier Directory | MeMate',
    description:
      'Submit your business to the MeMate Supplier Directory. Get discovered by Aussie SMEs—free listings for trusted local vendors on MeMate. Visit us today now!',
    url: 'https://memate.com.au/supplier-database',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/supplier-database',
  },
};

export default function SupplierDatabase() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://memate.com.au/supplier-database#webpage',
        url: 'https://memate.com.au/supplier-database',
        name: 'List Your Business in MeMate Supplier Directory | MeMate',
        description:
          'Submit your business to the MeMate Supplier Directory. Get discovered by Aussie SMEs—free listings for trusted local vendors on MeMate. Visit us today now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: { '@id': 'https://memate.com.au/#organization' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
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
      <SupplierDatabasePage />
    </>
  );
}