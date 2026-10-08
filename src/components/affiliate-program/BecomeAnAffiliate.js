"use client";

import "./style.css";
import style from "./contactus.module.scss";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from "primereact/dialog";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";

import FormMemateBlackBut from "@/layout/hover-button/FormMemateBlackBut";

// API
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://app.memate.com.au/api/v1";

const API_ENDPOINT = `${API_BASE_URL}/referrals/public/applications/`;

// --------------------------------------------------
// API FUNCTION
// --------------------------------------------------

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
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setServerError("");
    setCaptchaError("");
  };

  // --------------------------------------------------
  // SUBMIT
  // --------------------------------------------------

  const onSubmit = async (data) => {
    // CAPTCHA validation
    if (!captchaValue) {
      setCaptchaError("Please complete the CAPTCHA.");
      return;
    }

    setIsSubmitting(true);
    setServerError("");

    try {
      // ----------------------------------------------
      // API PAYLOAD
      // ----------------------------------------------

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

      console.log("Affiliate Application Payload:", payload);

      // ----------------------------------------------
      // API REQUEST
      // ----------------------------------------------

      const result = await addAffiliateApplication(payload);

      console.log("Affiliate Application Success:", result);

      // ----------------------------------------------
      // RESET
      // ----------------------------------------------

      reset();

      setCaptchaValue(null);
      setCaptchaError("");
      setServerError("");
      setVisible(false);

      // ----------------------------------------------
      // REDIRECT
      // ----------------------------------------------

      router.push("/thank-you");
    } catch (error) {
      console.error("Affiliate Application Error:", error);

      setServerError(
        error?.message ||
          "Submission failed. Please try again."
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
        style={{ width: "566px" }}
        className={style.requestsendModel}
        onHide={closeModal}
        footer={footerContent}
        header={HeaderContent}
        closable={!isSubmitting}
        modal
      >
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
            <div className={style.marginbotton}>
              <label htmlFor="affiliate-category">
                I'm a... <span>*</span>
              </label>

              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <select
                    id="affiliate-category"
                    {...field}
                  >
                    <option value="">
                      Select
                    </option>

                    <option value="Accountant / Bookkeeper">
                      Accountant / Bookkeeper
                    </option>

                    <option value="Business Advisor / Consultant">
                      Business Advisor / Consultant
                    </option>

                    <option value="Association / Network">
                      Association / Network
                    </option>

                    <option value="Tech Support / Setup">
                      Tech Support / Setup
                    </option>

                    <option value="Creator / Influencer">
                      Creator / Influencer
                    </option>

                    <option value="Biz Hub / Co-working">
                      Biz Hub / Co-working
                    </option>

                    <option value="Training Provider">
                      Training Provider
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                )}
              />

              {errors.category && (
                <p className="error-message">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* NETWORK SIZE */}
            <div className={style.marginbotton}>
              <label htmlFor="affiliate-network">
                How many small businesses do you work with?
                <span> *</span>
              </label>

              <Controller
                name="network_size"
                control={control}
                render={({ field }) => (
                  <select
                    id="affiliate-network"
                    {...field}
                  >
                    <option value="">
                      Select
                    </option>

                    <option value="1–10">
                      1–10
                    </option>

                    <option value="11–50">
                      11–50
                    </option>

                    <option value="51–200">
                      51–200
                    </option>

                    <option value="200+">
                      200+
                    </option>
                  </select>
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
      </Dialog>
    </>
  );
};

export default BecomeAnAffiliate;