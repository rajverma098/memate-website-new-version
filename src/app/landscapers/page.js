// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import LandscapersPage from '../../page-components/landscapers';

export const metadata = {
  title: 'Landscapers Software for Enquiries, Quotes & Jobs | meMate',
  description: 'Manage landscapers enquiries, quotes, job scheduling, invoicing, and teams in one place with meMate. Streamline your business and start your free trial today.',
  openGraph: {
    title: 'Landscapers Software for Enquiries, Quotes & Jobs | meMate',
    description: 'Manage Landscapers enquiries, quotes, job scheduling, invoicing, and teams in one place with meMate. Streamline your business and start your free trial today.',
  },
  alternates: {
    canonical: 'https://memate.com.au/landscapers',
  },
}


export default function Landscapers() {
  return (
    // <AppWrapper>
      <LandscapersPage />  
    // </AppWrapper>
  );
}