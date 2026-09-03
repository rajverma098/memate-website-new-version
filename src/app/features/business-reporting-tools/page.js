// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ReportsPage from '../../../page-components/reports';

export const metadata = {
  title: 'Business Reporting Software | MeMate Performance Tools',
  description: 'Get real-time insights with MeMate’s business reporting software tools. Track performance, manage finances, and grow your Aussie small & medium business today.',
  openGraph: {
    title: 'Business Reporting Software | MeMate Performance Tools',
    description: 'Get real-time insights with MeMate’s business reporting software tools. Track performance, manage finances, and grow your Aussie small & medium business today.',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/business-reporting-tools',
  },
}


export default function Reports() {
  return (
    // <AppWrapper>
      <ReportsPage />   
    // </AppWrapper>
  );
}