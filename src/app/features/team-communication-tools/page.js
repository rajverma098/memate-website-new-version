// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import CommunicationPage from '../../../page-components/communication';

export const metadata = {
  title: 'Team Communication Software & Tools for Business | meMate',
    description: "Improve team communication with meMate's team communication software. Chat, assign tasks, organise conversations, and keep everyone connected in one place.",
  openGraph: {
    title: 'Team Communication Software & Tools for Business | meMate',
    description: "Improve team communication with meMate's team communication software. Chat, assign tasks, organise conversations, and keep everyone connected in one place.",
},
  alternates: {
    canonical: 'https://memate.com.au/features/team-communication-tools',
  },
}

export default function Communication() {
  return (
    // <AppWrapper>
      <CommunicationPage />         
    // </AppWrapper>
  );
}