"use client";
import "./style.css";
import style from "./stickyForm.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://app.memate.com.au/api/v1";

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

  if (!response.ok) throw new Error("API Error");

  return response.json();
};

// ✅ VALIDATION
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone_number: yup.string().required("Phone number is required"),
});

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);     
  const [captchaValue, setCaptchaValue] = useState(null);
  const [placeholder, setPlaceholder] = useState("+61");
  const [error, setError] = useState("");

const router = useRouter();
  const recaptchaRef = useRef(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: "", phone_number: "", email: "" },
  });
  useEffect(() => {
    const isClosed =
      typeof window !== "undefined" &&
      localStorage.getItem("popupClosed");

    if (!isClosed) {
      const timer = setTimeout(() => setIsVisible(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  // ✅ CAPTCHA
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setError("");
  };

  // ✅ COUNTRY CODE
  const handleCountryChange = (country) => {
    if (country) {
      const code = getCountryCallingCode(country);
      setPlaceholder(`+${code}`);
    } else {
      setPlaceholder("+61");
    }
  };

const onSubmit = async (data) => {
    if (!captchaValue) {
      setError("Please complete CAPTCHA");
      return;
    }

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone_number
        ? data.phone_number.replace(/\s|\(|\)|-/g, "")
        : "",
      "g-recaptcha-response": captchaValue,
    };

    try {
      const res = await addEnquirySubmission(47, payload);

      console.log("SUCCESS:", res);

      reset();
    setIsVisible(false);
   setTimeout(() => {
    router.push("/thank-you");
  }, 300);

      if (recaptchaRef.current) recaptchaRef.current.reset();
      setCaptchaValue(null);

      if (typeof window !== "undefined") {
        localStorage.setItem("popupClosed", "true");
      }
    } catch (err) {
      console.error(err);
      setError("Submission failed. Try again.");
    }
  };

  const closePopup = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("popupClosed", "true");
    }
  };

  if (!isVisible) return null;
  return (
    <>
   <div className="popup-overlay">
        <div className="popup-content">
            <div className="stickyPopupWrap">
              <div className="leftTitle">
                <span>Not <br />ready<br /> for a<br /> demo?</span>
              </div>
              <div className="rightForm">
                <h4>Book a Quick Call</h4>
                <div className="formwrapper">
                  <form className={style.requestsendForm1} onSubmit={handleSubmit(onSubmit)}>
                    <div className="formIN">
                      <div className={style.marginbotton}>
                        <Controller
                          name="name"
                          control={control}
                          render={({ field }) => <input id="name" placeholder="Name" {...field} />}
                        />
                        {errors.name && <p className="error-message redmessage">{errors.name.message}</p>}
                      </div>
                      <div className={`phone_number ${style.marginbotton}`}>
                        <Controller
                          name="phone_number"
                          control={control}
                          render={({ field }) => (
                            <PhoneInput
                              defaultCountry="AU"
                              value={field.value}
                              className="phoneInput input2"
                              placeholder={placeholder}
                              onChange={field.onChange}
                              onCountryChange={handleCountryChange}
                                international={false}
  countrySelectComponent={() => null} 
                            />
                          )}
                        />
                        {errors.phone_number && <p className="error-message redmessage">{errors.phone_number.message}</p>}
                      </div>
                      <div className={style.marginbotton}>
                        
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => <input id="email" placeholder="Email" {...field} />}
                        />
                        {errors.email && <p className="error-message redmessage">{errors.email.message}</p>}
                      </div>
                      <div className={style.marginbotton}>
                       
                         <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
                        {error && <p className="redmessage" style={{ color: "red" }}>{error}</p>}
                     
                      </div>
                      <div className="stickyWhatsApp">
                        <h6>Or message us on <a href="https://wa.me/message/AAMNHTIDYUW6M1" target="_blank">WhatsApp <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_30_660)"> <path d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z" fill="#4CAF50"/> <path d="M10.9997 5.21057C9.93309 5.21098 8.88734 5.50602 7.97782 6.06314C7.0683 6.62026 6.33035 7.4178 5.84541 8.36777C5.36047 9.31774 5.14738 10.3832 5.22965 11.4466C5.31193 12.51 5.68636 13.53 6.31165 14.3941L5.58797 16.5449L7.81547 15.8328C8.56903 16.3299 9.42839 16.6439 10.3249 16.7496C11.2214 16.8554 12.1303 16.7501 12.9788 16.442C13.8274 16.134 14.5921 15.6318 15.212 14.9756C15.8319 14.3193 16.2898 13.5272 16.549 12.6625C16.8082 11.7977 16.8616 10.8844 16.7049 9.99534C16.5483 9.1063 16.1859 8.26621 15.6467 7.54218C15.1075 6.81814 14.4065 6.23023 13.5996 5.82539C12.7928 5.42055 11.9024 5.21 10.9997 5.21057ZM14.0768 13.3983L13.4602 14.0149C12.8118 14.6633 11.0923 13.9498 9.56823 12.4228C8.04415 10.8958 7.36099 9.1807 7.97757 8.53952L8.59415 7.92294C8.71355 7.81319 8.86981 7.75229 9.03198 7.75229C9.19415 7.75229 9.35041 7.81319 9.46981 7.92294L10.3788 8.82899C10.4529 8.90105 10.5072 8.99093 10.5367 9.09002C10.5661 9.18912 10.5695 9.29411 10.5467 9.39493C10.5239 9.49576 10.4756 9.58903 10.4064 9.66582C10.3372 9.74261 10.2494 9.80033 10.1515 9.83347C10.0071 9.87962 9.88598 9.9797 9.81346 10.1129C9.74093 10.2461 9.72257 10.4021 9.76218 10.5485C9.92428 11.2287 10.7999 12.0725 11.4498 12.2347C11.5954 12.2652 11.7471 12.2422 11.8772 12.1699C12.0072 12.0976 12.1067 11.9808 12.1576 11.841C12.1903 11.7416 12.2483 11.6525 12.3258 11.5822C12.4033 11.512 12.4977 11.463 12.5997 11.4401C12.7018 11.4172 12.8081 11.4212 12.9081 11.4516C13.0082 11.482 13.0987 11.5379 13.1707 11.6137L14.0782 12.5227C14.1878 12.6423 14.2484 12.7986 14.2482 12.9608C14.2479 13.123 14.1867 13.2791 14.0768 13.3983Z" fill="white"/> </g> <defs> <clipPath id="clip0_30_660"> <rect width="22" height="22" fill="white"/> </clipPath> </defs> </svg></a></h6>
                      </div>
                    </div>
                     <div className="stickyFormFooter">
                        {/* <button type="button" onClick={closePopup} disabled={isSubmitting}>Cancel</button> */}
                        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send"}</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          
          <button onClick={closePopup} className="stickyCloseBtn" aria-label="Close popup">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#667085" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
        <style jsx>{`
        .popup-overlay.thank-you-active {
    width: 600px;
    text-align: center;
    padding: 0;
    background: #fff;
    border-radius: 21px;
    border: 1px solid #eaecf0;
}
    .thank-you-active .stickyCloseBtn {
    background: 0 0;
    border: 0;
    position: absolute;
        top: 17px;
    right: 15px;
}
   .thank-you-active .popup-content {
    width: 100%;
}
  .thank-you-modal {
    margin-top: 64px;
}
    .thankYouBut {
    font-family: 'sequel_sans' !important;
    font-size: 12px;
    font-style: normal;
    line-height: normal;
    text-align: center;
    color: var(--Gray-700, #344054);
    font-weight: 415;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 32px;
    gap: 8px;
    width: 105px;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid #D0D5DD;
    border-radius: 48px;
    margin: 0 auto 20px;
}
.thank-you-content {
    text-align: center;
    width: 100%;
    margin: 14px auto;
    padding: 24px 40px;
    background: url(https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/thnakyou-bg.png);
    height: 248px;
    display: flex;
    align-items: center;
    justify-content: center;
      border-top: 1px solid #eaecf0;
        border-bottom: 1px solid #eaecf0;
}
    .thank-you-content h2 {
     font-family: 'sequel_sans' !important;
    font-style: normal;
    font-weight: 420;
    font-size: 42px;
    line-height: 50px;
    text-align: center;
    color: #29292B;
    flex: none;
    order: 0;
    flex-grow: 0;
}
    .thank-you-content p {
      font-family: 'sequel_sans' !important;
      font-style: normal;
      font-weight: 415;
      font-size: 32px;
      line-height: 40px;
      leading-trim: both;
      text-edge: cap;
      text-align: center;
      color: #29292B;
      margin-top: 1px;
      }
    .stickyWhatsApp {
       margin-top: 16px;
       padding-bottom: 9px;
}
    .stickyFormFooter {
         background: #fff;
    justify-content: center;
    align-items: center;
    margin: 6px 0px 0;
    padding: 12px 6px;
    display: flex;
    border-top: 1px solid #eaecf0;
    border-radius: 0 0 21.4286px 21.4286px;
}
      .stickyFormFooter button {
    width: 170px;
    height: 37.43px;
    color: #344054;
    font-family: 'sequel_sans' !important;
    font-weight: 300;
    margin-right: 5px;
    align-items: center;
    display: flex;
    font-size: 14px;
    font-style: normal;
    justify-content: center;
    line-height: normal;
    padding: 9.14286px 22.8571px;
    text-align: center;
    background: #fff;
    border: 1px solid #d0d5dd;
    border: 1px solid var(--Gray-300, #d0d5dd);
    border-radius: 48px;
    color: #344054;
    color: var(--Gray-700, #344054);
    font-weight: 415;
}
      .stickyFormFooter button:last-child {
    color: #fff;
    background: #29292B;
}
        .popup-overlay {
          position: fixed;
          bottom: 217px;
          right: 20px; 
          width: 700px;
          background: rgba(252, 252, 253, 0.95);
          box-shadow: 0px 14.2857px 17.1429px -2.85714px rgba(16, 24, 40, 0.08);
          border-radius: 21.4286px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          z-index: 9999;
          padding: 33px 22px;
        }
          .stickyWhatsApp h6 {
          height: 12px;
          font-family: 'sequel_sans' !important;
          font-style: normal;
          font-weight: 415;
          font-size: 17px;
          line-height: 29px;
          text-align: center;
          color: #29292B;
          flex: none;
          order: 0;
          flex-grow: 0;
          display: flex;
          justify-content: center;
            flex-direction: row;
            align-items: center;
      }
          .stickyWhatsApp h6 a {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 3.57px;
           margin-left: 10px;
            height: 22px;
            flex: none;
            order: 1;
            flex-grow: 0;
            font-family: 'sequel_sans' !important;
              font-style: normal;
              font-weight: 415;
              font-size: 17px;
              line-height: 29px;
              leading-trim: both;
              text-edge: cap;
              text-align: center;
              text-decoration-line: underline;
              color: #4CAF50;



      }
      .stickyPopupWrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
           .stickyPopupWrap .leftTitle {
            padding: 0px 22px;
           }
      .stickyPopupWrap .leftTitle span {
          font-family: 'sequel_sans_heavy_disp' !important;
            font-style: normal;
            font-weight: 700;
            font-size: 76px;
            line-height: 66px;
            leading-trim: both;
            text-edge: cap;
             text-align: center;
             display: inline-block;
            letter-spacing: -1.15714px;
            background: radial-gradient(38.06% 433.22% at 28.71% 12.27%, #1AB3FF 0.15%, #FFB258 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
      }
      .stickyPopupWrap .rightForm input{
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 10.14286px 10px;
gap: 5.71px;
width: 300px;
background: #FFFFFF;
border: 1px solid #D0D5DD !important;
border-radius: 2.85714px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
font-family: 'sequel_sans' !important;
font-style: normal;
font-weight: 310;
font-size: 12px;
line-height: 17px;
letter-spacing: -0.005em;
color: #000000;
      }
.stickyPopupWrap .phoneInput.PhoneInput input  {
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 7.14286px 10px;
gap: 5.71px;
width: 300px;
height: 32.29px;
background: #FFFFFF;
border: 1px solid #D0D5DD;
border-radius: 2.85714px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
font-family: 'sequel_sans' !important;
font-style: normal;
font-weight: 310;
font-size: 12px;
line-height: 17px;
letter-spacing: -0.005em;
color: #98A2B3;
    margin: 0!important;
}






      .stickyPopupWrap .rightForm{
      box-sizing: border-box;
      display: flex;
      // width: 356px;
      flex-direction: column;
      align-items: center;
      padding: 0px;
      background: #FFFFFF;
      border: 1px solid #EAECF0;
      box-shadow: 0px 14.2857px 17.1429px -2.85714px rgba(16, 24, 40, 0.08), 0px 5.71429px 5.71429px -2.85714px rgba(16, 24, 40, 0.03);
      border-radius: 21.4286px;
      }
       .stickyPopupWrap .rightForm .formwrapper form .formIN {
        padding: 18px 28px 3px;
        background: #FCFCFD;
      }
      .stickyPopupWrap .rightForm .formwrapper h5{
         font-family: 'sequel_sans' !important;
          font-style: normal;
          font-weight: 415;
          font-size: 22px;
          line-height: 29px;
          leading-trim: both;
          text-edge: cap;
          text-align: center;
          color: #29292B;
      }
      .stickyPopupWrap .rightForm h4{
          leading-trim: both;
    text-edge: cap;
    text-align: center;
    letter-spacing: -1.02857px;
    color: #29292b;
    border-bottom: 1px solid #eaecf0;
    width: 100%;
    padding: 7px 11.1429px 7.8571px;
    font-size: 22px;
    font-style: normal;
    font-weight: 415;
    line-height: 43px;
    font-family: sequel_sans !important;
      }
  .stickyCloseBtn {
        background: 0 0;
    border: 0;
    position: absolute;
    top: 7px;
    right: 5px;
}






@media screen and (max-width: 767px) {
 .popup-overlay {
           width: 100%;
        background: transparent;
        box-shadow: none;
        padding: 0;
        margin: 0;
        justify-content: end;
}
        
.leftTitle {
    display: none;
}
    .stickyPopupWrap .rightForm{
           width: 100%;
}
    .stickyPopupWrap {
    justify-content: flex-end;
}
  .formwrapper {
    width: 100%;
}
    .stickyPopupWrap .rightForm input {
    width: 100%;
}
    .stickyPopupWrap .rightForm .formwrapper form .formIN {
    padding: 18px 14px 3px;
}
    .stickyWhatsApp h6 {
    font-size: 12px;
}
    .stickyWhatsApp h6 a {
    margin-left: 4px;
    font-size: 12px;
}
    .stickyFormFooter button {
    width: 113px;

}
    .stickyWhatsApp {
    margin-top: 0;
}

}

      `}</style>
    </>
  );
};

export default Popup;
