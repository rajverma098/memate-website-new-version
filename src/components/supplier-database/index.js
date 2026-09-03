import React, { useEffect, useState } from "react";
import "./style.css";
import style from "./supplier-module.module.scss";
import DataBase from "./database-filter";
import { supplierListApi } from "../../api/supplierApi";
import { useDebounce } from "primereact/hooks";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";

const SupplierDatabase = () => {
  const [supplier, setSupplier] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalSupplier, setTotalSupplier] = useState(0);
  const [searchTerm, debouncedValue, setSearchTerm] = useDebounce("", 600);
  const [activeLetter, debouncedLetterValue, setActiveLetter] = useDebounce(
    "",
    600
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const limit = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedValue, debouncedLetterValue]);

  useEffect(() => {
    const fetchSupplier = async () => {
      setLoading(true);
      try {
        const response = await supplierListApi(
          currentPage,
          limit,
          debouncedValue,
          debouncedLetterValue
        );
        const { data, total } = response;
        console.log('data: ', data);

        setTotalSupplier(total);
        if (currentPage === 1) {
          setSupplier(data);
        } else {
          setSupplier((prevSupp) => {
            const uniqueSupplier =
              data.filter(
                (newSupp) => !prevSupp.some((supp) => supp.id === newSupp.id)
              ) || [];
            return [...prevSupp, ...uniqueSupplier];
          });
        }
      } catch (err) {
        setError(err);
        console.error("Error fetching supplier Supplier:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSupplier();
  }, [currentPage, debouncedValue, debouncedLetterValue]);

  // Pagination handler
  const handleNext = () => {
    if (supplier.length < totalSupplier) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <>
      <div
        className={`main-section ${style.mainSection}`}
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="main-heading main-headingdatabase">
          supplier<br></br> database
        </div>

        <div
          className={`${style.supdatabaseHead}  ${style.midheading}`}
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 className="supplierText supdatabaseHeadFS">Get Your Business Listed in the meMate Supplier Directory</h1>
        </div>
        <div
          className={style.smallheading}
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <p>
            By listing your company, businesses using meMate can quickly add
            your company as a client or supplier with just one click. This makes
            it easier to connect with other businesses and provides you with
            greater exposure
          </p>
        </div>

        <div className="request-btn request-btn-bg topSpaceGap">
             <DarkMemateBlackBut
      link2="/add-your-company"
      className="alignLeft"
      buttonTextlight="Add Your Company"
      showButton2={true}
    />

        </div>
        {/* <Link to='/add-your-company'>Add Your Company</Link> */}
      </div>
      <div
        className={style.filtersection}
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div className={style.midheading}>
          <p>Find the business you need</p>
        </div>
        <div className={style.databaseWrapper}>
          <DataBase   
            supplier={supplier}
            loading={loading}
            totalSupplier={totalSupplier}
            error={error}
            onNext={handleNext}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeLetter={activeLetter}
            setActiveLetter={setActiveLetter}
          />
        </div>
      </div>
    </>
  );
};

export default SupplierDatabase;
