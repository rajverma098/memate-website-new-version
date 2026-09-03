// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ServicesVsJiraPage from '../../../page-components/memate-vs-jira';

export const metadata = {
  title: 'Compare MeMate vs Jira | Smarter Project Management Tools',
  description: 'Compare MeMate vs Jira in project management: discover features, benefits, pricing and usability. See why teams switch to MeMate today—explore the comparison.',
  openGraph: {
    title: 'Compare MeMate vs Jira | Smarter Project Management Tools',
    description: 'Compare MeMate vs Jira in project management: discover features, benefits, pricing and usability. See why teams switch to MeMate today—explore the comparison.',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-jira',
  },
}

export default function ServicesVsJira() {
  return (
    // <AppWrapper>
      <ServicesVsJiraPage />
    // </AppWrapper>
  );
}