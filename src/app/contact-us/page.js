// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ContactUsPage from '../../page-components/contact-us';

export const metadata = {
  title: 'Contact Us | MeMate | ERP & CRM Support Service in Australia',
  description: 'Contact MeMate in Australia for ERP & CRM support, demo requests, and sales enquiries. Get real business software help fast from our local team. Contact Now!',
  openGraph: {
    title: 'Contact Us | MeMate | ERP & CRM Support Service in Australia',
    description: 'Contact MeMate in Australia for ERP & CRM support, demo requests, and sales enquiries. Get real business software help fast from our local team. Contact Now!',
  },
   alternates: {
    canonical: 'https://memate.com.au/contact-us',
  },
}


export default function ContactUs() {
  return (
    // <AppWrapper>
      <ContactUsPage /> 
    // </AppWrapper>
  );
}