// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ClientPage from '../../../page-components/client-management';

export const metadata = {
  title: 'Client Management Software for Better Workflows | meMate',
  description: 'Manage client information, jobs and workflows with meMate client management software. Organise client relationships and customer data in one place. Try it now.',
 alternates: {
    canonical: 'https://memate.com.au/features/client-management-software',
  },
  openGraph: {
   title: 'Client Management Software for Better Workflows | meMate',
  description: 'Manage client information, jobs and workflows with meMate client management software. Organise client relationships and customer data in one place. Try it now.',
  },
}

export default function Client() {
  return (
    // <AppWrapper>
      <ClientPage />     
    // </AppWrapper>
  );
}