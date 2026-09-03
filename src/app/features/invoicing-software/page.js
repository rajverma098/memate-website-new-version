// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import InvoicingPage from '../../../page-components/invoicing';

export const metadata = {
  title: 'Top Invoicing Software for Business in Australia | MeMate',
  description: 'Invoicing software by Memate for small business-featuring quoting, estimating, expense tracking & the best invoice software in Australia.',
  openGraph: {
    title: 'Top Invoicing Software for Business in Australia | MeMate',
    description: 'Invoicing software by Memate for small business-featuring quoting, estimating, expense tracking & the best invoice software in Australia.',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/invoicing-software',
  },
}

export default function Invoicing() {
  return (
    // <AppWrapper>
      <InvoicingPage />  
    // </AppWrapper>
  );
}