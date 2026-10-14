import SoftwareUpdatePage from '../../page-components/software-update-page';

export const metadata = {
  title: 'MeMate Software Updates | Latest Features & Improvements',
  description:
    'Discover the latest MeMate software updates — new features, fixes, and improvements to help Australian businesses streamline operations and grow every day.',
  openGraph: {
    title: 'MeMate Software Updates | Latest Features & Improvements',
    description:
      'Discover the latest MeMate software updates — new features, fixes, and improvements to help Australian businesses streamline operations and grow every day.',
    url: 'https://memate.com.au/memate-software-updates',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/memate-software-updates',
  },
};

export default function SoftwareUpdate() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://memate.com.au/memate-software-updates#webpage',
        url: 'https://memate.com.au/memate-software-updates',
        name: 'MeMate Software Updates | Latest Features & Improvements',
        description:
          'Discover the latest MeMate software updates — new features, fixes, and improvements to help Australian businesses streamline operations and grow every day.',
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
      <SoftwareUpdatePage />
    </>
  );
}