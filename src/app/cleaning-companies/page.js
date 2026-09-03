// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import CleaningBusinessPage from '../../page-components/cleaning-companies';

export const metadata = {
  title: 'Cleaning Business Software | Manage Jobs & Teams | meMate',
  description: 'Streamline your cleaning business with meMate, cleaning business software for jobs, scheduling, teams, quotes, and invoicing. Start your free trial today.',
  openGraph: {
    title: 'Cleaning Business Software | Manage Jobs & Teams | meMate',
    description: 'Streamline your cleaning business with meMate, cleaning business software for jobs, scheduling, teams, quotes, and invoicing. Start your free trial today.',
  },
  alternates: {
    canonical: 'https://memate.com.au/cleaning-companies',
  },
}


export default function CleaningBusiness() {
  return (
    // <AppWrapper>
      <CleaningBusinessPage />  
    // </AppWrapper>
  );
}