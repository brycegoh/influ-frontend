import React, { useState, useEffect } from "react";
import Input from "./subcomponents/input";
import Button from "./subcomponents/button/button";
import "../layout.css";
import { _login } from "../services/index";

function Login() {
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
        console.log(res);
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

export default Login;
