import AppWrapper from '../../../components/AppWrapper';
import IndustryPage from '../../../page-components/industry-page';

export const metadata = {
  title: 'Business Software for Creative Agencies Australia | meMate',
  description:
    'Streamline projects, clients, quotes, invoicing and team workflows with business software for creative agencies built for growing Australian businesses.',
  openGraph: {
    title: 'Business Software for Creative Agencies Australia | meMate',
    description:
      'Streamline projects, clients, quotes, invoicing and team workflows with business software for creative agencies built for growing Australian businesses.',
    url: 'https://memate.com.au/industries/business-software-for-creative-agencies',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical:
      'https://memate.com.au/industries/business-software-for-creative-agencies',
  },
};

export default function Industry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/industries/business-software-for-creative-agencies#webpage',
        url: 'https://memate.com.au/industries/business-software-for-creative-agencies',
        name: 'Business Software for Creative Agencies Australia | meMate',
        description:
          'Streamline projects, clients, quotes, invoicing and team workflows with business software for creative agencies built for growing Australian businesses.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/industries/business-software-for-creative-agencies#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/industries/business-software-for-creative-agencies#software',
        name: 'MeMate for Creative Agencies',
        url: 'https://memate.com.au/industries/business-software-for-creative-agencies',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Business management software for Australian creative agencies. Manage projects, clients, quotes, invoicing and team workflows in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/industries/business-software-for-creative-agencies#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Creative agencies in Australia',
        },
        knowsAbout: [
          'Creative agency software',
          'Project management for agencies',
          'Client management for agencies',
          'Agency quoting and invoicing',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id':
            'https://memate.com.au/industries/business-software-for-creative-agencies#offer-trial',
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
        <IndustryPage />
      </AppWrapper>
    </>
  );
}