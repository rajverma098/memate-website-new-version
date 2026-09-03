// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import JobApprovalPage from '../../../page-components/job-approval';

export const metadata = {
  title: 'Leading Job Approval Software | MeMate Workflow Tools',
  description: 'Track job progress, streamline workflow approvals, and get sign-offs faster. MeMate’s job approval software helps Aussie teams close the loop—no paperwork.',
  openGraph: {
    title: 'Leading Job Approval Software | MeMate Workflow Tools',
    description: 'Track job progress, streamline workflow approvals, and get sign-offs faster. MeMate’s job approval software helps Aussie teams close the loop—no paperwork.',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/job-approval-software',
  },
}

export default function JobApproval() {
  return (
    // <AppWrapper>
      <JobApprovalPage />  
    // </AppWrapper>
  );
}