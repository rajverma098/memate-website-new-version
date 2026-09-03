// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import SupplierDatabasePage from '../../page-components/supplier-database';

export const metadata = {
  title: 'List Your Business in MeMate Supplier Directory | MeMate',
  description: 'Submit your business to the MeMate Supplier Directory. Get discovered by Aussie SMEs—free listings for trusted local vendors on MeMate. Visit us today now!',
  openGraph: {
    title: 'List Your Business in MeMate Supplier Directory | MeMate',
    description: 'Submit your business to the MeMate Supplier Directory. Get discovered by Aussie SMEs—free listings for trusted local vendors on MeMate. Visit us today now!',
  },
  alternates: {
    canonical: 'https://memate.com.au/supplier-database',
  },
}


export default function SupplierDatabase() {
  return (
    // <AppWrapper>
      <SupplierDatabasePage />
    // </AppWrapper>
  );
}