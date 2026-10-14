import MemateFaqsPage from '../../page-components/memate-faqs';

export const metadata = {
  title: 'MeMate FAQs | Business Management Software FAQs Guide',
  description:
    'Find answers about MeMate business management software — features, onboarding & support. Quick FAQs for Aussie businesses switching to MeMate. Visit us now!',
  openGraph: {
    title: 'MeMate FAQs | Business Management Software FAQs Guide',
    description:
      'Find answers about MeMate business management software — features, onboarding & support. Quick FAQs for Aussie businesses switching to MeMate. Visit us now!',
    url: 'https://memate.com.au/faqs',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/faqs',
  },
};

export default function MemateFaqs() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/faqs#webpage',
        url: 'https://memate.com.au/faqs',
        name: 'MeMate FAQs | Business Management Software FAQs Guide',
        description:
          'Find answers about MeMate business management software — features, onboarding & support. Quick FAQs for Aussie businesses switching to MeMate. Visit us now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: { '@id': 'https://memate.com.au/faqs#faq' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://memate.com.au/faqs#faq',
        mainEntity: [
          // ⬇️ FILL IN — copy the exact questions and answers
          //     visible on https://memate.com.au/faqs
          //
          // {
          //   '@type': 'Question',
          //   name: 'EXACT question text from the page',
          //   acceptedAnswer: {
          //     '@type': 'Answer',
          //     text: 'EXACT answer text from the page',
          //   },
          // },
          //
          // Repeat for every Q&A shown on the page.
          // Google requires markup to match visible text on the page.
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
      <MemateFaqsPage />
    </>
  );
}