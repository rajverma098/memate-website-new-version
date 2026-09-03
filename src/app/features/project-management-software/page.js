// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ProjectManagementPage from '../../../page-components/project-management';

export const metadata = {
  title: 'Project Management Software for Aussie Businesses | MeMate',
  description: 'Manage projects, tasks & teams with ease. MeMate’s project management software helps Australian SMEs with tools, systems & timelines that drive success. Try it.',
  openGraph: {
    title: 'Project Management Software for Aussie Businesses | MeMate',
    description: 'Manage projects, tasks & teams with ease. MeMate’s project management software helps Australian SMEs with tools, systems & timelines that drive success. Try it.',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/project-management-software',
  },
}


export default function ProjectManagement() {
  return (
    // <AppWrapper>
      <ProjectManagementPage />
    // </AppWrapper>
  );
}