// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import PricingPage from '../../page-components/pricing';

export const metadata = {
  title: 'MeMate Pricing | Affordable ERP & Business Software Solution',
  description: 'Discover MeMate pricing for SMEs in Australia. Affordable ERP, CRM & project management software with transparent costs and no hidden fees. Get a quote now!',
  openGraph: {
    title: 'MeMate Pricing | Affordable ERP & Business Software Solution',
    description: 'Discover MeMate pricing for SMEs in Australia. Affordable ERP, CRM & project management software with transparent costs and no hidden fees. Get a quote now!',
  },
  alternates: {
    canonical: 'https://memate.com.au/pricing',
  },
}

export default function Pricing() {
  return (
    // <AppWrapper>
      <PricingPage />
    // </AppWrapper>
  );
}