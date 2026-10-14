import AddYourCompanyPage from '../../page-components/add-your-company';

export const metadata = {
  title: 'Add Your Company | MeMate Business Directory Australia',
  description:
    'Add your company to MeMate today! Boost visibility, connect with clients, and grow your business online. Start now with MeMate. Join now and grow your business.',
  openGraph: {
    title: 'Add Your Company | MeMate Business Directory Australia',
    description:
      'Add your company to MeMate today! Boost visibility, connect with clients, and grow your business online. Start now with MeMate. Join now and grow your business.',
    url: 'https://memate.com.au/add-your-company',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/add-your-company',
  },
};

export default function AddYourCompany() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/add-your-company#webpage',
        url: 'https://memate.com.au/add-your-company',
        name: 'Add Your Company | MeMate Business Directory Australia',
        description:
          'Add your company to MeMate today! Boost visibility, connect with clients, and grow your business online. Start now with MeMate. Join now and grow your business.',
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
      <AddYourCompanyPage />
    </>
  );
}