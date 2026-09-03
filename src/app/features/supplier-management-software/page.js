// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import SupplierManagementPage from '../../../page-components/supplier-management';

export const metadata = {
  title: 'Leading Supplier Management Software and System | MeMate',
  description: 'Track and manage suppliers, contractors, and contacts with MeMate. Supplier relationship management made easy for Aussie businesses. Visit our website now!',
  openGraph: {
    title: 'Leading Supplier Management Software and System | MeMate',
    description: 'Track and manage suppliers, contractors, and contacts with MeMate. Supplier relationship management made easy for Aussie businesses. Visit our website now!',
  },
   alternates: {
    canonical: 'https://memate.com.au/features/supplier-management-software',
  },
}

export default function SupplierManagement() {
  return (
    // <AppWrapper>
      <SupplierManagementPage /> 
    // </AppWrapper>
  );
}