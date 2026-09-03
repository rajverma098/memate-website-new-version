// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import PartnerProgramPageNew from '../../page-components/partner-program-new';

export const metadata = {
  title: 'Partner Program New | AI-Driven SaaS Growth Partners | MeMate',
  description: 'Join MeMate’s partner program to grow revenue, get exclusive benefits & support. Partner with us for success— apply now and start earning and growing with us.',
  openGraph: {
    title: 'Partner Program New | AI-Driven SaaS Growth Partners | MeMate',
    description: 'Join MeMate’s partner program to grow revenue, get exclusive benefits & support. Partner with us for success— apply now and start earning and growing with us.',
  },
  alternates: {
    canonical: 'https://memate.com.au/partner-program-new',
  },
}


export default function PartNerProgramNew() {
  return (
    // <AppWrapper>
      <PartnerProgramPageNew />  
    // </AppWrapper>
  );
}