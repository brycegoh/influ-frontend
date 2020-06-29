import React, { useState, useEffect } from "react";
import moment from "moment";
import { _forgetPassword } from "../../services/index";
import { useHistory } from "react-router-dom";
import Button from "../subcomponents/button/button";
import Input from "../subcomponents/input/input";
import Toast from "../subcomponents/toast/toast";
import "../layout.css";

function ForgetPassword(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [notificationArray, setNotiArray] = useState([]);
  const onFormChange = (e) => {
    setEmail(e.target.value);
  };
  const sendEmail = () => {
    _forgetPassword({ email: email }).then((res) => {
      setNotiArray(res.data.message);
      if (!res.data.errorFlag) {
        history.push("/");
      }
    });
  };

  return (
    <div
      style={{ height: "500px" }}
      className="flex-column-center-center primary-font"
    >
      <Toast
        position="top-right"
        interval={2000}
        notificationArray={notificationArray}
      />
      <div style={{ width: "500px" }} className="flex-column-center-center">
        <Input type="text" placeholder={"Email"} onChange={onFormChange} />
        <Button
          onClick={sendEmail}
          value={"Send Email"}
          type="primary"
          size="regular"
        />
      </div>
    </div>
  );
}

export default ForgetPassword;
