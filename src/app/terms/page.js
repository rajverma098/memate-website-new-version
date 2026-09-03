// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import TermsAndConditionsPage from '../../page-components/terms-and-conditions';
export const metadata = {
  title: 'MeMate Terms & Conditions | User Agreement & Policies',
  description: 'Read MeMate Terms & Conditions for safe, secure use. Stay informed about your rights, policies & privacy. Visit now and protect your experience with MeMate now.',
  openGraph: {
    title: 'MeMate Terms & Conditions | User Agreement & Policies',
    description: 'Read MeMate Terms & Conditions for safe, secure use. Stay informed about your rights, policies & privacy. Visit now and protect your experience with MeMate now.',
  },
   alternates: {
    canonical: 'https://memate.com.au/terms',
  },
}


export default function TermsAndConditions() {
  return (
    // <AppWrapper>
      <TermsAndConditionsPage />
    // </AppWrapper>
  );
}