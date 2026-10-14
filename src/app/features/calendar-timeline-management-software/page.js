import CalendarPage from '../../../page-components/calendar';

export const metadata = {
  title: 'MeMate Calendar & Timeline Management Software Solutions',
  description:
    'Boost productivity with MeMate’s Calendar & Timeline Management Software. Stay organized, streamline projects & take control today! Visit our website now!',
  openGraph: {
    title: 'MeMate Calendar & Timeline Management Software Solutions',
    description:
      'Boost productivity with MeMate’s Calendar & Timeline Management Software. Stay organized, streamline projects & take control today! Visit our website now!',
    url: 'https://memate.com.au/features/calendar-timeline-management-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical:
      'https://memate.com.au/features/calendar-timeline-management-software',
  },
};

export default function Calendar() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/calendar-timeline-management-software#webpage',
        url: 'https://memate.com.au/features/calendar-timeline-management-software',
        name: 'MeMate Calendar & Timeline Management Software Solutions',
        description:
          'Boost productivity with MeMate’s Calendar & Timeline Management Software. Stay organized, streamline projects & take control today! Visit our website now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/calendar-timeline-management-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/calendar-timeline-management-software#software',
        name: 'MeMate Calendar & Timeline Management',
        url: 'https://memate.com.au/features/calendar-timeline-management-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Calendar and timeline management tools from MeMate. Plan projects, schedule work and coordinate teams with a shared calendar.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/calendar-timeline-management-software#webpage',
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
      <CalendarPage />
    </>
  );
}