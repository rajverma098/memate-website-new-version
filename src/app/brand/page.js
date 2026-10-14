import BrandPage from '../../page-components/brand';

export const metadata = {
  title: 'MeMate Brand Assets | Logo Download & Media Kit Guidelines',
  description:
    'Download official MeMate brand assets like, logos, colours & branding guidelines. Get our media kit for press, legalvisions, and business software brand kit needs.',
  openGraph: {
    title: 'MeMate Brand Assets | Logo Download & Media Kit Guidelines',
    description:
      'Download official MeMate brand assets like, logos, colours & branding guidelines. Get our media kit for press, legalvisions, and business software brand kit needs.',
    url: 'https://memate.com.au/brand',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/brand',
  },
};

export default function Brand() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/brand#webpage',
        url: 'https://memate.com.au/brand',
        name: 'MeMate Brand Assets | Logo Download & Media Kit Guidelines',
        description:
          'Download official MeMate brand assets like, logos, colours & branding guidelines. Get our media kit for press, legalvisions, and business software brand kit needs.',
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
      <BrandPage />
    </>
  );
}