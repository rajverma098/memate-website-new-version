// 'use client';
// import AppWrapper from '../../components/AppWrapper';
import AboutMematePage from '../../page-components/about-memate';

export const metadata = {
  title: 'About Us | MeMate | All-in-One Business Management Software',
  description: 'Learn about MeMate, Australia’s all-in-one business platform empowering SMEs with CRM, ERP, and project management tools to simplify business management.',
  openGraph: {
    title: 'About Us | MeMate | All-in-One Business Management Software',
    description: 'Learn about MeMate, Australia’s all-in-one business platform empowering SMEs with CRM, ERP, and project management tools to simplify business management.',
  },
  alternates: {
    canonical: 'https://memate.com.au/about',
  },
};

export default function About() {
  return (
    // <AppWrapper>
      <AboutMematePage />
    // </AppWrapper>
  );
}