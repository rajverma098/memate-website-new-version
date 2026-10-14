import InvoicingPage from '../../../page-components/invoicing';

export const metadata = {
  title: 'Top Invoicing Software for Business in Australia | MeMate',
  description:
    'Invoicing software by Memate for small business-featuring quoting, estimating, expense tracking & the best invoice software in Australia.',
  openGraph: {
    title: 'Top Invoicing Software for Business in Australia | MeMate',
    description:
      'Invoicing software by Memate for small business-featuring quoting, estimating, expense tracking & the best invoice software in Australia.',
    url: 'https://memate.com.au/features/invoicing-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/invoicing-software',
  },
};

export default function Invoicing() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/features/invoicing-software#webpage',
        url: 'https://memate.com.au/features/invoicing-software',
        name: 'Top Invoicing Software for Business in Australia | MeMate',
        description:
          'Invoicing software by Memate for small business-featuring quoting, estimating, expense tracking & the best invoice software in Australia.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id': 'https://memate.com.au/features/invoicing-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id': 'https://memate.com.au/features/invoicing-software#software',
        name: 'MeMate Invoicing',
        url: 'https://memate.com.au/features/invoicing-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Invoicing software from MeMate. Create, send and track invoices and payments in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id': 'https://memate.com.au/features/invoicing-software#webpage',
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
      <InvoicingPage />
    </>
  );
}