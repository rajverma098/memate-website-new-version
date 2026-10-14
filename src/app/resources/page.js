import ResourcesPage from '../../page-components/resources';

export const metadata = {
  title: 'Business Resources & Guides for Growth | MeMate',
  description:
    'Explore MeMate resources to help your business grow. Find guides, tools, and insights designed to streamline work and boost productivity.',
  openGraph: {
    title: 'Business Resources & Guides for Growth | MeMate',
    description:
      'Explore MeMate resources to help your business grow. Find guides, tools, and insights designed to streamline work and boost productivity.',
    url: 'https://memate.com.au/resources',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/resources',
  },
};

export default function Resources() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://memate.com.au/resources#webpage',
        url: 'https://memate.com.au/resources',
        name: 'Business Resources & Guides for Growth | MeMate',
        description:
          'Explore MeMate resources to help your business grow. Find guides, tools, and insights designed to streamline work and boost productivity.',
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
      <ResourcesPage />
    </>
  );
}