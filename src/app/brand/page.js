// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import BrandPage from '../../page-components/brand';

export const metadata = {
  title: 'MeMate Brand Assets | Logo Download & Media Kit Guidelines',
  description: 'Download official MeMate brand assets like, logos, colours & branding guidelines. Get our media kit for press, legalvisions, and business software brand kit needs.',
  openGraph: {
    title: 'MeMate Brand Assets | Logo Download & Media Kit Guidelines',
    description: 'Download official MeMate brand assets like, logos, colours & branding guidelines. Get our media kit for press, legalvisions, and business software brand kit needs.',
  },
  alternates: {
    canonical: 'https://memate.com.au/brand',
  },
}


export default function Brand() {
  return (
    // <AppWrapper>
      <BrandPage />
    // </AppWrapper>
  );
}