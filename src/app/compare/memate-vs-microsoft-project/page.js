import ServicesVsMicrosoftPage from '../../../page-components/memate-vs-microsoft-project';

export const metadata = {
  title: 'MeMate vs Microsoft Project | Compare Smarter with MeMate',
  description:
    'Compare MeMate vs Microsoft Project—see why MeMate is the smarter choice for project success. Explore features now and make the switch today! Start with us now!',
  openGraph: {
    title: 'MeMate vs Microsoft Project | Compare Smarter with MeMate',
    description:
      'Compare MeMate vs Microsoft Project—see why MeMate is the smarter choice for project success. Explore features now and make the switch today! Start with us now!',
    url: 'https://memate.com.au/compare/memate-vs-microsoft-project',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-microsoft-project',
  },
};

export default function ServicesVsMicrosoft() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/compare/memate-vs-microsoft-project#webpage',
        url: 'https://memate.com.au/compare/memate-vs-microsoft-project',
        name: 'MeMate vs Microsoft Project | Compare Smarter with MeMate',
        description:
          'Compare MeMate vs Microsoft Project—see why MeMate is the smarter choice for project success. Explore features now and make the switch today! Start with us now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/compare/memate-vs-microsoft-project#list',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'ItemList',
        '@id':
          'https://memate.com.au/compare/memate-vs-microsoft-project#list',
        name: 'MeMate vs Microsoft Project',
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
            name: 'Microsoft Project',
            url: 'https://www.microsoft.com/en-au/microsoft-365/project/project-management-software',
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
      <ServicesVsMicrosoftPage />
    </>
  );
}