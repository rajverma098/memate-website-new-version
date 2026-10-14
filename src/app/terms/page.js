import TermsAndConditionsPage from '../../page-components/terms-and-conditions';

export const metadata = {
  title: 'MeMate Terms & Conditions | User Agreement & Policies',
  description:
    'Read MeMate Terms & Conditions for safe, secure use. Stay informed about your rights, policies & privacy. Visit now and protect your experience with MeMate now.',
  openGraph: {
    title: 'MeMate Terms & Conditions | User Agreement & Policies',
    description:
      'Read MeMate Terms & Conditions for safe, secure use. Stay informed about your rights, policies & privacy. Visit now and protect your experience with MeMate now.',
    url: 'https://memate.com.au/terms',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/terms',
  },
};

export default function TermsAndConditions() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/terms#webpage',
        url: 'https://memate.com.au/terms',
        name: 'MeMate Terms & Conditions | User Agreement & Policies',
        description:
          'Read MeMate Terms & Conditions for safe, secure use. Stay informed about your rights, policies & privacy. Visit now and protect your experience with MeMate now.',
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
      <TermsAndConditionsPage />
    </>
  );
}