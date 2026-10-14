import AppWrapper from '../../../components/AppWrapper';
import AutomotivePage from '../../../page-components/automotive';

export const metadata = {
  title: 'Automotive Workshop Software for Aussie Businesses | MeMate',
  description:
    'Run your auto repair shop with MeMate — smart Aussie automotive business management software to manage jobs, quotes, schedules & payments. Visit our website!',
  openGraph: {
    title: 'Automotive Workshop Software for Aussie Businesses | MeMate',
    description:
      'Run your auto repair shop with MeMate — smart Aussie automotive business management software to manage jobs, quotes, schedules & payments. Visit our website!',
    url: 'https://memate.com.au/industries/business-software-for-automotive-industry',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical:
      'https://memate.com.au/industries/business-software-for-automotive-industry',
  },
};

export default function Automotive() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/industries/business-software-for-automotive-industry#webpage',
        url: 'https://memate.com.au/industries/business-software-for-automotive-industry',
        name: 'Automotive Workshop Software for Aussie Businesses | MeMate',
        description:
          'Run your auto repair shop with MeMate — smart Aussie automotive business management software to manage jobs, quotes, schedules & payments. Visit our website!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/industries/business-software-for-automotive-industry#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/industries/business-software-for-automotive-industry#software',
        name: 'MeMate for Automotive Businesses',
        url: 'https://memate.com.au/industries/business-software-for-automotive-industry',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Business management software for Australian automotive workshops and repair shops. Manage jobs, quotes, schedules and payments in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/industries/business-software-for-automotive-industry#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType:
            'Automotive workshops and repair shops in Australia',
        },
        knowsAbout: [
          'Automotive workshop software',
          'Auto repair shop management software',
          'Automotive job scheduling',
          'Automotive quoting and invoicing',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id':
            'https://memate.com.au/industries/business-software-for-automotive-industry#offer-trial',
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
        <AutomotivePage />
      </AppWrapper>
    </>
  );
}