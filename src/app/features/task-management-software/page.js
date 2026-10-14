import TaskManagementPage from '@/page-components/task-management';

export const metadata = {
  title: 'Task Management App with To Do List Tools | MeMate',
  description:
    'MeMate task management software and to do list app give you powerful task management tools. Get started with our task management app and stay on top',
  openGraph: {
    title: 'Task Management App with To Do List Tools | MeMate',
    description:
      'MeMate task management software and to do list app give you powerful task management tools. Get started with our task management app and stay on top',
    url: 'https://memate.com.au/features/task-management-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/task-management-software',
  },
};

export default function TaskManagement() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/task-management-software#webpage',
        url: 'https://memate.com.au/features/task-management-software',
        name: 'Task Management App with To Do List Tools | MeMate',
        description:
          'MeMate task management software and to do list app give you powerful task management tools. Get started with our task management app and stay on top',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/task-management-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/task-management-software#software',
        name: 'MeMate Task Management',
        url: 'https://memate.com.au/features/task-management-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Task management software from MeMate. Assign, track and complete tasks with a shared to do list.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/task-management-software#webpage',
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
      <TaskManagementPage />
    </>
  );
}