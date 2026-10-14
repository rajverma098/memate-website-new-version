import BlogPage from '../../page-components/blog-page';

export const metadata = {
  title: 'MeMate News | Business Software & Tech Updates for SMEs',
  description:
    'Stay updated with MeMate on business software news, Australian tech trends, ERP & CRM updates, and tools for SMEs. Discover new features, tips & regulations.',
  openGraph: {
    title: 'MeMate News | Business Software & Tech Updates for SMEs',
    description:
      'Stay updated with MeMate on business software news, Australian tech trends, ERP & CRM updates, and tools for SMEs. Discover new features, tips & regulations.',
    url: 'https://memate.com.au/news',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/news',
  },
};

export default function NewsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://memate.com.au/news#webpage',
        url: 'https://memate.com.au/news',
        name: 'MeMate News | Business Software & Tech Updates for SMEs',
        description:
          'Stay updated with MeMate on business software news, Australian tech trends, ERP & CRM updates, and tools for SMEs. Discover new features, tips & regulations.',
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
      <BlogPage />
    </>
  );
}