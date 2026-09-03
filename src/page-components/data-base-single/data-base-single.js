
import DataSingle from "../../components/supplier-database/single-page/single-page";
import Layout from "../../layout";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from 'next/navigation';
import { singlePostSupplier } from '../../api/supplierApi';

const DatabasePageSingle = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;
  console.log("ROUTER SLUG", slug.replaceAll("%20", "-"))
  const [supplierData, setSupplierData] = useState(null);
  const [loadingsingle, setLoadingSinge] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const data = await singlePostSupplier(slug);
        console.log('error FROM API', data.error);
        setSupplierData(data);
        if(data.error == 'No data at this moment') {
           router.push('/404')
        }
      } catch (err) {
        setError("Failed to fetch supplier data.", err);
      } finally {
        setLoadingSinge(false);
      }
    };

    fetchSupplierData();
  }, [slug, router]);

  if (loadingsingle) return <p></p>;
  if (error) return <p>{error}</p>;

  // console.log("slug", slug.replaceAll("%20", "-"))
  // const updatedSlugWithCity = slug.replaceAll("%20", "-")

  return (
    <>
      <Layout>
        <DataSingle slug={slug} supplierData={supplierData} />
      </Layout>
    </>
  );
};
export default DatabasePageSingle;