import AppWrapper from '../../../components/AppWrapper';
import PhotoPage from '../../../page-components/photo-video-agency';

export const metadata = {
  title: 'Studio Management Software for Creatives | MeMate',
  description:
    'All-in-one photography business software by MeMate. Manage clients, invoices, video production projects, and studio schedules without juggling tools',
  openGraph: {
    title: 'Studio Management Software for Creatives | MeMate',
    description:
      'All-in-one photography business software by MeMate. Manage clients, invoices, video production projects, and studio schedules without juggling tools',
    url: 'https://memate.com.au/industries/software-for-photo-video-agencies',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical:
      'https://memate.com.au/industries/software-for-photo-video-agencies',
  },
};

export default function Photo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/industries/software-for-photo-video-agencies#webpage',
        url: 'https://memate.com.au/industries/software-for-photo-video-agencies',
        name: 'Studio Management Software for Creatives | MeMate',
        description:
          'All-in-one photography business software by MeMate. Manage clients, invoices, video production projects, and studio schedules without juggling tools',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/industries/software-for-photo-video-agencies#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/industries/software-for-photo-video-agencies#software',
        name: 'MeMate for Photo & Video Agencies',
        url: 'https://memate.com.au/industries/software-for-photo-video-agencies',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'All-in-one business management software for Australian photo and video agencies. Manage clients, invoices, projects and studio schedules in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/industries/software-for-photo-video-agencies#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType:
            'Photography and video production agencies in Australia',
        },
        knowsAbout: [
          'Photography business software',
          'Video production management software',
          'Studio scheduling software',
          'Client and invoice management for creatives',
        ],
        isPartOf: { '@id': 'https://memate.com.au/#software' },
        offers: {
          '@type': 'Offer',
          '@id':
            'https://memate.com.au/industries/software-for-photo-video-agencies#offer-trial',
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
        <PhotoPage />
      </AppWrapper>
    </>
  );
}