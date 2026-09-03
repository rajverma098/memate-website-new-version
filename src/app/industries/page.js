// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import IndustriesPage from '../../page-components/industries';

export const metadata = {
  title: 'MeMate Business Software by Industry for Aussie SMEs',
  description: 'MeMate provides Aussie ERP by industry—software for tradies, services, retail, and real estate with field service & job management tools.',
  openGraph: {
    title: 'MeMate Business Software by Industry for Aussie SMEs',
    description: 'MeMate provides Aussie ERP by industry—software for tradies, services, retail, and real estate with field service & job management tools.',
  },
   alternates: {
    canonical: 'https://memate.com.au/industries',
  },
}


export default function Industries() {
  return (
    // <AppWrapper>
      <IndustriesPage />
    // </AppWrapper>
  );
}