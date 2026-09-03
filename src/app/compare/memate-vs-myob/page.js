// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateVsMyobPage from '../../../page-components/memate-vs-myob';
export const metadata = {
 title: 'Compare MeMate vs Myob | Save More, Do Less Accounting',
  description: 'Compare MeMate vs Myob—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  robots: {
    index: false,
    follow: false,
  },
 alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-myob',
  },
 openGraph: {
    title: 'Compare MeMate vs Myob | Save More, Do Less Accounting',
    description: 'Compare MeMate vs Myob—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  },
};

export default function MemateVsMyob() {
  return (
    // <AppWrapper>
      <MemateVsMyobPage />  
    // </AppWrapper>
  );
}