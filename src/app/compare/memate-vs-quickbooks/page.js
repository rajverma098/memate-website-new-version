// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ServicesVsQuickBooksPage from '../../../page-components/memate-vs-quickbooks';

export const metadata = {
  title: 'MeMate vs QuickBooks: Which Is Better for Your Business?',
  description: 'Compare MeMate vs QuickBooks for Australian businesses. Explore features, job management, invoicing and workflows to find the right software for you.',
  openGraph: {
    title: 'MeMate vs QuickBooks: Which Is Better for Your Business?',
    description: 'Compare MeMate vs QuickBooks for Australian businesses. Explore features, job management, invoicing and workflows to find the right software for you.',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-quickbooks',
  },
}

export default function ServicesVsQuickBooks() {
  return (
    // <AppWrapper>
      <ServicesVsQuickBooksPage />  
    // </AppWrapper>
  );
}