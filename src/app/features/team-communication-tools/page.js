import CommunicationPage from '../../../page-components/communication';

export const metadata = {
  title: 'Team Communication Software & Tools for Business | meMate',
  description:
    "Improve team communication with meMate's team communication software. Chat, assign tasks, organise conversations, and keep everyone connected in one place.",
  openGraph: {
    title: 'Team Communication Software & Tools for Business | meMate',
    description:
      "Improve team communication with meMate's team communication software. Chat, assign tasks, organise conversations, and keep everyone connected in one place.",
    url: 'https://memate.com.au/features/team-communication-tools',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/team-communication-tools',
  },
};

export default function Communication() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/team-communication-tools#webpage',
        url: 'https://memate.com.au/features/team-communication-tools',
        name: 'Team Communication Software & Tools for Business | meMate',
        description:
          "Improve team communication with meMate's team communication software. Chat, assign tasks, organise conversations, and keep everyone connected in one place.",
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/team-communication-tools#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/team-communication-tools#software',
        name: 'MeMate Team Communication',
        url: 'https://memate.com.au/features/team-communication-tools',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Team communication software from MeMate. Chat, assign tasks and keep everyone connected in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/team-communication-tools#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType:
            'Small and medium-sized service businesses in Australia',
        },
        isPartOf: { '@id': 'https://memate.com.au/#software' },
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
      <CommunicationPage />
    </>
  );
}