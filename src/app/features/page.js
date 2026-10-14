import FeaturesPage from '../../page-components/features';

export const metadata = {
  title: 'Our Features | Business Management Software | MeMate',
  description:
    'Explore MeMate’s business management software features — invoicing, quoting, CRM, scheduling, and team management tools to grow your business. Visit us now!',
  openGraph: {
    title: 'Our Features | Business Management Software | MeMate',
    description:
      'Explore MeMate’s business management software features — invoicing, quoting, CRM, scheduling, and team management tools to grow your business. Visit us now!',
    url: 'https://memate.com.au/features',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features',
  },
};

export default function Features() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://memate.com.au/features#webpage',
        url: 'https://memate.com.au/features',
        name: 'Our Features | Business Management Software | MeMate',
        description:
          'Explore MeMate’s business management software features — invoicing, quoting, CRM, scheduling, and team management tools to grow your business. Visit us now!',
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
      <FeaturesPage />
    </>
  );
}