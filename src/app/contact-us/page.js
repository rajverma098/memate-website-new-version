import ContactUsPage from '../../page-components/contact-us';

export const metadata = {
  title: 'Contact Us | MeMate | ERP & CRM Support Service in Australia',
  description:
    'Contact MeMate in Australia for ERP & CRM support, demo requests, and sales enquiries. Get real business software help fast from our local team. Contact Now!',
  openGraph: {
    title: 'Contact Us | MeMate | ERP & CRM Support Service in Australia',
    description:
      'Contact MeMate in Australia for ERP & CRM support, demo requests, and sales enquiries. Get real business software help fast from our local team. Contact Now!',
    url: 'https://memate.com.au/contact-us',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/contact-us',
  },
};

export default function ContactUs() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://memate.com.au/contact-us#webpage',
        url: 'https://memate.com.au/contact-us',
        name: 'Contact Us | MeMate | ERP & CRM Support Service in Australia',
        description:
          'Contact MeMate in Australia for ERP & CRM support, demo requests, and sales enquiries. Get real business software help fast from our local team. Contact Now!',
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: { '@id': 'https://memate.com.au/#organization' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
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
      <ContactUsPage />
    </>
  );
}