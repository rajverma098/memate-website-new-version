// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import CustomerStoriesPageSingle from '../../../page-components/customer-stories-single';

export async function generateMetadata({ params }){
  const resolvedParams = await params;
  
  if(resolvedParams.slug === "camera-fix"){
    const metadata = {
      title: 'Camera Repair Software Example | MeMate Case Study',
      description: 'Discover how Camera Fix used MeMate to streamline repairs, quotes, and team coordination — real results for electronics repair business software. Call us now.',
      openGraph: {
        title: 'Camera Repair Software Example | MeMate Case Study',
        description: 'Discover how Camera Fix used MeMate to streamline repairs, quotes, and team coordination — real results for electronics repair business software. Call us now.',
      },
         alternates: {
    canonical: 'https://memate.com.au/customer-stories/camera-fix',
  },
    }
    return metadata;

  }else if(resolvedParams.slug === "case-study-provinyl-car-wrapping-business-software"){
    const metadata = {
      title: 'Car Wrapping Business Software Case Study | ProVinyl & MeMate',
      description: 'See how ProVinyl uses MeMate to manage car wrapping enquiries, quotes, scheduling, contractors, expenses and invoicing in one workflow.',
      openGraph: {
        title: 'Car Wrapping Business Software Case Study | ProVinyl & MeMate',
        description: 'See how ProVinyl uses MeMate to manage car wrapping enquiries, quotes, scheduling, contractors, expenses and invoicing in one workflow.',
      },
        alternates: {
    canonical: 'https://memate.com.au/customer-stories/case-study-provinyl-car-wrapping-business-software',
  },
    }
    return metadata;

  }else if(resolvedParams.slug === "elite-life"){
    const metadata = {
      title: 'MeMate Software for Membership Services | Elite Life',
      description: 'See how Elite Life streamlines operations with MeMate software for exclusive membership services, enhancing client management and service quality.',
      openGraph: {
        title: 'MeMate Software for Membership Services | Elite Life',
        description: 'See how Elite Life streamlines operations with MeMate software for exclusive membership services, enhancing client management and service quality.',
      },
       alternates: {
    canonical: 'https://memate.com.au/customer-stories/elite-life',
  },
    }
    return metadata;
  } else if(resolvedParams.slug === "boat-wizard"){
    const metadata = {
      title: 'Boat Wizard Case Study | MeMate Marine Service Software',
      description: 'Discover how Boat Wizard improved marine service operations using MeMate’s business management software. Real case study for marine service businesses. Call us.',
      openGraph: {
        title: 'Boat Wizard Case Study | MeMate Marine Service Software',
        description: 'Discover how Boat Wizard improved marine service operations using MeMate’s business management software. Real case study for marine service businesses. Call us.',
      },
          alternates: {
    canonical: 'https://memate.com.au/customer-stories/boat-wizard',
  },
    }
    return metadata;
  } else if(resolvedParams.slug === "sorted-media"){
    const metadata = {
      title: 'Sorted Media Case Study | MeMate Photography Software',
      description: 'Discover how Sorted Media runs 40+ shoots daily using MeMate’s photography business management software. Streamlined booking, scheduling, and contractors.',
      openGraph: {
        title: 'Sorted Media Case Study | MeMate Photography Software',
        description: 'Discover how Sorted Media runs 40+ shoots daily using MeMate’s photography business management software. Streamlined booking, scheduling, and contractors.',
      },
            alternates: {
    canonical: 'https://memate.com.au/customer-stories/sorted-media',
  },
    }
    return metadata;
  }
}

export default async function CustomerStorySlug({ params }) {
  const resolvedParams = await params;
  console.log(resolvedParams)


  return (
    // <AppWrapper>
      <CustomerStoriesPageSingle params={resolvedParams} />  
    // </AppWrapper>
  );
  
}
