// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateVsXeroPage from '../../../page-components/memate-vs-xero';

export const metadata = {
  title: 'MeMate vs Xero: Compare Business Software Solutions',
  description:
    'Compare MeMate vs Xero for Australian businesses. Explore features, workflows and key differences to find the right software for your needs.',

  robots: {
    index: false,
    follow: false,
  },
alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-xero',
  },
  openGraph: {
    title: 'MeMate vs Xero: Compare Business Software Solutions',
    description:
      'Compare MeMate vs Xero for Australian businesses. Explore features, workflows and key differences to find the right software for your needs.',
  },
};

export default function MemateVsXero() {
  return (
    // <AppWrapper>
      <MemateVsXeroPage />  
    // </AppWrapper>
  );
}