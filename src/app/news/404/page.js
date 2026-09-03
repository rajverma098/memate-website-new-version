'use client';

import React from 'react';
import PageNotFound from '../../../components/error-page';
import Layout from '../../../layout';

export default function NewsNotFoundPage() {
  return (
    <Layout>
      <PageNotFound redirects={1} />
    </Layout>
  );
}

