import axios from "axios";
import { API_ENDPOINT } from "../config/links";

export const _getSession = () =>
  axios({
    method: "get",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/get-session`,
  });
export const _register = ({ email, password }) =>
  axios({
    method: "post",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/register`,
    data: {
      email: email,
      password: password,
      userType: "admin",
    },
  });
export const _login = (email, pw) =>
  axios({
    method: "post",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/login`,
    data: {
      username: email,
      password: pw,
    },
  });
export const _logout = () =>
  axios({
    method: "post",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/logout`,
    data: {},
  });
export const _resendEmailVerification = ({ token, date }) =>
  axios({
    method: "post",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/resend-email-verification`,
    data: { upn: token, dat: date },
  });
export const _verifyEmail = ({ token, date }) =>
  axios({
    method: "post",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/verify-email`,
    data: { upn: token, dat: date },
  });
export const _forgetPassword = ({ email }) =>
  axios({
    method: "post",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/forget-password-reset`,
    data: { email },
  });
export const _resetPassword = ({ upn, dat, newPassword }) =>
  axios({
    method: "post",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/password-reset`,
    data: { upn, dat, newPassword },
  });
