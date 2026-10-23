"use client";

import "./style.css";
import style from './contactus.module.scss';
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog } from 'primereact/dialog';
import ReCAPTCHA from 'react-google-recaptcha';
import FormMemateBlackBut from "@/layout/hover-button/FormMemateBlackBut";

// ✅ API BASE
const API_BASE_URL = process.env.API_BASE_URL || "https://app.memate.com.au/api/v1";

// ⚠️ IMPORTANT: Change this ID if 76 is not the correct form ID
const PARTNER_FORM_ID = 76; 

// ✅ API FUNCTION
const addEnquirySubmission = async (formId, data) => {
  const endpoint = `/inquiries/form/${formId}/submit/`;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("API Error");
  }

  return response.json();
};

const PartnerProgram = (props) => {
  const [visible, setVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState('');
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ VALIDATION (Matched to screenshot fields)
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    company_name: yup.string().required("Company name is required"),
    industry: yup.string().required("Industry is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ CAPTCHA
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (value) {
      setError('');
      setServerError('');
    }
  };

  // ✅ SUBMIT
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
      company_name: data.company_name,
      industry: data.industry,
      message_2: data.message, 
      "g-recaptcha-response": captchaValue,
    };

    try {
      const result = await addEnquirySubmission(PARTNER_FORM_ID, payload);

      console.log("Success:", result);

      reset();
      setCaptchaValue(null);
      setVisible(false);
      window.location.href = "/thank-you";

    } catch (err) {
      console.error(err);
      setServerError("Submission failed. Please try again.");
      setIsSubmitting(false);
    }
  };

  // ✅ FOOTER
  const footerContent = (
    <div className="flexWrapBoxE" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', padding: '10px 0' }}>
      <button 
        type="button"
        className="darkbuttonStyle" 
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
        style={{ 
          backgroundColor: '#1a1a1a', 
          color: 'white', 
          padding: '10px 30px', 
          borderRadius: '30px',
          border: 'none',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          fontWeight: '500',
          fontSize: '15px'
        }}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </div>
  );

  // ✅ HEADER
  const HeaderContent = (
    <div className="flexWrapBoxc requestCallback" style={{ display: 'flex', justifyContent: 'center', paddingBottom: '0px' }}>
      <h1>Partner Program</h1>
    </div>
  );

  return (
    <>
      <div className="query-button">
        <button onClick={() => setVisible(true)} className="btnFormNewDesign1">
          <FormMemateBlackBut 
            className="alignLeft"
            target="_blank"
            buttonTextdark="Become a Partenr"
            showButton1={true}
          />
        </button>
      </div>

      <Dialog
        visible={visible}
        style={{ width: '700px', maxWidth: '95vw' }}
        className={style.requestsendModel}
        onHide={() => !isSubmitting && setVisible(false)}
        footer={footerContent}
        header={HeaderContent}
        closable={!isSubmitting}
      >
        <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>
          
          {/* 2-Column Grid for Top 4 Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            
            {/* NAME */}
            <div className={style.marginbotton}>
              <label>Name</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input 
                    placeholder="Enter your name" 
                    {...field} 
                    style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px' }} 
                  />
                )}
              />
              {errors.name && <p className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.name.message}</p>}
            </div>

            {/* EMAIL */}
            <div className={style.marginbotton}>
              <label>Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input 
                    placeholder="example@gmail.com" 
                    {...field} 
                    style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px' }} 
                  />
                )}
              />
              {errors.email && <p className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.email.message}</p>}
            </div>

            {/* COMPANY NAME */}
            <div className={style.marginbotton}>
              <label>Company name</label>
              <Controller
                name="company_name"
                control={control}
                render={({ field }) => (
                  <input 
                    placeholder="Company name" 
                    {...field} 
                    style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px' }} 
                  />
                )}
              />
              {errors.company_name && <p className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.company_name.message}</p>}
            </div>

            {/* INDUSTRY */}
            <div className={style.marginbotton}>
              <label>Industry</label>
              <Controller
                name="industry"
                control={control}
                render={({ field }) => (
                  <input 
                    placeholder="Industry" 
                    {...field} 
                    style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px' }} 
                  />
                )}
              />
              {errors.industry && <p className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.industry.message}</p>}
            </div>
          </div>

          {/* MESSAGE */}
          <div className={style.marginbotton}>
            <label >Message</label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  placeholder="Enter message"
                  rows={5}
                  {...field}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                    fontSize: "15px",
                    resize: "vertical"
                  }}
                />
              )}
            />
            {errors.message && <p className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.message.message}</p>}
          </div>

          {/* CAPTCHA */}
          <div className={style.marginbotton} style={{ marginTop: '20px' }}>
            {typeof window !== "undefined" && (
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            )}
            {error && <p className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{error}</p>}
          </div>

        </form>

        {/* SERVER ERROR */}
        {serverError && (
          <p className="error-message" style={{ color: 'red', fontSize: '14px', marginTop: '15px', textAlign: 'center' }}>{serverError}</p>
        )}
      </Dialog>
    </>
  );
};

export default PartnerProgram;