import axios from "axios";
import { API_ENDPOINT } from "../config/links";

export const _getSession = () =>
  axios({
    method: "get",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/get-session`,
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
    method: "get",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/logout`,
    data: {},
  });
