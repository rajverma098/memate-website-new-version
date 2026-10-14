import RemovalistsPage from '../../page-components/removalists';

export const metadata = {
  title: 'Removalist Software for Enquiries, Quotes & Jobs | meMate',
  description:
    'Manage removalist enquiries, quotes, job scheduling, invoicing, and teams in one place with meMate. Streamline your business and start your free trial today.',
  openGraph: {
    title: 'Removalist Software for Enquiries, Quotes & Jobs | meMate',
    description:
      'Manage removalist enquiries, quotes, job scheduling, invoicing, and teams in one place with meMate. Streamline your business and start your free trial today.',
    url: 'https://memate.com.au/removalists',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/removalists',
  },
};

export default function Removalists() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/removalists#webpage',
        url: 'https://memate.com.au/removalists',
        name: 'Removalist Software for Enquiries, Quotes & Jobs | meMate',
        description:
          'Manage removalist enquiries, quotes, job scheduling, invoicing, and teams in one place with meMate. Streamline your business and start your free trial today.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: { '@id': 'https://memate.com.au/removalists#software' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id': 'https://memate.com.au/removalists#software',
        name: 'MeMate for Removalist Businesses',
        url: 'https://memate.com.au/removalists',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Business management software for Australian removalist businesses. Manage enquiries, quotes, job scheduling, crew, invoicing and payments in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id': 'https://memate.com.au/removalists#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Removalist businesses in Australia',
        },
        knowsAbout: [
          'Removalist software',
          'Removalist job scheduling',
          'Removalist crew management',
          'Removalist quotes and invoicing',
          'Field service software for removalists',
          'Moving business management software',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id': 'https://memate.com.au/removalists#offer-trial',
          name: '14-day free trial',
          description: '14-day free trial of MeMate. No credit card required.',
          price: '0',
          priceCurrency: 'AUD',
          url: 'https://memate.com.au/pricing',
          availability: 'https://schema.org/InStock',
          seller: { '@id': 'https://memate.com.au/#organization' },
        },
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
      <RemovalistsPage />
    </>
  );
}