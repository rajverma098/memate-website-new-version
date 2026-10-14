import EmployeeManagementPage from '../../../page-components/employee-management';

export const metadata = {
  title: 'Employee Management Software & Time Tracking System | MeMate',
  description:
    'Manage staff, shifts & tasks easily with MeMate’s employee management tool system. Roster, track time & boost productivity with less admin and more control.',
  openGraph: {
    title: 'Employee Management Software & Time Tracking System | MeMate',
    description:
      'Manage staff, shifts & tasks easily with MeMate’s employee management tool system. Roster, track time & boost productivity with less admin and more control.',
    url: 'https://memate.com.au/features/employee-management-tools',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/employee-management-tools',
  },
};

export default function EmployeeManagement() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/employee-management-tools#webpage',
        url: 'https://memate.com.au/features/employee-management-tools',
        name: 'Employee Management Software & Time Tracking System | MeMate',
        description:
          'Manage staff, shifts & tasks easily with MeMate’s employee management tool system. Roster, track time & boost productivity with less admin and more control.',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/employee-management-tools#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/employee-management-tools#software',
        name: 'MeMate Employee Management',
        url: 'https://memate.com.au/features/employee-management-tools',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Employee management and time tracking software from MeMate. Manage staff, shifts and tasks with less admin.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/employee-management-tools#webpage',
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
      <EmployeeManagementPage />
    </>
  );
}