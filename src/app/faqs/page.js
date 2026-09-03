// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateFaqsPage from '../../page-components/memate-faqs';

export const metadata = {
  title: 'MeMate FAQs | Business Management Software FAQs Guide',
  description: 'Find answers about MeMate business management software — features, onboarding & support. Quick FAQs for Aussie businesses switching to MeMate. Visit us now!',
  openGraph: {
    title: 'MeMate FAQs | Business Management Software FAQs Guide',
    description: 'Find answers about MeMate business management software — features, onboarding & support. Quick FAQs for Aussie businesses switching to MeMate. Visit us now!',
  },
  alternates: {
    canonical: 'https://memate.com.au/faqs',
  },
}

export default function MemateFaqs() {
  return (
    // <AppWrapper>
      <MemateFaqsPage />
    // </AppWrapper>
  );
}