// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import AffiliateProgramPage from '../../page-components/affiliate-program';

export const metadata = {
  title: 'Partner Program | AI-Driven SaaS Growth Partners | MeMate',
  description: 'Join MeMate’s partner program to grow revenue, get exclusive benefits & support. Partner with us for success— apply now and start earning and growing with us.',
  openGraph: {
    title: 'Partner Program | AI-Driven SaaS Growth Partners | MeMate',
    description: 'Join MeMate’s partner program to grow revenue, get exclusive benefits & support. Partner with us for success— apply now and start earning and growing with us.',
  },
  alternates: {
    canonical: 'https://memate.com.au/affiliate-program',
  },
}


export default function PartNerProgram() {
  return (
    // <AppWrapper>
      <AffiliateProgramPage />  
    // </AppWrapper>
  );
}