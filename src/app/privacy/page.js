import PrivacyPage from '../../page-components/privacy';

export const metadata = {
  title: 'Privacy Policy | MeMate | Data Protection & Security',
  description:
    'Stay informed with MeMate’s Privacy Policy. Learn how we protect your data and ensure transparency. Read now for peace of mind! Stay secure & explore today.',
  openGraph: {
    title: 'Privacy Policy | MeMate | Data Protection & Security',
    description:
      'Stay informed with MeMate’s Privacy Policy. Learn how we protect your data and ensure transparency. Read now for peace of mind! Stay secure & explore today.',
    url: 'https://memate.com.au/privacy',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/privacy',
  },
};

export default function Privacy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/privacy#webpage',
        url: 'https://memate.com.au/privacy',
        name: 'Privacy Policy | MeMate | Data Protection & Security',
        description:
          'Stay informed with MeMate’s Privacy Policy. Learn how we protect your data and ensure transparency. Read now for peace of mind! Stay secure & explore today.',
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
      <PrivacyPage />
    </>
  );
}