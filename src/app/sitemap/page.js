// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import SitemapPage from '../../page-components/sitemap';

export const metadata = {
  title: 'Sitemap | MeMate',
  description: 'Sitemap for MeMate',
  alternates: {
    canonical: 'https://memate.com.au/sitemap',
  },
}

export default function Sitemap() {
  return (
    // <AppWrapper>
      <SitemapPage />
    // </AppWrapper>
  );
}