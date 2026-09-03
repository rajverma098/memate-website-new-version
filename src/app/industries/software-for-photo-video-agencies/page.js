// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import PhotoPage from '../../../page-components/photo-video-agency';

export const metadata = {
  title: 'Studio Management Software for Creatives | MeMate',
  description: 'All-in-one photography business software by MeMate. Manage clients, invoices, video production projects, and studio schedules without juggling tools',
  openGraph: {
    title: 'Studio Management Software for Creatives | MeMate',
    description: 'All-in-one photography business software by MeMate. Manage clients, invoices, video production projects, and studio schedules without juggling tools',
  },
   alternates: {
    canonical: 'https://memate.com.au/industries/software-for-photo-video-agencies',
  },
}


export default function Photo() {
  return (
    <AppWrapper>
      <PhotoPage /> 
     </AppWrapper>
  );
}