// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import CalculatorsPage from '../../../page-components/calculators';
export const metadata = {
  title: 'MeMate Business Quote Calculator | Instant Cost Estimates',
  description: 'Simplify project costs with MeMate’s Business Quote Calculator. Get instant, accurate estimates and streamline your workflow today! try our services now!',
  alternates: {
    canonical: 'https://memate.com.au/features/business-quote-calculator',
  },
}

export default function Calculators() {
  return (
    // <AppWrapper>
      <CalculatorsPage />  
    // </AppWrapper>
  );
}