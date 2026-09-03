// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import BlogPage from '../../page-components/blog-page';

export const metadata = {
  title: 'MeMate News | Business Software & Tech Updates for SMEs',
  description: 'Stay updated with MeMate on business software news, Australian tech trends, ERP & CRM updates, and tools for SMEs. Discover new features, tips & regulations.',
  openGraph: {
    title: 'MeMate News | Business Software & Tech Updates for SMEs',
    description: 'Stay updated with MeMate on business software news, Australian tech trends, ERP & CRM updates, and tools for SMEs. Discover new features, tips & regulations.',
  },
  alternates: {
    canonical: 'https://memate.com.au/news',
  },
}


export default function NewsPage() {
  return (
    // <AppWrapper>
      <BlogPage /> 
    // </AppWrapper>
  );
}