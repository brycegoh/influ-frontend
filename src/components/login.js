import React, { useState, useEffect } from "react";
import Input from "./subcomponents/input";
import Button from "./subcomponents/button/button";
import "./layout.css";
import { _login } from "../services/index";
import { useDispatch, useSelector } from "react-redux";

function Login(props) {
  const { userId, email, userType, csrfToken } = useSelector(
    (store) => store.user
  );
  console.log({ userId, email, userType, csrfToken });
  const dispatch = useDispatch();

  const [emailPass, setEmailPass] = useState({ email: null, password: null });

  const onEmailChange = (e) => {
    setEmailPass({ ...emailPass, email: e.target.value });
  };
  const onPasswordChange = (e) => {
    setEmailPass({ ...emailPass, password: e.target.value });
  };
  const onLogin = () => {
    let { email, password } = emailPass;
    _login(email, password, csrfToken)
      .then((res) => {
        let { userId, email, userType } = res.data.user;
        let cfToken = res.headers["cf-token"];
        dispatch({
          type: "ADD_USERID_EMAIL_ROLE_CSRFTOKEN",
          payload: { userId, email, userType, cfToken },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form>
        <Input
          placeholder={"Email"}
          value={emailPass.email}
          onChange={onEmailChange}
        />
        <Input
          placeholder={"Password"}
          value={emailPass.password}
          onChange={onPasswordChange}
        />
      </form>
      <Button onClick={onLogin} value="Login" type="primary" size="regular" />
    </div>
  );
}

export default React.memo(Login);
