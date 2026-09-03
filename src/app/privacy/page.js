// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import PrivacyPage from '../../page-components/privacy';

export const metadata = {
  title: 'Privacy Policy | MeMate | Data Protection & Security',
  description: 'Stay informed with MeMate’s Privacy Policy. Learn how we protect your data and ensure transparency. Read now for peace of mind! Stay secure & explore today.',
  openGraph: {
    title: 'Privacy Policy | MeMate | Data Protection & Security',
    description: 'Stay informed with MeMate’s Privacy Policy. Learn how we protect your data and ensure transparency. Read now for peace of mind! Stay secure & explore today.',
  },
   alternates: {
    canonical: 'https://memate.com.au/privacy',
  },
}


export default function Privacy() {
  return (
    // <AppWrapper>
      <PrivacyPage /> 
    // </AppWrapper>
  );
}