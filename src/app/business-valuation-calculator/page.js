import Script from 'next/script';
import ValuationCalculatorPage from '../../page-components/business-valuation-calculator';

export const metadata = {
  metadataBase: new URL('https://memate.com.au'),
  title: 'Business Valuation Calculator | Estimate Your Business Worth | MeMate',
  description:
    'Estimate your business value with our Business Valuation Calculator. Discover how revenue, profitability and systems impact what your business could be worth.',
  alternates: {
    canonical: '/business-valuation-calculator',
  },
  openGraph: {
    title: 'Business Valuation Calculator | Estimate Your Business Worth | MeMate',
    description:
      'Estimate your business value with our Business Valuation Calculator. Discover how revenue, profitability and systems impact what your business could be worth.',
    url: 'https://memate.com.au/business-valuation-calculator',
  },
  alternates: {
    canonical: 'https://memate.com.au/business-valuation-calculator',
  },
};

export default function BusinessValuationCalculator() {
  return (
    <>
      <Script
        id="business-valuation-webapp-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "@id": "https://memate.com.au/business-valuation-calculator#webapp",
            "name": "MeMate Business Valuation Calculator",
            "url": "https://memate.com.au/business-valuation-calculator",
            "description":
              "Calculate how much your business is worth using revenue, profitability, industry risk and trading history. Get an instant indicative business valuation online.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "browserRequirements": "Requires JavaScript enabled",
            "isAccessibleForFree": true,
            "creator": {
              "@type": "Organization",
              "@id": "https://memate.com.au/#organization",
              "name": "MeMate",
              "url": "https://memate.com.au"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      <ValuationCalculatorPage />
    </>
  );
}