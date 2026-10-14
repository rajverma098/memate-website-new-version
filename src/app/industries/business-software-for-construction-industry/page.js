import AppWrapper from '../../../components/AppWrapper';
import ConstructionPage from '../../../page-components/construction';

export const metadata = {
  title: 'Business Software for Construction Industry | MeMate',
  description:
    'Boost efficiency with MeMate’s business software for the construction industry. Streamline projects, cut costs & grow faster—explore solutions today! Call now.',
  openGraph: {
    title: 'Business Software for Construction Industry | MeMate',
    description:
      'Boost efficiency with MeMate’s business software for the construction industry. Streamline projects, cut costs & grow faster—explore solutions today! Call now.',
    url: 'https://memate.com.au/industries/business-software-for-construction-industry',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical:
      'https://memate.com.au/industries/business-software-for-construction-industry',
  },
};

export default function Construction() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/industries/business-software-for-construction-industry#webpage',
        url: 'https://memate.com.au/industries/business-software-for-construction-industry',
        name: 'Business Software for Construction Industry | MeMate',
        description:
          'Boost efficiency with MeMate’s business software for the construction industry. Streamline projects, cut costs & grow faster—explore solutions today! Call now.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/industries/business-software-for-construction-industry#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/industries/business-software-for-construction-industry#software',
        name: 'MeMate for Construction',
        url: 'https://memate.com.au/industries/business-software-for-construction-industry',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Business management software for Australian construction businesses. Manage projects, jobs, quotes, teams and invoicing in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/industries/business-software-for-construction-industry#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Construction businesses in Australia',
        },
        knowsAbout: [
          'Construction business software',
          'Construction project management software',
          'Construction job scheduling',
          'Construction quoting and invoicing',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id':
            'https://memate.com.au/industries/business-software-for-construction-industry#offer-trial',
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
      <AppWrapper>
        <ConstructionPage />
      </AppWrapper>
    </>
  );
}