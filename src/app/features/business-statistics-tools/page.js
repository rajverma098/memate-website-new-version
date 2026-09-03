// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import StatisticPage from '../../../page-components/statistic';

export const metadata = {
 title: 'MeMate Business Statistics Tools | Boost Your Insights',
  description: 'Unlock powerful business statistics tools with MeMate. Track growth, boost performance & make smarter decisions. Try MeMate today! For more details visit now.',

  openGraph: {
 title: 'MeMate Business Statistics Tools | Boost Your Insights',
  description: 'Unlock powerful business statistics tools with MeMate. Track growth, boost performance & make smarter decisions. Try MeMate today! For more details visit now.',

  },
  robots: {
    index: false,
    follow: false,
  },
 alternates: {
    canonical: 'https://memate.com.au/features/business-statistics-tools',
  },
};
export default function Statistic() {
  return (
    // <AppWrapper>
      <StatisticPage /> 
    // </AppWrapper>
  );
}