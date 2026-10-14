"use client";

import "./style.css";
import style from "./contactus.module.scss";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from "primereact/dialog";
import ReCAPTCHA from "react-google-recaptcha";


import FormMemateBlackBut from "@/layout/hover-button/FormMemateBlackBut";
import CustomSelect from "./CustomSelect";

// API
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://app.memate.com.au/api/v1";

const API_ENDPOINT = `${API_BASE_URL}/referrals/public/applications/`;

// --------------------------------------------------
// API FUNCTION
// --------------------------------------------------


const CATEGORY_OPTIONS = [
  { value: "Accountant / Bookkeeper", label: "Accountant / Bookkeeper" },
  { value: "Business Advisor / Consultant", label: "Business Advisor / Consultant" },
  { value: "Association / Network", label: "Association / Network" },
  { value: "Tech Support / Setup", label: "Tech Support / Setup" },
  { value: "Creator / Influencer", label: "Creator / Influencer" },
  { value: "Biz Hub / Co-working", label: "Biz Hub / Co-working" },
  { value: "Training Provider", label: "Training Provider" },
  { value: "Other", label: "Other" },
];

const NETWORK_SIZE_OPTIONS = [
  { value: "1–10", label: "1–10" },
  { value: "11–50", label: "11–50" },
  { value: "51–200", label: "51–200" },
  { value: "200+", label: "200+" },
];

const addAffiliateApplication = async (data) => {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  let result = {};

  try {
    result = await response.json();
  } catch {
    // API may return empty response
  }

  if (!response.ok) {
    throw new Error(
      result?.message ||
        result?.detail ||
        "Unable to submit affiliate application."
    );
  }

  return result;
};

// --------------------------------------------------
// VALIDATION
// --------------------------------------------------

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Full name is required"),

  business_name: yup
    .string()
    .trim()
    .required("Business name is required"),

  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .trim()
    .required("Phone number is required"),

  abn: yup
    .string()
    .trim()
    .nullable(),

  category: yup
    .string()
    .required("Please select an option"),

  network_size: yup
    .string()
    .required("Please select the number of businesses"),

  website: yup
  .string()
  .trim()
  .transform((value) => {
    if (!value) return value;
    return /^https?:\/\//i.test(value)
      ? value
      : `https://${value}`;
  })
  .url("Please enter a valid URL")
  .nullable(),

  notes: yup
    .string()
    .trim()
    .nullable(),

  terms_accepted: yup
    .boolean()
    .oneOf(
      [true],
      "You must agree to the Referral & Affiliate Program Terms"
    ),
});

// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

const BecomeAnAffiliate = (props) => {
  const [visible, setVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      name: "",
      business_name: "",
      email: "",
      phone: "",
      abn: "",
      category: "",
      network_size: "",
      website: "",
      notes: "",
      terms_accepted: false,
    },
  });

  // --------------------------------------------------
  // CAPTCHA
  // --------------------------------------------------

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);

    if (value) {
      setCaptchaError("");
      setServerError("");
    }
  };

  // --------------------------------------------------
  // OPEN MODAL
  // --------------------------------------------------

 const openModal = () => {
  setIsSuccess(false);
  setVisible(true);
  setServerError("");
  setCaptchaError("");
};

  // --------------------------------------------------
  // CLOSE MODAL
  // --------------------------------------------------

const closeModal = () => {
  if (isSubmitting) return;
  setVisible(false);
  setIsSuccess(false);
  setServerError("");
  setCaptchaError("");
};

  // --------------------------------------------------
  // SUBMIT
  // --------------------------------------------------

