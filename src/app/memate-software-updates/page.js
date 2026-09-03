// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import SoftwareUpdatePage from '../../page-components/software-update-page';

export const metadata = {
  title: 'MeMate Software Updates | Latest Features & Improvements',
  description: 'Discover the latest MeMate software updates — new features, fixes, and improvements to help Australian businesses streamline operations and grow every day.',
  openGraph: {
    title: 'MeMate Software Updates | Latest Features & Improvements',
    description: 'Discover the latest MeMate software updates — new features, fixes, and improvements to help Australian businesses streamline operations and grow every day.',
  },
  alternates: {
    canonical: 'https://memate.com.au/memate-software-updates',
  },
}

export default function SoftwareUpdate() {
  return (
    // <AppWrapper>
      <SoftwareUpdatePage />
    // </AppWrapper>
  );
}