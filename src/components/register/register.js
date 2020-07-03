import React, { useState, useEffect, useCallback } from "react";
import { Input, Button } from "../subcomponents";
import "../layout.css";
import "../login/login.css";
import { _register } from "../../services/index";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Register(props) {
  const history = useHistory();
  const [emailPass, setEmailPass] = useState({ email: null, password: null });
  const onRegister = () => {
    _register(emailPass).then((res) => {
      console.log(res.data.payload);
    });
  };
  const onFormChange = (e, value) => {
    setEmailPass({ ...emailPass, [value]: e.target.value });
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
      <Button
        onClick={onRegister}
        value="Join Us"
        type="primary"
        size="regular"
      />
    </div>
  );
}

export default React.memo(Register);
