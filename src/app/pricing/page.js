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
  return (
    // <AppWrapper>
      <PricingPage /> 
    // </AppWrapper>
  );
}