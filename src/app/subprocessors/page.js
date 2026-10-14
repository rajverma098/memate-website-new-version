import SubprocessorsPage from '../../page-components/subprocessors';

export const metadata = {
  title: 'Subprocessors & Data Partners | Trusted List | MeMate',
  description:
    'Discover how MeMate securely manages subprocessors to protect your data & privacy. Learn what we use, why it matters, and take control today! Visit us now.',
  openGraph: {
    title: 'Subprocessors & Data Partners | Trusted List | MeMate',
    description:
      'Discover how MeMate securely manages subprocessors to protect your data & privacy. Learn what we use, why it matters, and take control today! Visit us now.',
    url: 'https://memate.com.au/subprocessors',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/subprocessors',
  },
};

export default function Subprocessors() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/subprocessors#webpage',
        url: 'https://memate.com.au/subprocessors',
        name: 'Subprocessors & Data Partners | Trusted List | MeMate',
        description:
          'Discover how MeMate securely manages subprocessors to protect your data & privacy. Learn what we use, why it matters, and take control today! Visit us now.',
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
      <SubprocessorsPage />
    </>
  );
}