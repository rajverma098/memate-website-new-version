'use client';

import React from 'react';
import AppWrapper from '../../../components/AppWrapper';
import SinglePage from '../../../page-components/single-page';

export default function ClientBlogPost({ params, initialPost, children }) {
  return (
    <AppWrapper>
      <SinglePage
        slug={params?.slug}
        initialPost={initialPost}
        serverArticle={children}
      />
    </AppWrapper>
  );
}