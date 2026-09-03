// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import MultiLocationPage from '../../../page-components/multi-location';

export const metadata = {
  title: 'Multi-Location Management & Scheduling Software | MeMate',
  description: 'MeMate multi location software simplifies operations across sites. Manage staff, jobs, and schedules with our multi location management tools.',
  openGraph: {
    title: 'Multi-Location Management & Scheduling Software | MeMate',
    description: 'MeMate multi location software simplifies operations across sites. Manage staff, jobs, and schedules with our multi location management tools.',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/multi-location-management',
  },
}


export default function MultiLocation() {
  return (
    // <AppWrapper>
      <MultiLocationPage />  
    // </AppWrapper>
  );
}