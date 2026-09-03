// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import AutomotivePage from '../../../page-components/automotive';

export const metadata = {
  title: 'Automotive Workshop Software for Aussie Businesses | MeMate',
  description: 'Run your auto repair shop with MeMate — smart Aussie automotive business management software to manage jobs, quotes, schedules & payments. Visit our website!',
  openGraph: {
    title: 'Automotive Workshop Software for Aussie Businesses | MeMate',
    description: 'Run your auto repair shop with MeMate — smart Aussie automotive business management software to manage jobs, quotes, schedules & payments. Visit our website!',
  },
  alternates: {
    canonical: 'https://memate.com.au/industries/business-software-for-automotive-industry',
  },
}


export default function Automotive() {
  return (
    <AppWrapper>
      <AutomotivePage /> 
    </AppWrapper>
  );
}