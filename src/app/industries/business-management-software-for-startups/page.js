import AppWrapper from '../../../components/AppWrapper';
import StartupsPage from '../../../page-components/startups';

export const metadata = {
  title: 'All-in-One Startup Management Platform | MeMate',
  description:
    'Manage your startup with MeMate — CRM, project management tools for startups, workflow software & invoicing in one all-in-one software solution.',
  openGraph: {
    title: 'All-in-One Startup Management Platform | MeMate',
    description:
      'Manage your startup with MeMate — CRM, project management tools for startups, workflow software & invoicing in one all-in-one software solution.',
    url: 'https://memate.com.au/industries/business-management-software-for-startups',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical:
      'https://memate.com.au/industries/business-management-software-for-startups',
  },
};

export default function Startups() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/industries/business-management-software-for-startups#webpage',
        url: 'https://memate.com.au/industries/business-management-software-for-startups',
        name: 'All-in-One Startup Management Platform | MeMate',
        description:
          'Manage your startup with MeMate — CRM, project management tools for startups, workflow software & invoicing in one all-in-one software solution.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/industries/business-management-software-for-startups#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/industries/business-management-software-for-startups#software',
        name: 'MeMate for Startups',
        url: 'https://memate.com.au/industries/business-management-software-for-startups',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'All-in-one business management software for Australian startups. CRM, project management, workflows and invoicing in one platform.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/industries/business-management-software-for-startups#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Startups in Australia',
        },
        knowsAbout: [
          'Startup management software',
          'CRM for startups',
          'Project management for startups',
          'Startup invoicing software',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id':
            'https://memate.com.au/industries/business-management-software-for-startups#offer-trial',
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
        <StartupsPage />
      </AppWrapper>
    </>
  );
}