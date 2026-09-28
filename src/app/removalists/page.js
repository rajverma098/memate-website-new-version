// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import RemovalistsPage from '../../page-components/removalists';

export const metadata = {
  title: 'Cleaning Business Software | Manage Jobs & Teams | meMate',
  description: 'Streamline your cleaning business with meMate, cleaning business software for jobs, scheduling, teams, quotes, and invoicing. Start your free trial today.',
  openGraph: {
    title: 'Cleaning Business Software | Manage Jobs & Teams | meMate',
    description: 'Streamline your cleaning business with meMate, cleaning business software for jobs, scheduling, teams, quotes, and invoicing. Start your free trial today.',
  },
  alternates: {
    canonical: 'https://memate.com.au/removalists',
  },
}


export default function Removalists() {
  return (
    // <AppWrapper>
      <RemovalistsPage />  
    // </AppWrapper>
  );
}