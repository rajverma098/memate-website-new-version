import ProfitabilityAndBudgetingPage from '../../../page-components/profitability-and-budgeting';

export const metadata = {
  title: 'Budgeting & Profitability Software for Aussie SMEs | MeMate',
  description:
    'See where you’re making money — and where you’re not. MeMate’s budgeting & profitability software helps Aussie businesses track jobs in real time. Call us now!',
  openGraph: {
    title: 'Budgeting & Profitability Software for Aussie SMEs | MeMate',
    description:
      'See where you’re making money — and where you’re not. MeMate’s budgeting & profitability software helps Aussie businesses track jobs in real time. Call us now!',
    url: 'https://memate.com.au/features/profitability-and-budgeting-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical:
      'https://memate.com.au/features/profitability-and-budgeting-software',
  },
};

export default function ProfitabilityAndBudgeting() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/profitability-and-budgeting-software#webpage',
        url: 'https://memate.com.au/features/profitability-and-budgeting-software',
        name: 'Budgeting & Profitability Software for Aussie SMEs | MeMate',
        description:
          'See where you’re making money — and where you’re not. MeMate’s budgeting & profitability software helps Aussie businesses track jobs in real time. Call us now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/profitability-and-budgeting-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/profitability-and-budgeting-software#software',
        name: 'MeMate Budgeting & Profitability',
        url: 'https://memate.com.au/features/profitability-and-budgeting-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Budgeting and profitability software from MeMate. Track real-time profit and manage budgets against every job.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/profitability-and-budgeting-software#webpage',
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
      <ProfitabilityAndBudgetingPage />
    </>
  );
}