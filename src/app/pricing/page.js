import PricingPage from '../../page-components/pricing';

export const metadata = {
  title: 'meMate Pricing | All-in-One Business Software for Australian SMEs',
  description:
    'Simple pricing from $99.85/month. CRM, quotes, jobs, staff, contractors and invoicing in one app. 14-day free trial.',
  alternates: {
    canonical: 'https://memate.com.au/pricing',
  },
  openGraph: {
    title: 'meMate Pricing | All-in-One Business Software for Australian SMEs',
    description:
      'Simple pricing from $99.85/month. CRM, quotes, jobs, staff, contractors and invoicing in one app. 14-day free trial.',
    url: 'https://memate.com.au/pricing',
    siteName: 'MeMate',
    type: 'website',
    images: [
      {
        url: 'https://memate-website.s3.ap-southeast-2.amazonaws.com/pricing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MeMate business management software pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'meMate Pricing | All-in-One Business Software for Australian SMEs',
    description:
      'Simple pricing from $99.85/month. CRM, quotes, jobs, staff, contractors and invoicing in one app. 14-day free trial.',
    images: ['https://memate-website.s3.ap-southeast-2.amazonaws.com/pricing-og.jpg'],
  },
};

export default function Pricing() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://memate.com.au/pricing#webpage',
        url: 'https://memate.com.au/pricing',
        name: 'meMate Pricing | All-in-One Business Software for Australian SMEs',
        description:
          'Simple pricing from $99.85/month. CRM, quotes, jobs, staff, contractors and invoicing in one app. 14-day free trial.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: { '@id': 'https://memate.com.au/pricing#product' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['Product', 'SoftwareApplication'],
        '@id': 'https://memate.com.au/pricing#product',
        name: 'meMate',
        description:
          'meMate is all-in-one, cloud-based business management software for Australian small and medium-sized service businesses. One base plan plus optional add-ons for job scheduling, shifts, timesheets, employee and contractor management, enquiries, assets and multiple locations.',
        brand: { '@id': 'https://memate.com.au/#organization' },
        image: { '@id': 'https://memate.com.au/#logo' },
        url: 'https://memate.com.au/pricing',
        mainEntityOfPage: { '@id': 'https://memate.com.au/pricing#webpage' },
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        offers: {
          '@type': 'Offer',
          '@id': 'https://memate.com.au/pricing#offer-business',
          name: 'meMate Business (base plan)',
          description:
            'The base plan: clients, suppliers, quotes, projects, invoicing, expenses, real-time profit, reports and team chat. Includes 2 desktop users. No tiers, no lock-in; add-ons can be switched on or off any month.',
          price: '99.85',
          priceCurrency: 'AUD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '99.85',
            priceCurrency: 'AUD',
            valueAddedTaxIncluded: true,
            billingDuration: 'P1M',
            unitText: 'per month',
          },
          url: 'https://memate.com.au/pricing',
          availability: 'https://schema.org/InStock',
          seller: { '@id': 'https://memate.com.au/#organization' },
          addOn: [
            {
              '@type': 'Offer',
              '@id': 'https://memate.com.au/pricing#addon-work',
              name: 'meMate Work',
              description:
                'Job scheduling, shifts, timesheets, and employee and contractor management. Includes 5 mobile app users.',
              price: '62.32',
              priceCurrency: 'AUD',
              url: 'https://memate.com.au/pricing',
              availability: 'https://schema.org/InStock',
            },
            {
              '@type': 'Offer',
              '@id': 'https://memate.com.au/pricing#addon-enquiries',
              name: 'Enquiries',
              description:
                'Every enquiry lands in one inbox and turns into a quote in a click.',
              price: '20.63',
              priceCurrency: 'AUD',
              url: 'https://memate.com.au/pricing',
              availability: 'https://schema.org/InStock',
            },
            {
              '@type': 'Offer',
              '@id': 'https://memate.com.au/pricing#addon-assets',
              name: 'Assets',
              description:
                'Track tools, vehicles and equipment, with service dates.',
              price: '9.85',
              priceCurrency: 'AUD',
              url: 'https://memate.com.au/pricing',
              availability: 'https://schema.org/InStock',
            },
            {
              '@type': 'Offer',
              '@id': 'https://memate.com.au/pricing#addon-desktop-user',
              name: 'Additional desktop user',
              description: 'Extra desktop (web) user for office staff.',
              price: '14.77',
              priceCurrency: 'AUD',
              url: 'https://memate.com.au/pricing',
              availability: 'https://schema.org/InStock',
            },
            {
              '@type': 'Offer',
              '@id': 'https://memate.com.au/pricing#addon-mobile-user',
              name: 'Additional mobile app user',
              description:
                'Extra iOS/Android app user for crews and contractors.',
              price: '3.18',
              priceCurrency: 'AUD',
              url: 'https://memate.com.au/pricing',
              availability: 'https://schema.org/InStock',
            },
            {
              '@type': 'Offer',
              '@id': 'https://memate.com.au/pricing#addon-location',
              name: 'Additional location',
              description: 'Run every branch from one account.',
              price: '45.85',
              priceCurrency: 'AUD',
              url: 'https://memate.com.au/pricing',
              availability: 'https://schema.org/InStock',
            },
          ],
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
      <PricingPage />
    </>
  );
}