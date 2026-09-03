// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import FeaturesPage from '../../page-components/features';

export const metadata = {
  title: 'Our Features | Business Management Software | MeMate',
  description: 'Explore MeMate’s business management software features — invoicing, quoting, CRM, scheduling, and team management tools to grow your business. Visit us now!',
  openGraph: {
    title: 'Our Features | Business Management Software | MeMate',
    description: 'Explore MeMate’s business management software features — invoicing, quoting, CRM, scheduling, and team management tools to grow your business. Visit us now!',
  },
  alternates: {
    canonical: 'https://memate.com.au/features',
  },
}

export default function Features() {
  return (
    // <AppWrapper>
      <FeaturesPage />
    // </AppWrapper>
  );
}