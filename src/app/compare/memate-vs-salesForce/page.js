// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateVsSalesForcebPage from '../../../page-components/memate-vs-salesForce';

export const metadata = {
 title: 'Compare MeMate vs SalesForceb | Save More, Do Less Accounting',
  description: 'Compare MeMate vs SalesForceb—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',

  robots: {
    index: false,
    follow: false,
  },
alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-salesForce',
  },
  openGraph: {
    title: 'Compare MeMate vs SalesForceb | Save More, Do Less Accounting',
    description: 'Compare MeMate vs SalesForceb—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  },
};

export default function MemateVsSalesForceb() {
  return (
    // <AppWrapper>
      <MemateVsSalesForcebPage /> 
    // </AppWrapper>
  );
}