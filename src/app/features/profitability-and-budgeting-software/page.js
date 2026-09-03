// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ProfitabilityAndBudgetingPage from '../../../page-components/profitability-and-budgeting'; 
export const metadata = {
  title: 'Budgeting & Profitability Software for Aussie SMEs | MeMate',
  description: 'See where you’re making money — and where you’re not. MeMate’s budgeting & profitability software helps Aussie businesses track jobs in real time. Call us now!',
  openGraph: {
    title: 'Budgeting & Profitability Software for Aussie SMEs | MeMate',
    description: 'See where you’re making money — and where you’re not. MeMate’s budgeting & profitability software helps Aussie businesses track jobs in real time. Call us now!',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/profitability-and-budgeting-software',
  },
}


export default function ProfitabilityAndBudgeting() {
  return (
    // <AppWrapper>
      <ProfitabilityAndBudgetingPage /> 
    // </AppWrapper>
  );
}