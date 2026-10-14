import CustomerStoriesPage from '../../page-components/customer-stories-page';

export const metadata = {
  title: 'MeMate Client Success | Small Business Software Stories',
  description:
    'See how Aussie SMEs succeed with MeMate. Customer stories, software testimonials, and real-world ERP use cases prove client success across industries.',
  openGraph: {
    title: 'MeMate Client Success | Small Business Software Stories',
    description:
      'See how Aussie SMEs succeed with MeMate. Customer stories, software testimonials, and real-world ERP use cases prove client success across industries.',
    url: 'https://memate.com.au/customer-stories',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/customer-stories',
  },
};

export default function CustomerStories() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://memate.com.au/customer-stories#webpage',
        url: 'https://memate.com.au/customer-stories',
        name: 'MeMate Client Success | Small Business Software Stories',
        description:
          'See how Aussie SMEs succeed with MeMate. Customer stories, software testimonials, and real-world ERP use cases prove client success across industries.',
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
      <CustomerStoriesPage />
    </>
  );
}