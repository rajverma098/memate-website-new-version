// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ResourcesPage from '../../page-components/resources';

export const metadata = {
  title: 'Business Resources & Guides for Growth | MeMate',
  description: 'Explore MeMate resources to help your business grow. Find guides, tools, and insights designed to streamline work and boost productivity.',
  openGraph: {
    title: 'Business Resources & Guides for Growth | MeMate',
    description: 'Explore MeMate resources to help your business grow. Find guides, tools, and insights designed to streamline work and boost productivity.',
  },
  alternates: {
    canonical: 'https://memate.com.au/resources',
  },
}


export default function Resources() {
  return (
    // <AppWrapper>
      <ResourcesPage />
    // </AppWrapper>
  );
}