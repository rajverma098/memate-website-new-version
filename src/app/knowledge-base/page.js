// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import KnowledgeBasePage from '../../page-components/knowledge-base';

export const metadata = {
  title: 'MeMate Knowledge Base | How to Use & User Documentation',
  description: 'MeMate user guide and documentation with tutorials, setup tips, and feature walkthroughs. Learn how to use MeMate and unlock every tool.',
  openGraph: {
    title: 'MeMate Knowledge Base | How to Use & User Documentation',
    description: 'MeMate user guide and documentation with tutorials, setup tips, and feature walkthroughs. Learn how to use MeMate and unlock every tool.',
  },
       alternates: {
    canonical: 'https://memate.com.au/knowledge-base',
  },
}


export default function KnowledgeBase() {
  return (
    // <AppWrapper>
      <KnowledgeBasePage />
    // </AppWrapper>
  );
}