import PartnerProgramPageNew from '../../page-components/partner-program';

export const metadata = {
  title: 'Partner Program | AI-Driven SaaS Growth Partners | MeMate',
  description:
    'Join MeMate’s partner program to grow revenue, get exclusive benefits & support. Partner with us for success— apply now and start earning and growing with us.',
  openGraph: {
    title: 'Partner Program | AI-Driven SaaS Growth Partners | MeMate',
    description:
      'Join MeMate’s partner program to grow revenue, get exclusive benefits & support. Partner with us for success— apply now and start earning and growing with us.',
    url: 'https://memate.com.au/partner-program',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/partner-program',
  },
};

export default function PartnerProgram() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/partner-program#webpage',
        url: 'https://memate.com.au/partner-program',
        name: 'Partner Program | AI-Driven SaaS Growth Partners | MeMate',
        description:
          'Join MeMate’s partner program to grow revenue, get exclusive benefits & support. Partner with us for success— apply now and start earning and growing with us.',
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
      <PartnerProgramPageNew />
    </>
  );
}