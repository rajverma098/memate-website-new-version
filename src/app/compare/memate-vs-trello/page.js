// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateVsTrelloPage from '../../../page-components/memate-vs-trello';

export const metadata = {
title: 'Compare MeMate vs Trello | Save More, Do Less Accounting',
  description: 'Compare MeMate vs Trello—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  robots: {
    index: false,
    follow: false,
  },
alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-trello',
  },
  openGraph: {
    title: 'Compare MeMate vs Trello | Save More, Do Less Accounting',
    description: 'Compare MeMate vs Trello—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  },
};

export default function MemateVsTrello() {
  return (
    // <AppWrapper>
      <MemateVsTrelloPage />  
    // </AppWrapper>
  );
}