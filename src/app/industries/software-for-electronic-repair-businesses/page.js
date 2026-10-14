import AppWrapper from '../../../components/AppWrapper';
import ElectronicPage from '../../../page-components/electronic';

export const metadata = {
  title: 'Electronics Repair Shop Management Software | MeMate',
  description:
    'Run your electronics repair business with MeMate. Quote jobs, track repairs, manage customers, and stay organized with our all-in-one software. Visit us now!',
  openGraph: {
    title: 'Electronics Repair Shop Management Software | MeMate',
    description:
      'Run your electronics repair business with MeMate. Quote jobs, track repairs, manage customers, and stay organized with our all-in-one software. Visit us now!',
    url: 'https://memate.com.au/industries/software-for-electronic-repair-businesses',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical:
      'https://memate.com.au/industries/software-for-electronic-repair-businesses',
  },
};

export default function Electronic() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/industries/software-for-electronic-repair-businesses#webpage',
        url: 'https://memate.com.au/industries/software-for-electronic-repair-businesses',
        name: 'Electronics Repair Shop Management Software | MeMate',
        description:
          'Run your electronics repair business with MeMate. Quote jobs, track repairs, manage customers, and stay organized with our all-in-one software. Visit us now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/industries/software-for-electronic-repair-businesses#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/industries/software-for-electronic-repair-businesses#software',
        name: 'MeMate for Electronics Repair Businesses',
        url: 'https://memate.com.au/industries/software-for-electronic-repair-businesses',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Business management software for Australian electronics repair businesses. Manage quotes, repair jobs, customers and invoicing in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/industries/software-for-electronic-repair-businesses#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Electronics repair businesses in Australia',
        },
        knowsAbout: [
          'Electronics repair shop software',
          'Repair job tracking software',
          'Electronics repair quoting and invoicing',
          'Customer management for repair shops',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id':
            'https://memate.com.au/industries/software-for-electronic-repair-businesses#offer-trial',
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
        <ElectronicPage />
      </AppWrapper>
    </>
  );
}