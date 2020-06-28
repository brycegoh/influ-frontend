import React, { useState, useEffect } from "react";
import moment from "moment";
import { _forgetPassword } from "../../services/index";
import { useHistory } from "react-router-dom";
import Button from "../subcomponents/button/button";
import Input from "../subcomponents/input";
import "../layout.css";

function ForgetPassword(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const onFormChange = (e) => {
    setEmail(e.target.value);
  };
  const sendEmail = () => {
    _forgetPassword({ email: email }).then(() => {
      history.push("/");
    });
  };

  return (
    <div
      style={{ height: "500px" }}
      className="flex-column-center-center hundredhundred primary-font"
    >
      <Input type="text" placeholder={"Email"} onChange={onFormChange} />
      <Button
        onClick={sendEmail}
        value={"Send Email"}
        type="primary"
        size="regular"
      />
    </div>
  );
}

export default ForgetPassword;
