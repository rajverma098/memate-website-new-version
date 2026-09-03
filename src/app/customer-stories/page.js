// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import CustomerStoriesPage from '../../page-components/customer-stories-page';

export const metadata = {
  title: 'MeMate Client Success | Small Business Software Stories',
  description: 'See how Aussie SMEs succeed with MeMate. Customer stories, software testimonials, and real-world ERP use cases prove client success across industries.',
  openGraph: {
    title: 'MeMate Client Success | Small Business Software Stories',
    description: 'See how Aussie SMEs succeed with MeMate. Customer stories, software testimonials, and real-world ERP use cases prove client success across industries.',
  },
  alternates: {
    canonical: 'https://memate.com.au/customer-stories',
  },
}


export default function CustomerStories() {
  return (
    // <AppWrapper>
      <CustomerStoriesPage />
    // </AppWrapper>
  );
}