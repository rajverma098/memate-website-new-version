// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import CalendarPage from '../../../page-components/calendar';

export const metadata = {
  title: 'MeMate Calendar & Timeline Management Software Solutions',
  description: 'Boost productivity with MeMate’s Calendar & Timeline Management Software. Stay organized, streamline projects & take control today! Visit our website now!',
  alternates: {
    canonical: 'https://memate.com.au/features/calendar-timeline-management-software',
  },
}

export default function Calendar() {
  return (
    // <AppWrapper>
      <CalendarPage />  
    // </AppWrapper>
  );
}