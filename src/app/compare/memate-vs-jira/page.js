import ServicesVsJiraPage from '../../../page-components/memate-vs-jira';

export const metadata = {
  title: 'Compare MeMate vs Jira | Smarter Project Management Tools',
  description:
    'Compare MeMate vs Jira in project management: discover features, benefits, pricing and usability. See why teams switch to MeMate today—explore the comparison.',
  openGraph: {
    title: 'Compare MeMate vs Jira | Smarter Project Management Tools',
    description:
      'Compare MeMate vs Jira in project management: discover features, benefits, pricing and usability. See why teams switch to MeMate today—explore the comparison.',
    url: 'https://memate.com.au/compare/memate-vs-jira',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-jira',
  },
};

export default function ServicesVsJira() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/compare/memate-vs-jira#webpage',
        url: 'https://memate.com.au/compare/memate-vs-jira',
        name: 'Compare MeMate vs Jira | Smarter Project Management Tools',
        description:
          'Compare MeMate vs Jira in project management: discover features, benefits, pricing and usability. See why teams switch to MeMate today—explore the comparison.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id': 'https://memate.com.au/compare/memate-vs-jira#list',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://memate.com.au/compare/memate-vs-jira#list',
        name: 'MeMate vs Jira',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'MeMate',
            url: 'https://memate.com.au/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Jira',
            url: 'https://www.atlassian.com/software/jira',
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
      <ServicesVsJiraPage />
    </>
  );
}