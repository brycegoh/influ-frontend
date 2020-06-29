import React, { useState, useEffect, useRef } from "react";
import Input from "../subcomponents/input/input";
import Button from "../subcomponents/button/button";
import Toast from "../subcomponents/toast/toast";
import "../layout.css";
import "./login.css";
import { _login } from "../../services/index";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const history = useHistory();
  const { userId, email, userType } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const firstInput = useRef(null);

  useEffect(() => {
    firstInput.current.focus();
    // document.getElementById("emailInput").focus();
  }, []);

  const [emailPass, setEmailPass] = useState({ email: null, password: null });
  const [errorArray, setErrorArray] = useState([]);

  const onFormChange = (e, value) => {
    setEmailPass({ ...emailPass, [value]: e.target.value });
  };

  const onLogin = () => {
    let { email, password } = emailPass;
    _login(email, password)
      .then((res) => {
        if (res.data["_csrf"]) {
          axios.defaults.headers.common["csrf-token"] = res.data["_csrf"];
        }

        if (res.data.errorFlag) {
          setErrorArray(res.data.error);
        } else {
          let { userId, email, userType } = res.data.user;
          dispatch({
            type: "INITIAL_ADD_USER",
            payload: { userId, email, userType },
          });
          history.push("/dashboard");
        }
      })
      .catch((e) => {
        setErrorArray([
          {
            type: "error",
            title: "Invalid Username or Password",
            description: "Please check your username or password",
          },
        ]);
      });
  };
  const onEnterKey = (e) => {
    if (e.key === "Enter") {
      onLogin();
    }
  };
  const redirect = (path) => {
    history.push(path);
  };

  return (
    <div className="flex-column-center-center login-container">
      <Toast
        position="top-right"
        interval={2000}
        notificationArray={errorArray}
      />

      <form className="flex-column-center-center" onKeyDown={onEnterKey}>
        <Input
          ref={firstInput}
          type="text"
          placeholder={"Email"}
          onChange={(e) => onFormChange(e, "email")}
        />
        <Input
          id="passwordInput"
          type="password"
          placeholder={"Password"}
          onChange={(e) => onFormChange(e, "password")}
        />
      </form>
      <Button onClick={onLogin} value="Login" type="primary" size="regular" />
      {/* <a href="/forget-password">Forget password?</a> */}
      <Button
        onClick={() => redirect("/forget-password")}
        value="Forget password?"
        type="primary"
        size="regular"
      />
    </div>
  );
}

export default React.memo(Login);
