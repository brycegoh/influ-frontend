import React, { useState, useEffect, useCallback } from "react";
import Input from "../subcomponents/input";
import Button from "../subcomponents/button/button";
import "../layout.css";
import "./login.css";
import { _login } from "../../services/index";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const { userId, email, userType } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [emailPass, setEmailPass] = useState({ email: null, password: null });

  const onFormChange = (e, value) => {
    setEmailPass({ ...emailPass, [value]: e.target.value });
  };

  const onLogin = () => {
    let { email, password } = emailPass;
    _login(email, password)
      .then((res) => {
        let { userId, email, userType } = res.data.user;
        dispatch({
          type: "INITIAL_ADD_USER",
          payload: { userId, email, userType },
        });
        history.push("/dashboard");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div class="flex-column-center-center login-container">
      <form class="flex-column-center-center">
        <Input
          type="text"
          placeholder={"Email"}
          onChange={(e) => onFormChange(e, "email")}
        />
        <Input
          type="password"
          placeholder={"Password"}
          onChange={(e) => onFormChange(e, "password")}
        />
      </form>
      <Button onClick={onLogin} value="Login" type="primary" size="regular" />
    </div>
  );
}

export default React.memo(Login);
