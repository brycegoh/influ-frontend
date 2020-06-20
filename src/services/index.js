import axios from "axios";
import { API_ENDPOINT } from "../config/links";

export const _getTokens = () =>
  axios({
    method: "get",
    withCredentials: true,
    url: `${API_ENDPOINT}/auth/refresh-tokens`,
  });

export const _login = (email, pw) =>
  axios({
    method: "post",
    withCredentials: true,
    data: {
      username: email,
      password: pw,
    },
    url: `${API_ENDPOINT}/users/login`,
  });
