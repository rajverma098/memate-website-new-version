import AppWrapper from '../../components/AppWrapper';
import ContactSalesPage from '../../page-components/contact-sales';

export const metadata = {
  title: 'Contact Sales | MeMate Business Management Software',
  description:
    'Talk to the MeMate sales team about pricing, onboarding, or a walkthrough for your Australian service business. Request a demo or get a personalised quote.',
  openGraph: {
    title: 'Contact Sales | MeMate Business Management Software',
    description:
      'Talk to the MeMate sales team about pricing, onboarding, or a walkthrough for your Australian service business. Request a demo or get a personalised quote.',
    url: 'https://memate.com.au/contact-sales',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/contact-sales',
  },
};

export default function ContactSales() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://memate.com.au/contact-sales#webpage',
        url: 'https://memate.com.au/contact-sales',
        name: 'Contact Sales | MeMate Business Management Software',
        description:
          'Talk to the MeMate sales team about pricing, onboarding, or a walkthrough for your Australian service business. Request a demo or get a personalised quote.',
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
      <AppWrapper>
        <ContactSalesPage />
      </AppWrapper>
    </>
  );
}