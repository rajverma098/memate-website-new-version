import SupplierManagementPage from '../../../page-components/supplier-management';

export const metadata = {
  title: 'Leading Supplier Management Software and System | MeMate',
  description:
    'Track and manage suppliers, contractors, and contacts with MeMate. Supplier relationship management made easy for Aussie businesses. Visit our website now!',
  openGraph: {
    title: 'Leading Supplier Management Software and System | MeMate',
    description:
      'Track and manage suppliers, contractors, and contacts with MeMate. Supplier relationship management made easy for Aussie businesses. Visit our website now!',
    url: 'https://memate.com.au/features/supplier-management-software',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/features/supplier-management-software',
  },
};

export default function SupplierManagement() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://memate.com.au/features/supplier-management-software#webpage',
        url: 'https://memate.com.au/features/supplier-management-software',
        name: 'Leading Supplier Management Software and System | MeMate',
        description:
          'Track and manage suppliers, contractors, and contacts with MeMate. Supplier relationship management made easy for Aussie businesses. Visit our website now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: {
          '@id':
            'https://memate.com.au/features/supplier-management-software#software',
        },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id':
          'https://memate.com.au/features/supplier-management-software#software',
        name: 'MeMate Supplier Management',
        url: 'https://memate.com.au/features/supplier-management-software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Business Management Software',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Supplier management software from MeMate. Track and manage suppliers, contractors and contacts in one place.',
        inLanguage: 'en-AU',
        countriesSupported: 'AU',
        image: { '@id': 'https://memate.com.au/#logo' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        provider: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: {
          '@id':
            'https://memate.com.au/features/supplier-management-software#webpage',
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
      <SupplierManagementPage />
    </>
  );
}