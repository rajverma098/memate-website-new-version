// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import RemovalistsPage from '../../page-components/removalists';

export const metadata = {
  title: 'Removalist Software for Enquiries, Quotes & Jobs | meMate',
  description: 'Manage removalist enquiries, quotes, job scheduling, invoicing, and teams in one place with meMate. Streamline your business and start your free trial today.',
  openGraph: {
    title: 'Removalist Software for Enquiries, Quotes & Jobs | meMate',
    description: 'Manage removalist enquiries, quotes, job scheduling, invoicing, and teams in one place with meMate. Streamline your business and start your free trial today.',
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