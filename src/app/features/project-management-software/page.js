import ProjectManagementPage from '../../../page-components/project-management';

export const metadata = {
  title: 'Project Management Software for Aussie Businesses | MeMate',
  description:
    'Manage projects, tasks & teams with ease. MeMate’s project management software helps Australian SMEs with tools, systems & timelines that drive success. Try it.',
  openGraph: {
    title: 'Project Management Software for Aussie Businesses | MeMate',
    description:
      'Manage projects, tasks & teams with ease. MeMate’s project management software helps Australian SMEs with tools, systems & timelines that drive success. Try it.',
    url: 'https://memate.com.au/features/project-management-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/project-management-software',
  },
};

export default function ProjectManagement() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/project-management-software#webpage',
        url: 'https://memate.com.au/features/project-management-software',
        name: 'Project Management Software for Aussie Businesses | MeMate',
        description:
          'Manage projects, tasks & teams with ease. MeMate’s project management software helps Australian SMEs with tools, systems & timelines that drive success. Try it.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/project-management-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/project-management-software#software',
        name: 'MeMate Project Management',
        url: 'https://memate.com.au/features/project-management-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Project management software from MeMate. Manage projects, tasks and timelines with your team.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/project-management-software#webpage',
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
      <ProjectManagementPage />
    </>
  );
}