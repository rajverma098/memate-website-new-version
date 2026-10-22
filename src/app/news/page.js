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
    locale: 'en_AU',
    images: [{
      url: 'https://memate.com.au/images/og-default.jpg',
      width: 1200,
      height: 630,
      alt: 'MeMate News',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MeMate News | Business Software & Tech Updates for SMEs',
    description:
      'Stay updated with MeMate on business software news, Australian tech trends, ERP & CRM updates, and tools for SMEs.',
    images: ['https://memate.com.au/images/og-default.jpg'],
    creator: '@memateapp',
    site: '@memateapp',
  },
  alternates: {
    canonical: 'https://memate.com.au/news',
    languages: {
      'en-AU': 'https://memate.com.au/news',
      'en-NZ': 'https://memate.com.au/news',
      'x-default': 'https://memate.com.au/news',
    },
  },
  robots: {
    index: true,
    follow: true,
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
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://memate.com.au/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'News',
            item: 'https://memate.com.au/news',
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
      <main>
        <BlogPage />
      </main>
    </>
  );
}