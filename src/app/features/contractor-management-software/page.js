// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ContractorPage from '../../../page-components/contractor';

export const metadata = {
  title: 'Contractor Management Software for Aussie Business | MeMate',
  description: 'MeMate contractor management software helps Aussie businesses to assign jobs, track progress, and manage teams with powerful contractor software tools.',
  openGraph: {
    title: 'Contractor Management Software for Aussie Business | MeMate',
    description: 'MeMate contractor management software helps Aussie businesses to assign jobs, track progress, and manage teams with powerful contractor software tools.',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/contractor-management-software',
  },
}


export default function Contractor() {
  return (
    // <AppWrapper>
      <ContractorPage />  
    // </AppWrapper>
  );
}