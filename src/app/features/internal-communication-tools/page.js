import InternalChatPage from '../../../page-components/internal-chat';

export const metadata = {
  title: 'Internal Communication Tools & Apps Platform | MeMate',
  description:
    'Boost team productivity with MeMate – the all-in-one internal communication tools, software & apps. Try our internal communication platform today! Visit Now!',
  openGraph: {
    title: 'Internal Communication Tools & Apps Platform | MeMate',
    description:
      'Boost team productivity with MeMate – the all-in-one internal communication tools, software & apps. Try our internal communication platform today! Visit Now!',
    url: 'https://memate.com.au/features/internal-communication-tools',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/internal-communication-tools',
  },
};

export default function InternalChat() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/internal-communication-tools#webpage',
        url: 'https://memate.com.au/features/internal-communication-tools',
        name: 'Internal Communication Tools & Apps Platform | MeMate',
        description:
          'Boost team productivity with MeMate – the all-in-one internal communication tools, software & apps. Try our internal communication platform today! Visit Now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/internal-communication-tools#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/internal-communication-tools#software',
        name: 'MeMate Internal Communication',
        url: 'https://memate.com.au/features/internal-communication-tools',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Internal communication tools from MeMate. Chat with your team, share updates and coordinate work in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/internal-communication-tools#webpage',
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
      <InternalChatPage />
    </>
  );
}