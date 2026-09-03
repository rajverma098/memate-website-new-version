// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import ElectronicPage from '../../../page-components/electronic';

export const metadata = {
  title: 'Electronics Repair Shop Management Software | MeMate',
  description: 'Run your electronics repair business with MeMate. Quote jobs, track repairs, manage customers, and stay organized with our all-in-one software. Visit us now!',
  openGraph: {
    title: 'Electronics Repair Shop Management Software | MeMate',
    description: 'Run your electronics repair business with MeMate. Quote jobs, track repairs, manage customers, and stay organized with our all-in-one software. Visit us now!',
  },
   alternates: {
    canonical: 'https://memate.com.au/industries/software-for-electronic-repair-businesses',
  },
}


export default function Electronic() {
  return (
    <AppWrapper>
      <ElectronicPage /> 
     </AppWrapper>
  );
}