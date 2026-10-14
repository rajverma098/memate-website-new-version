import AffiliateProgramPage from '../../page-components/affiliate-program';

export const metadata = {
  title: 'Refer & Earn | AI-Driven SaaS Growth Partners | MeMate',
  description:
    "Join MeMate's refer and earn program to grow revenue, get exclusive benefits & support. Refer your friends and earn rewards— apply now and start earning and growing with us.",
  openGraph: {
    title: 'Refer & Earn | AI-Driven SaaS Growth Partners | MeMate',
    description:
      "Join MeMate's refer and earn program to grow revenue, get exclusive benefits & support. Refer your friends and earn rewards— apply now and start earning and growing with us.",
    url: 'https://memate.com.au/affiliate-program',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/affiliate-program',
  },
};

export default function ReferAndEarn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/affiliate-program#webpage',
        url: 'https://memate.com.au/affiliate-program',
        name: 'Refer & Earn | AI-Driven SaaS Growth Partners | MeMate',
        description:
          "Join MeMate's refer and earn program to grow revenue, get exclusive benefits & support. Refer your friends and earn rewards— apply now and start earning and growing with us.",
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
      <AffiliateProgramPage />
    </>
  );
}