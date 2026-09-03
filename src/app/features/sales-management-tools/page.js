// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import FeaturePage from '../../../page-components/feature-page'; 

export const metadata = {
  title: 'Sales Management Software for Australian Business | MeMate',
  description: 'MeMate offers sales management software for Aussie businesses—CRM sales tools, sales pipeline management, and a lead tracking system in one.',
  openGraph: {
    title: 'Sales Management Software for Australian Business | MeMate',
    description: 'MeMate offers sales management software for Aussie businesses—CRM sales tools, sales pipeline management, and a lead tracking system in one.',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/sales-management-tools',
  },
}
export default function Feature() {
  return (
    // <AppWrapper>
      <FeaturePage /> 
    // </AppWrapper>
  );
}