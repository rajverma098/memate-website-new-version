// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ScheduleJobsPage from '../../../page-components/schedule-jobs';

export const metadata = {
  title: 'Job Management Software for Smarter Workflows | meMate',
  description: 'Manage, schedule, and track jobs with meMate job management software. Use a powerful job management app and job tracking software for your team. Try meMate now.',
  openGraph: {
    title: 'Job Management Software for Smarter Workflows | meMate',
    description: 'Manage, schedule, and track jobs with meMate job management software. Use a powerful job management app and job tracking software for your team. Try meMate now.',
  },
    alternates: {
    canonical: 'https://memate.com.au/features/job-management-software',
  },
}


export default function ScheduleJobs() {
  return (
    // <AppWrapper>
      <ScheduleJobsPage />   
    // </AppWrapper>
  );
}