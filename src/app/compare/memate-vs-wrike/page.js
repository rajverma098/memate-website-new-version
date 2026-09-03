// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateVsWrikePage from '../../../page-components/memate-vs-wrike';

export const metadata = {
title: 'Compare MeMate vs Wrike | Save More, Do Less Accounting',
  description: 'Compare MeMate vs Wrike—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: 'Compare MeMate vs Wrike | Save More, Do Less Accounting',
    description: 'Compare MeMate vs Wrike—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  },
};

export default function MemateVsWrike() {
  return (
    // <AppWrapper>
      <MemateVsWrikePage /> 
    // </AppWrapper>
  );
}