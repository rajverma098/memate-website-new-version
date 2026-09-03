// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateWikiPage from '../../page-components/memate-wiki';

export const metadata = {
  title: 'Business Tips for Aussie SMEs | MeMate Wiki & Insights',
  description: 'MeMate Wiki offers Aussie SMEs growth insights, business operations advice, and productivity tips to help you choose the right business software.',
  openGraph: {
    title: 'Business Tips for Aussie SMEs | MeMate Wiki & Insights',
    description: 'MeMate Wiki offers Aussie SMEs growth insights, business operations advice, and productivity tips to help you choose the right business software.',
  },
  alternates: {
    canonical: 'https://memate.com.au/memate-wiki',
  },
}



export default function MemateWiki() {
  return (
    // <AppWrapper>
      <MemateWikiPage />
    // </AppWrapper>
  );
}