const onSubmit = async (data) => {
  if (!captchaValue) {
    setCaptchaError("Please complete the CAPTCHA.");
    return;
  }

  setIsSubmitting(true);
  setServerError("");

  try {
    const payload = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      business_name: data.business_name.trim(),
      abn: data.abn?.trim() || "",
      applicant_type: "business",
      category: data.category,
      network_size: data.network_size,
      website: data.website?.trim() || "",
      notes: data.notes?.trim() || "",
      terms_accepted: data.terms_accepted === true,
      recaptcha_token: captchaValue,
    };

    const result = await addAffiliateApplication(payload);
    console.log("Affiliate Application Success:", result);

    // Reset the form + captcha, but DON'T close the dialog
    reset();
    setCaptchaValue(null);
    setCaptchaError("");
    setServerError("");

    // ✅ Show success view
    setIsSuccess(true);
  } catch (error) {
    console.error("Affiliate Application Error:", error);
    setServerError(
      error?.message || "Submission failed. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  // --------------------------------------------------
  // FOOTER
  // --------------------------------------------------

  const footerContent = (
    <div className="flexWrapBoxE">
      <button
        type="button"
        className="borderbuttonStyle firstBut"
        onClick={closeModal}
        disabled={isSubmitting}
      >
        Cancel
      </button>

      <button
        type="button"
        className="darkbuttonStyle"
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit request"}
      </button>
    </div>
  );

  // --------------------------------------------------
  // HEADER
  // --------------------------------------------------

  const HeaderContent = (
    <div className="flexWrapBoxc requestCallback">
      <h1>
        {props.headingText || "Affiliate application form"}
      </h1>
    </div>
  );
  
const successHeader = (
  <div className={`${style.successHeader} flexWrapBoxc requestCallback`}>
    <h1>Thanks!</h1>
  </div>
);

const successFooter = (
  <div className={`${style.successFooter} flexWrapBoxE`}>
    <button
      type="button"
      className="darkbuttonStyle"
      onClick={closeModal}
    >
      Done
    </button>
  </div>
);
  // --------------------------------------------------
  // RETURN
  // --------------------------------------------------

  return (
    <>
      {/* ----------------------------------------------
          OPEN FORM BUTTON
      ---------------------------------------------- */}

      <div className="query-button">
        <button
          type="button"
          onClick={openModal}
          className="btnFormNewDesign1"
        >
          <FormMemateBlackBut
            className="alignLeft"
            target="_self"
            buttonTextdark="Become an Affiliate"
            showButton1={true}
          />
        </button>
      </div>

      {/* ----------------------------------------------
          AFFILIATE MODAL
      ---------------------------------------------- */}


<Dialog
  visible={visible}
  style={{
    width: "700px",
    maxHeight: "90vh",
    display: "flex",
    padding: "0 19px",
    flexDirection: "column",
  }}
  className={style.requestsendModel}
  onHide={closeModal}
  footer={isSuccess ? successFooter : footerContent}
  header={isSuccess ? successHeader : HeaderContent}
  closable={!isSubmitting}
  modal
  blockScroll={false}
  draggable={false}
  dismissableMask={false}
  contentStyle={{ overflowY: "auto", flex: "1 1 auto", minHeight: 0 }}
  data-lenis-prevent
>
   {isSuccess ? (
    <div className={style.successContent}>
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/successForm-icon.png" alt="Success Form" />
      <p className={style.successTitle}>Our Affiliate Manager </p>
      <p className={style.successSubtitle}>
       will be in touch within <strong> 2 business days</strong>
      </p>
    </div>
  ) : (
        <form
          className={style.requestsendForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          
          {/* ------------------------------------------
              FORM GRID
          ------------------------------------------ */}

          <div className={style.formGrid}>

            {/* FULL NAME */}
            <div className={style.marginbotton}>
              <label htmlFor="affiliate-name">
                Full name <span>*</span>
              </label>

              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    id="affiliate-name"
                    type="text"
                    placeholder="Enter your name"
                    {...field}
                  />
                )}
              />

              {errors.name && (
                <p className="error-message">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* BUSINESS NAME */}
            <div className={style.marginbotton}>
              <label htmlFor="affiliate-business">
                Business name <span>*</span>
              </label>

              <Controller
                name="business_name"
                control={control}
                render={({ field }) => (
                  <input
                    id="affiliate-business"
                    type="text"
                    placeholder="Business name"
                    {...field}
                  />
                )}
              />

              {errors.business_name && (
                <p className="error-message">
                  {errors.business_name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className={style.marginbotton}>
              <label htmlFor="affiliate-email">
                Email <span>*</span>
              </label>

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    id="affiliate-email"
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                )}
              />

              {errors.email && (
                <p className="error-message">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div className={style.marginbotton}>
              <label htmlFor="affiliate-phone">
                Phone <span>*</span>
              </label>

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    id="affiliate-phone"
                    type="tel"
                    placeholder="Phone"
                    {...field}
                  />
                )}
              />

              {errors.phone && (
                <p className="error-message">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* ABN */}
            <div className={style.marginbotton}>
              <label htmlFor="affiliate-abn">
                ABN
              </label>

              <Controller
                name="abn"
                control={control}
                render={({ field }) => (
                  <input
                    id="affiliate-abn"
                    type="text"
                    placeholder="ABN"
                    {...field}
                  />
                )}
              />

              {errors.abn && (
                <p className="error-message">
                  {errors.abn.message}
                </p>
              )}
            </div>

         {/* I'M A */}
<div className={`${style.marginbotton} ${style.selectField}`}>
  <label htmlFor="affiliate-category">
    I'm a... <span>*</span>
  </label>

  <Controller
    name="category"
    control={control}
    render={({ field }) => (
      <CustomSelect
        options={CATEGORY_OPTIONS}
        value={field.value}
        onChange={field.onChange}
        placeholder="Select"
      />
    )}
  />

  {errors.category && (
    <p className="error-message">
      {errors.category.message}
    </p>
  )}
</div>

           {/* NETWORK SIZE */}
<div className={`${style.marginbotton} ${style.selectField}`}>
  <label htmlFor="affiliate-network">
    How many small businesses do you work with?
    <span> *</span>
  </label>

  <Controller
    name="network_size"
    control={control}
    render={({ field }) => (
      <CustomSelect
        options={NETWORK_SIZE_OPTIONS}
        value={field.value}
        onChange={field.onChange}
        placeholder="Select"
      />
    )}
  />

  {errors.network_size && (
    <p className="error-message">
      {errors.network_size.message}
    </p>
  )}
</div>

            {/* WEBSITE */}
            <div className={style.marginbotton}>
              <label htmlFor="affiliate-website">
                Website or social profile
              </label>

              <Controller
                name="website"
                control={control}
                render={({ field }) => (
                  <input
                    id="affiliate-website"
                    type="url"
                    placeholder="Website or social profile"
                    {...field}
                  />
                )}
              />

              {errors.website && (
                <p className="error-message">
                  {errors.website.message}
                </p>
              )}
            </div>
          </div>

          {/* ------------------------------------------
              NOTES
          ------------------------------------------ */}

          <div className={style.marginbotton}>
            <label htmlFor="affiliate-notes">
              Anything else we should know?
            </label>

            <Controller
              name="notes"
              control={control}
              render={({ field }) => (
                <textarea
                  id="affiliate-notes"
                  placeholder="Enter message"
                  rows={4}
                  {...field}
                />
              )}
            />

            {errors.notes && (
              <p className="error-message">
                {errors.notes.message}
              </p>
            )}
          </div>

          {/* ------------------------------------------
              TERMS
          ------------------------------------------ */}

          <div className={style.termsWrapper}>
            <Controller
              name="terms_accepted"
              control={control}
              render={({ field }) => (
                <label className={style.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) =>
                      field.onChange(e.target.checked)
                    }
                  />

                  <span>
                    I agree to the Referral & Affiliate
                    Program Terms
                  </span>
                </label>
              )}
            />

            {errors.terms_accepted && (
              <p className="error-message">
                {errors.terms_accepted.message}
              </p>
            )}
          </div>

          {/* ------------------------------------------
              CAPTCHA
          ------------------------------------------ */}

          <div className={style.captchaWrapper}>
            <ReCAPTCHA
              sitekey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
              }
              onChange={handleCaptchaChange}
              onExpired={() => {
                setCaptchaValue(null);
                setCaptchaError(
                  "CAPTCHA expired. Please verify again."
                );
              }}
            />

            {captchaError && (
              <p className="error-message">
                {captchaError}
              </p>
            )}
          </div>

          {/* ------------------------------------------
              SERVER ERROR
          ------------------------------------------ */}

          {serverError && (
            <div className="error-message server-error">
              {serverError}
            </div>
          )}
        </form>
        )}
      </Dialog>
    </>
  );
};

export default BecomeAnAffiliate;