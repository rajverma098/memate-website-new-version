import MemateWikiPage from '../../page-components/memate-wiki';

export const metadata = {
  title: 'Business Tips for Aussie SMEs | MeMate Wiki & Insights',
  description:
    'MeMate Wiki offers Aussie SMEs growth insights, business operations advice, and productivity tips to help you choose the right business software.',
  openGraph: {
    title: 'Business Tips for Aussie SMEs | MeMate Wiki & Insights',
    description:
      'MeMate Wiki offers Aussie SMEs growth insights, business operations advice, and productivity tips to help you choose the right business software.',
    url: 'https://memate.com.au/memate-wiki',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/memate-wiki',
  },
};

export default function MemateWiki() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://memate.com.au/memate-wiki#webpage',
        url: 'https://memate.com.au/memate-wiki',
        name: 'Business Tips for Aussie SMEs | MeMate Wiki & Insights',
        description:
          'MeMate Wiki offers Aussie SMEs growth insights, business operations advice, and productivity tips to help you choose the right business software.',
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
      <MemateWikiPage />
    </>
  );
}