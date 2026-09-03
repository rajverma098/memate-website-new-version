import axios from "axios";
import CryptoJS from "crypto-js";

const BASE_URL = "https://admin.memate.com.au/api/v2";
const HMAC_SECRET = "super_long_256bit_secret";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

const generateHmacSha256 = (message, secret) => {
  return CryptoJS.HmacSHA256(message, secret).toString(CryptoJS.enc.Hex);
};


const securePost = async (url, payload) => {
  const timestamp = Date.now();
  const nonce = Math.random().toString(36).substring(2, 15);
  const payloadStr = JSON.stringify(payload);

  const signaturePayload = `${payloadStr}.${timestamp}.${nonce}`;
  const signature = generateHmacSha256(signaturePayload, HMAC_SECRET);

  return api.post(url, payloadStr, {
    headers: {
      "X-Signature": signature,
      "X-Timestamp": timestamp.toString(),
      "X-Nonce": nonce
    }
  });
};

export const RequestCallBackAPI = async (formData) => {
  try {
    const response = await securePost("/request-callback", formData);
    return response.data;
  } catch (error) {
    console.error("RequestCallBackAPI Error:", error);
    throw error;
  }
};

export const emailNowAPI = async (formData) => {
  try {
    const response = await securePost("/request-callback", formData);
    return response.data;
  } catch (error) {
    console.error("emailNowAPI Error:", error);
    throw error;
  }
};



export const DeleteNowAPI = async (formData) => {
  try {
    const response = await securePost("/delete-request", formData);
    return response.data;
  } catch (error) {
    console.error("Delete Request Error:", error);
    throw error;
  }
};

export const SubscribeEmail = async (formData) => {
  try {
    const response = await api.post("/subscribe-email", JSON.stringify(formData));
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error; 
  }
};



