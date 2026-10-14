import KnowledgeBasePage from '../../page-components/knowledge-base';

export const metadata = {
  title: 'MeMate Knowledge Base | How to Use & User Documentation',
  description:
    'MeMate user guide and documentation with tutorials, setup tips, and feature walkthroughs. Learn how to use MeMate and unlock every tool.',
  openGraph: {
    title: 'MeMate Knowledge Base | How to Use & User Documentation',
    description:
      'MeMate user guide and documentation with tutorials, setup tips, and feature walkthroughs. Learn how to use MeMate and unlock every tool.',
    url: 'https://memate.com.au/knowledge-base',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/knowledge-base',
  },
};

export default function KnowledgeBase() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://memate.com.au/knowledge-base#webpage',
        url: 'https://memate.com.au/knowledge-base',
        name: 'MeMate Knowledge Base | How to Use & User Documentation',
        description:
          'MeMate user guide and documentation with tutorials, setup tips, and feature walkthroughs. Learn how to use MeMate and unlock every tool.',
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
      <KnowledgeBasePage />
    </>
  );
}