// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import IndustryPage from '../../../page-components/industry-page';

export const metadata = {
  title: 'Business Software for Creative Agencies Australia | meMate',
  description: 'Streamline projects, clients, quotes, invoicing and team workflows with business software for creative agencies built for growing Australian businesses.',
  openGraph: {
    title: 'Business Software for Creative Agencies Australia | meMate',
    description: 'Streamline projects, clients, quotes, invoicing and team workflows with business software for creative agencies built for growing Australian businesses.',
  },
  alternates: {
    canonical: 'https://memate.com.au/industries/business-software-for-creative-agencies',
  },
}


export default function Industry() {
  return (
    <AppWrapper>
      <IndustryPage />   
    </AppWrapper>
  );
}