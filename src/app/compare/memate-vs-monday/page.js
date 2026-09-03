// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateVsMondayPage from '../../../page-components/memate-vs-monday';

export const metadata = {
  title: 'Compare MeMate vs Monday | Save More, Do Less Accounting',
  description: 'Compare MeMate vs Monday—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
 alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-monday',
  },
  robots: {
    index: false,
    follow: false,
  },

 openGraph: {
    title: 'Compare MeMate vs Monday | Save More, Do Less Accounting',
    description: 'Compare MeMate vs Monday—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  },
};

export default function MemateVsMonday() {
  return (
    // <AppWrapper>
      <MemateVsMondayPage  />  
    // </AppWrapper>
  );
}