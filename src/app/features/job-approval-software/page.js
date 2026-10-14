import JobApprovalPage from '../../../page-components/job-approval';

export const metadata = {
  title: 'Leading Job Approval Software | MeMate Workflow Tools',
  description:
    'Track job progress, streamline workflow approvals, and get sign-offs faster. MeMate’s job approval software helps Aussie teams close the loop—no paperwork.',
  openGraph: {
    title: 'Leading Job Approval Software | MeMate Workflow Tools',
    description:
      'Track job progress, streamline workflow approvals, and get sign-offs faster. MeMate’s job approval software helps Aussie teams close the loop—no paperwork.',
    url: 'https://memate.com.au/features/job-approval-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/job-approval-software',
  },
};

export default function JobApproval() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/job-approval-software#webpage',
        url: 'https://memate.com.au/features/job-approval-software',
        name: 'Leading Job Approval Software | MeMate Workflow Tools',
        description:
          'Track job progress, streamline workflow approvals, and get sign-offs faster. MeMate’s job approval software helps Aussie teams close the loop—no paperwork.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/job-approval-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/job-approval-software#software',
        name: 'MeMate Job Approval',
        url: 'https://memate.com.au/features/job-approval-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Job approval software from MeMate. Track job progress, streamline approvals and get sign-offs faster.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/job-approval-software#webpage',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType:
            'Small and medium-sized service businesses in Australia',
        },
        isPartOf: { '@id': 'https://memate.com.au/#software' },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <JobApprovalPage />
    </>
  );
}