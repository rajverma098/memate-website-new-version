"use client";

import "./style.css";
import "./AffiliateForm.css";
import style from './contactus.module.scss';
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog } from 'primereact/dialog';
import ReCAPTCHA from 'react-google-recaptcha';
import CustomSelect from './CustomSelect';

// ✅ Client calls the local proxy — no direct backend call
const API_ENDPOINT = "/api/affiliate";

const submitAffiliateApplication = async (data) => {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      result.error || result.message || "Submission failed. Please try again."
    );
  }

  return result;
};

const BecomeAnAffiliate = (props) => {
  const { visible, setVisible, children, headingText } = props;

  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState('');
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    business_name: yup.string().required("Business name is required"),
    abn: yup.string(),
    category: yup.string().required("Category is required"),
    network_size: yup.string().required("Network size is required"),
    website: yup
      .string()
      .url("Must be a valid URL")
      .required("Website/LinkedIn is required"),
    notes: yup.string(),
    terms_accepted: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      terms_accepted: false,
      abn: "",
      category: "",
      network_size: "",
    },
  });

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (value) {
      setError('');
      setServerError('');
    }
  };

  const onSubmit = async (data) => {
    if (!captchaValue) {
      setError("Please complete the CAPTCHA.");
      return;
    }

    setIsSubmitting(true);
    setServerError("");

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      business_name: data.business_name,
      abn: data.abn || "",
      applicant_type: "business",
      category: data.category,
      network_size: data.network_size,
      website: data.website,
      notes: data.notes || "",
      terms_accepted: data.terms_accepted,
      recaptcha_token: captchaValue,
    };

    try {
      const result = await submitAffiliateApplication(payload);
      console.log("Success:", result);

      reset();
      setCaptchaValue(null);
      setVisible(false);
      setShowThankYou(true);
    } catch (err) {
      console.error("API Error:", err);
      setServerError(err.message || "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerContent = (
    <div className="flexWrapBoxE">
      <button
        className="borderbuttonStyle firstBut"
        onClick={() => setVisible(false)}
      >
        Cancel
      </button>
      <button
        className="darkbuttonStyle"
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </div>
  );

  const HeaderContent = (
    <div className="flexWrapBoxc requestCallback">
      <h1>{headingText || "Affiliate application form"}</h1>
    </div>
  );

  const ThankYouFooter = (
    <div className="flexWrapBoxE" style={{ justifyContent: 'flex-end' }}>
      <button
        className="darkbuttonStyle"
        onClick={() => setShowThankYou(false)}
      >
        Done
      </button>
    </div>
  );

  const categoryOptions = [
    { value: "Accountant / Bookkeeper", label: "Accountant / Bookkeeper" },
    { value: "Business Advisor / Consultant", label: "Business Advisor / Consultant" },
    { value: "Association / Network", label: "Association / Network" },
    { value: "Tech Support / Setup", label: "Tech Support / Setup" },
    { value: "Creator / Influencer", label: "Creator / Influencer" },
    { value: "Biz Hub / Co-working", label: "Biz Hub / Co-working" },
    { value: "Training Provider", label: "Training Provider" },
    { value: "Other", label: "Other" },
  ];

  const networkOptions = [
    { value: "1–10", label: "1–10" },
    { value: "11–50", label: "11–50" },
    { value: "51–200", label: "51–200" },
    { value: "200+", label: "200+" },
  ];

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className={props.className || "btnFormNewDesign1"}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        {children}
      </button>

      <Dialog
        visible={visible}
        style={{ width: '620px' }}
        className={style.requestsendModel}
        onHide={() => setVisible(false)}
        footer={footerContent}
        header={HeaderContent}
      >
        <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
          >
            <div className={style.marginbotton}>
              <label>
                Full name <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input placeholder="Enter your name" {...field} />
                )}
              />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <div className={style.marginbotton}>
              <label>
                Business name <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="business_name"
                control={control}
                render={({ field }) => (
                  <input placeholder="Business name" {...field} />
                )}
              />
              {errors.business_name && (
                <p className="error-message">{errors.business_name.message}</p>
              )}
            </div>

            <div className={style.marginbotton}>
              <label>
                Email <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input placeholder="example@gmail.com" {...field} />
                )}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className={style.marginbotton}>
              <label>
                Phone <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <input placeholder="Phone" {...field} />}
              />
              {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>

            <div className={style.marginbotton}>
              <label>ABN</label>
              <Controller
                name="abn"
                control={control}
                render={({ field }) => <input placeholder="ABN" {...field} />}
              />
            </div>

            <div className={style.marginbotton}>
              <label>
                I'm a... <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    options={categoryOptions}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select"
                  />
                )}
              />
              {errors.category && (
                <p className="error-message">{errors.category.message}</p>
              )}
            </div>

            <div className={style.marginbotton}>
              <label>
                How many small businesses do you work with?{' '}
                <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="network_size"
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    options={networkOptions}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select"
                  />
                )}
              />
              {errors.network_size && (
                <p className="error-message">{errors.network_size.message}</p>
              )}
            </div>

            <div className={style.marginbotton}>
              <label>Website or social profile</label>
              <Controller
                name="website"
                control={control}
                render={({ field }) => (
                  <input placeholder="Website or social profile" {...field} />
                )}
              />
              {errors.website && (
                <p className="error-message">{errors.website.message}</p>
              )}
            </div>
          </div>

          <div className={style.marginbotton} style={{ marginTop: '20px' }}>
            <label>Anything else we should know?</label>
            <Controller
              name="notes"
              control={control}
              render={({ field }) => (
                <textarea placeholder="Enter message" rows={3} {...field} />
              )}
            />
          </div>

          <div
            className={style.marginbotton}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '15px',
            }}
          >
            <Controller
              name="terms_accepted"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <label style={{ marginBottom: 0 }}>
              I agree to the Referral & Affiliate Program Terms
            </label>
            {errors.terms_accepted && (
              <p className="error-message">{errors.terms_accepted.message}</p>
            )}
          </div>

          <div className={style.marginbotton} style={{ marginTop: '20px' }}>
            {typeof window !== "undefined" && (
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            )}
            {error && <p className="error-message">{error}</p>}
          </div>
        </form>
        {serverError && <p className="error-message">{serverError}</p>}
      </Dialog>

      <Dialog
        visible={showThankYou}
        style={{ width: '420px' }}
        className={style.requestsendModel}
        onHide={() => setShowThankYou(false)}
        footer={ThankYouFooter}
        header={
          <div className="flexWrapBoxc requestCallback">
            <h1>Thanks!</h1>
          </div>
        }
      >
        <div style={{ textAlign: 'center', padding: '30px 20px' }}>
          <div
            style={{
              width: '40px',
              height: '20px',
              borderLeft: '6px solid #00bcd4',
              borderBottom: '6px solid #ffc107',
              transform: 'rotate(-45deg)',
              margin: '0 auto 20px auto',
            }}
          ></div>
          <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.5' }}>
            Our Affiliate Manager
            <br />
            will be in touch within <strong>2 business days</strong>
          </p>
        </div>
      </Dialog>
    </>
  );
};

export default BecomeAnAffiliate;