import CustomerStoriesPageSingle from '../../../page-components/customer-stories-single';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  if (resolvedParams.slug === 'camera-fix') {
    return {
      title: 'Camera Repair Software Example | MeMate Case Study',
      description:
        'Discover how Camera Fix used MeMate to streamline repairs, quotes, and team coordination — real results for electronics repair business software. Call us now.',
      openGraph: {
        title: 'Camera Repair Software Example | MeMate Case Study',
        description:
          'Discover how Camera Fix used MeMate to streamline repairs, quotes, and team coordination — real results for electronics repair business software. Call us now.',
        url: 'https://memate.com.au/customer-stories/camera-fix',
        siteName: 'MeMate',
        type: 'article',
      },
      alternates: {
        canonical: 'https://memate.com.au/customer-stories/camera-fix',
      },
    };
  }

  if (resolvedParams.slug === 'case-study-provinyl-car-wrapping-business-software') {
    return {
      title: 'Car Wrapping Business Software Case Study | ProVinyl & MeMate',
      description:
        'See how ProVinyl uses MeMate to manage car wrapping enquiries, quotes, scheduling, contractors, expenses and invoicing in one workflow.',
      openGraph: {
        title: 'Car Wrapping Business Software Case Study | ProVinyl & MeMate',
        description:
          'See how ProVinyl uses MeMate to manage car wrapping enquiries, quotes, scheduling, contractors, expenses and invoicing in one workflow.',
        url: 'https://memate.com.au/customer-stories/case-study-provinyl-car-wrapping-business-software',
        siteName: 'MeMate',
        type: 'article',
      },
      alternates: {
        canonical:
          'https://memate.com.au/customer-stories/case-study-provinyl-car-wrapping-business-software',
      },
    };
  }

  if (resolvedParams.slug === 'elite-life') {
    return {
      title: 'MeMate Software for Membership Services | Elite Life',
      description:
        'See how Elite Life streamlines operations with MeMate software for exclusive membership services, enhancing client management and service quality.',
      openGraph: {
        title: 'MeMate Software for Membership Services | Elite Life',
        description:
          'See how Elite Life streamlines operations with MeMate software for exclusive membership services, enhancing client management and service quality.',
        url: 'https://memate.com.au/customer-stories/elite-life',
        siteName: 'MeMate',
        type: 'article',
      },
      alternates: {
        canonical: 'https://memate.com.au/customer-stories/elite-life',
      },
    };
  }

  if (resolvedParams.slug === 'boat-wizard') {
    return {
      title: 'Boat Wizard Case Study | MeMate Marine Service Software',
      description:
        'Discover how Boat Wizard improved marine service operations using MeMate’s business management software. Real case study for marine service businesses. Call us.',
      openGraph: {
        title: 'Boat Wizard Case Study | MeMate Marine Service Software',
        description:
          'Discover how Boat Wizard improved marine service operations using MeMate’s business management software. Real case study for marine service businesses. Call us.',
        url: 'https://memate.com.au/customer-stories/boat-wizard',
        siteName: 'MeMate',
        type: 'article',
      },
      alternates: {
        canonical: 'https://memate.com.au/customer-stories/boat-wizard',
      },
    };
  }

  if (resolvedParams.slug === 'sorted-media') {
    return {
      title: 'Sorted Media Case Study | MeMate Photography Software',
      description:
        'Discover how Sorted Media runs 40+ shoots daily using MeMate’s photography business management software. Streamlined booking, scheduling, and contractors.',
      openGraph: {
        title: 'Sorted Media Case Study | MeMate Photography Software',
        description:
          'Discover how Sorted Media runs 40+ shoots daily using MeMate’s photography business management software. Streamlined booking, scheduling, and contractors.',
        url: 'https://memate.com.au/customer-stories/sorted-media',
        siteName: 'MeMate',
        type: 'article',
      },
      alternates: {
        canonical: 'https://memate.com.au/customer-stories/sorted-media',
      },
    };
  }

  // Fallback
  return {
    title: 'Customer Story | MeMate',
    description: 'Real customer stories from Australian businesses using MeMate.',
    alternates: {
      canonical: `https://memate.com.au/customer-stories/${resolvedParams.slug}`,
    },
  };
}

// Per-slug schema data — pulled from the metadata above
const STORY_DATA = {
  'camera-fix': {
    headline: 'Camera Repair Software Example | MeMate Case Study',
    description:
      'Discover how Camera Fix used MeMate to streamline repairs, quotes, and team coordination — real results for electronics repair business software.',
    organization: 'Camera Fix',
  },
  'case-study-provinyl-car-wrapping-business-software': {
    headline: 'Car Wrapping Business Software Case Study | ProVinyl & MeMate',
    description:
      'See how ProVinyl uses MeMate to manage car wrapping enquiries, quotes, scheduling, contractors, expenses and invoicing in one workflow.',
    organization: 'ProVinyl',
  },
  'elite-life': {
    headline: 'MeMate Software for Membership Services | Elite Life',
    description:
      'See how Elite Life streamlines operations with MeMate software for exclusive membership services, enhancing client management and service quality.',
    organization: 'Elite Life',
  },
  'boat-wizard': {
    headline: 'Boat Wizard Case Study | MeMate Marine Service Software',
    description:
      'Discover how Boat Wizard improved marine service operations using MeMate’s business management software. Real case study for marine service businesses.',
    organization: 'Boat Wizard',
  },
  'sorted-media': {
    headline: 'Sorted Media Case Study | MeMate Photography Software',
    description:
      'Discover how Sorted Media runs 40+ shoots daily using MeMate’s photography business management software. Streamlined booking, scheduling, and contractors.',
    organization: 'Sorted Media',
  },
};

export default async function CustomerStorySlug({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const url = `https://memate.com.au/customer-stories/${slug}`;
  const story = STORY_DATA[slug] || {
    headline: 'Customer Story | MeMate',
    description: 'Real customer stories from Australian businesses using MeMate.',
    organization: 'MeMate customer',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: story.headline,
        description: story.description,
        inLanguage: 'en-AU',
        isPartOf: { '@id': 'https://memate.com.au/#website' },
        about: { '@id': 'https://memate.com.au/#organization' },
        mainEntity: { '@id': `${url}#article` },
        publisher: { '@id': 'https://memate.com.au/#organization' },
      },
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: story.headline,
        description: story.description,
        url,
        inLanguage: 'en-AU',
        author: { '@id': 'https://memate.com.au/#organization' },
        publisher: { '@id': 'https://memate.com.au/#organization' },
        mainEntityOfPage: { '@id': `${url}#webpage` },
        about: {
          '@type': 'Organization',
          name: story.organization,
        },
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
      <CustomerStoriesPageSingle params={resolvedParams} />
    </>
  );
}