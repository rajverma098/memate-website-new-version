import "./style.css";
import style from "./contactus.module.scss";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { DeleteNowAPI } from "../../api/contactAPI";

const schema = yup
  .object({
    phoneNumber: yup.string().nullable(),
    email: yup.string().email("Invalid email address").nullable(),
  })
  .test(
    "phone-or-email",
    "Please enter phone number or email",
    (value) => !!(value?.phoneNumber || value?.email)
  );

const DeleteRequestComponent = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!captchaValue) {
      setCaptchaError("Please complete the CAPTCHA.");
      return;
    }

    try {
      await DeleteNowAPI({
        phoneNumber: data.phoneNumber || null,
        email: data.email || null,
        token: captchaValue,
      });

      reset();
      window.location.href = "/thank-you";
    } catch {
      setServerError("Server error. Please try again later.");
    }
  };

  return (
    <div className="deleteRequestWrapper">
    <div className={`deleteRequestMain ${style.requestsendModel}`} style={{ width: 566 }}>
      <h1 className="deleteRequestHeading">Delete Request</h1>

      <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>

        {/* Phone */}
        <div className={style.marginbotton}>
          <label>Phone number</label>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                defaultCountry="AU"
                placeholder="+61"
                className="phoneInput input2"
                onChange={(value) => {
                  field.onChange(value);
                  clearErrors();
                }}
              />
            )}
          />
        </div>
<p className="OrSeprate">OR</p>
        {/* Email */}
        <div className={style.marginbotton}>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="company@email.com"
                onChange={(e) => {
                  field.onChange(e);
                  clearErrors();
                }}
              />
            )}
          />
        </div>

        {/* Validation Error */}
        {errors.root && (
          <p className="error-message redmessage">
            {errors.root.message}
          </p>
        )}

        {/* CAPTCHA */}
        <div className={style.marginbotton}>
          <ReCAPTCHA
            sitekey={process.env.MAIL_SITE_KEY}
            onChange={(value) => {
              setCaptchaValue(value);
              setCaptchaError("");
              setServerError("");
            }}
          />
        </div>

        {captchaError && <p className="error-message redmessage">{captchaError}</p>}
        {serverError && <p className="error-message redmessage">{serverError}</p>}

        <button type="submit" className="darkbuttonStyle">Send</button>
      </form>
    </div>
    </div>
  );
};

export default DeleteRequestComponent;
