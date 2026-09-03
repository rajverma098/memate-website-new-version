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

const EmailNow = (props) => {
  const [visible, setVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState('');
  const [serverError, setServerError] = useState('');

  // ✅ VALIDATION
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
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

    const payload = {
      name: data.name,
      email: data.email,
      message: data.message,
      "g-recaptcha-response": captchaValue,
    };

    try {
      const result = await addEnquirySubmission(48, payload);

      console.log("Success:", result);

      reset();
      setVisible(false);
      window.location.href = "/thank-you";

    } catch (err) {
      console.error(err);
      setServerError("Submission failed. Please try again.");
    }
  };

  // ✅ FOOTER
  const footerContent = (
    <div className="flexWrapBoxE">
      <button className="borderbuttonStyle firstBut" onClick={() => setVisible(false)}>
        Cancel
      </button>
      <button className="darkbuttonStyle" onClick={handleSubmit(onSubmit)}>
        Send
      </button>
    </div>
  );

  // ✅ HEADER
  const HeaderContent = (
    <div className="flexWrapBoxc requestCallback">
      <h1>{props.headingText || "Send Email"}</h1>
    </div>
  );

  return (
    <>
          <div className="query-button">
 <button onClick={() => setVisible(true)} className="btnFormNewDesign1">
  <FormMemateBlackBut 
        className="alignLeft"
        target="_blank"
        buttonTextdark="Email Now"
        showButton1={true}
  />
  </button>
</div>
      <Dialog
        visible={visible}
        style={{ width: '566px' }}
        className={style.requestsendModel}
        onHide={() => setVisible(false)}
        footer={footerContent}
        header={HeaderContent}
      >
        <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>

          {/* NAME */}
          <div className={style.marginbotton}>
            <label>Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input placeholder="Enter your name" {...field} />
              )}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>

          {/* EMAIL */}
          <div className={style.marginbotton}>
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input placeholder="company@email.com" {...field} />
              )}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          {/* MESSAGE */}
          <div className={style.marginbotton}>
            <label>Message</label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  placeholder="Enter description"
                  rows={5}
                  {...field}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #D0D5DD",
                    fontSize: "16px",
                  }}
                />
              )}
            />
            {errors.message && <p className="error-message">{errors.message.message}</p>}
          </div>

          {/* CAPTCHA */}
          <div className={style.marginbotton}>
            {typeof window !== "undefined" && (
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            )}
            {error && <p className="error-message">{error}</p>}
          </div>

        </form>

        {/* SERVER ERROR */}
        {serverError && (
          <p className="error-message">{serverError}</p>
        )}
      </Dialog>
    </>
  );
};

export default EmailNow;