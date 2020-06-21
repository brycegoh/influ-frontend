import React, { useState, useEffect } from "react";
import Input from "./subcomponents/input";
import Button from "./subcomponents/button/button";
import "../layout.css";
import { _login } from "../services/index";
import { connect } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onLogin = () => {
    _login(email, password)
      .then((res) => {
        let { userId, email, userType } = res.data.user;
        let cfToken = res.headers["cf-token"];
        console.log({ userId, email, userType, cfToken });
        props.setReduxUserDataAndCfToken({
          userId,
          email,
          role: userType,
          cfToken,
        });
        setPassword(null);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form>
        <Input placeholder={"Email"} value={email} onChange={onEmailChange} />
        <Input
          placeholder={"Password"}
          value={password}
          onChange={onPasswordChange}
        />
      </form>
      <Button onClick={onLogin} value="Login" type="primary" size="regular" />
    </div>
  );
}

export default connect(
  (state) => state.user,
  (dispatch) => {
    return {
      setReduxUserDataAndCfToken: ({ userId, email, role, cfToken }) => {
        return dispatch({
          type: "ADD_USERID_EMAIL_ROLE_CSRFTOKEN",
          payload: {
            userId,
            email,
            role,
            cfToken,
          },
        });
      },
    };
  }
)(Login);
