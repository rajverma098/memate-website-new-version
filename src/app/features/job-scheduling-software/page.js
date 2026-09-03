// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import SchedulingPage from '../../../page-components/scheduling';

export const metadata = {
   title: 'Job Scheduling Software | MeMate',
  description: 'Discover the best job scheduling software for your business. Streamline your job scheduling with MeMate.',
  openGraph: {
    title: 'Job Scheduling Software | MeMate',
  description: 'Discover the best job scheduling software for your business. Streamline your job scheduling with MeMate.',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/job-scheduling-software',
  },
  robots: {
    index: false,
    follow: false,
  },

};



export default function Scheduling() {
  return (
    // <AppWrapper>
      <SchedulingPage />
    // </AppWrapper>
  );
}