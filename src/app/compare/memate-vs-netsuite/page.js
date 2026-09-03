// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ServicesNetsuitePage from '../../../page-components/memate-vs-netsuite';

export const metadata = {
  title: 'MeMate vs NetSuite Comparison | Make the Right Pick | MeMate',
  description: 'Discover how MeMate stacks up against NetSuite. Compare features, pricing & benefits—see why MeMate is the smarter choice. Start your journey today! Visit now!',
  openGraph: {
    title: 'MeMate vs NetSuite Comparison | Make the Right Pick | MeMate',
    description: 'Discover how MeMate stacks up against NetSuite. Compare features, pricing & benefits—see why MeMate is the smarter choice. Start your journey today! Visit now!',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-netsuite',
  },
}

export default function ServicesNetsuite() {
  return (
    // <AppWrapper>
      <ServicesNetsuitePage />   
    // </AppWrapper>
  );
}