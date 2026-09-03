// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MeMateVsAirtablePage from '../../../page-components/meMate-vs-airtable';

export const metadata = {
  title: 'Compare MeMate vs Airtable | Save More, Do Less Accounting',
  description: 'Compare MeMate vs Airtable—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  openGraph: {
    title: 'Compare MeMate vs Airtable | Save More, Do Less Accounting',
    description: 'Compare MeMate vs Airtable—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/meMate-vs-airtable',
  },
  robots: {
    index: false,
    follow: false,
  },

};

export default function MeMateVsAirtable() {
  return (
    // <AppWrapper>
      <MeMateVsAirtablePage /> 
    // </AppWrapper>
  );
}