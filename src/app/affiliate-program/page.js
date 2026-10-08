// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import AffiliateProgramPage from '../../page-components/affiliate-program';

export const metadata = {
  title: 'Refer & Earn | AI-Driven SaaS Growth Partners | MeMate',
  description: 'Join MeMate’s refer and earn program to grow revenue, get exclusive benefits & support. Refer your friends and earn rewards— apply now and start earning and growing with us.',
  openGraph: {
    title: 'Refer & Earn | AI-Driven SaaS Growth Partners | MeMate',
    description: 'Join MeMate’s refer and earn program to grow revenue, get exclusive benefits & support. Refer your friends and earn rewards— apply now and start earning and growing with us.',
  },
  alternates: {
    canonical: 'https://memate.com.au/affiliate-program',
  },
}


export default function ReferAndEarn() {
  return (
    // <AppWrapper>
      <AffiliateProgramPage />  
    // </AppWrapper>
  );
}