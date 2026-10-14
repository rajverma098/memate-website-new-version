import AboutMematePage from '../../page-components/about-memate';

export const metadata = {
  title: 'About Us | MeMate | All-in-One Business Management Software',
  description:
    "Learn about MeMate, Australia's all-in-one business platform empowering SMEs with CRM, ERP, and project management tools to simplify business management.",
  openGraph: {
    title: 'About Us | MeMate | All-in-One Business Management Software',
    description:
      "Learn about MeMate, Australia's all-in-one business platform empowering SMEs with CRM, ERP, and project management tools to simplify business management.",
    url: 'https://memate.com.au/about',
    siteName: 'MeMate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://memate.com.au/about',
  },
};

export default function About() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://memate.com.au/about#webpage',
        url: 'https://memate.com.au/about',
        name: 'About Us | MeMate | All-in-One Business Management Software',
        description:
          "Learn about MeMate, Australia's all-in-one business platform empowering SMEs with CRM, ERP, and project management tools to simplify business management.",
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
      <AboutMematePage />
    </>
  );
}