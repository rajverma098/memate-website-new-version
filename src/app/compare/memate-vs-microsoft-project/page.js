// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ServicesVsMicrosoftPage from '../../../page-components/memate-vs-microsoft-project';

export const metadata = {
  title: 'MeMate vs Microsoft Project | Compare Smarter with MeMate',
  description: 'Compare MeMate vs Microsoft Project—see why MeMate is the smarter choice for project success. Explore features now and make the switch today! Start with us now!',
  openGraph: {
    title: 'MeMate vs Microsoft Project | Compare Smarter with MeMate',
    description: 'Compare MeMate vs Microsoft Project—see why MeMate is the smarter choice for project success. Explore features now and make the switch today! Start with us now!',
  },
  alternates: {
    canonical: 'https://memate.com.au/compare/memate-vs-microsoft-project',
  },
}

export default function ServicesVsMicrosoft() {
  return (
    // <AppWrapper>
      <ServicesVsMicrosoftPage /> 
    // </AppWrapper>
  );
}