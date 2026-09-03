import "./style.css";
import style from './contactus.module.scss';
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog } from 'primereact/dialog';
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import FormMemateBlackBut from "@/layout/hover-button/FormMemateBlackBut";

// ✅ API BASE
const API_BASE_URL = process.env.API_BASE_URL || "https://app.memate.com.au/api/v1";

// ✅ API FUNCTION
const addEnquirySubmission = async (formId, data) => {
  const endpoint = `/inquiries/form/${formId}/submit/`;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("API Error");
  }

  return response.json();
};

const CallbackNow = () => {
  const [visible, setVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [placeholder, setPlaceholder] = useState("+61");
  const [error, setError] = useState('');
  const [serverError, setServerError] = useState('');

  // ✅ VALIDATION
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone_number: yup.string().required("Phone number is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ CAPTCHA HANDLER
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (value) {
      setError('');
      setServerError('');
    }
  };

  // ✅ COUNTRY CHANGE
  const handleCountryChange = (country) => {
    if (country) {
      const code = getCountryCallingCode(country);
      setPlaceholder(`+${code}`);
    } else {
      setPlaceholder("+61");
    }
  };

  // ✅ SUBMIT FUNCTION
  const onSubmit = async (data) => {
    if (!captchaValue) {
      setError("Please complete the CAPTCHA.");
      return;
    }

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone_number
        ? data.phone_number.replace(/\s|\(|\)|-/g, '')
        : '',
      'g-recaptcha-response': captchaValue,
    };

    try {
      const result = await addEnquirySubmission(47, payload);

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
    <div className="flexWrapBoxc">
      <h1 className="requestCallback">Request a callback</h1>
    </div>
  );

  return (
    <>
<div className="query-button ">
 <button onClick={() => setVisible(true)} className="btnFormNewDesign">
  <FormMemateBlackBut 
        className="alignLeft"
        target="_blank"
        buttonTextdark="Request"
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

          {/* PHONE */}
          <div className={style.marginbotton}>
            <label>Phone number</label>
            <Controller
              name="phone_number"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  defaultCountry="AU"
                  value={field.value}
                  placeholder={placeholder}
                  onChange={field.onChange}
                  onCountryChange={handleCountryChange}
                  className="phoneInput input2"
                />
              )}
            />
            {errors.phone_number && (
              <p className="error-message">{errors.phone_number.message}</p>
            )}
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
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          {/* CAPTCHA */}
          <div className={style.marginbotton}>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
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

export default CallbackNow;