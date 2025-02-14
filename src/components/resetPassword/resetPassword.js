import React, { useState, useEffect } from "react";
import moment from "moment";
import { _resetPassword } from "../../services/index";
import { useHistory } from "react-router-dom";
import Button from "../subcomponents/button/button";
import Input from "../subcomponents/input/input";
import Toast from "../subcomponents/toast/toast";
import "../layout.css";

function ResetPassword(props) {
  const history = useHistory();
  const [verificationData, setVerificationData] = useState({
    upn: null,
    dat: null,
    newPassword: "",
  });
  const [expiryStatus, setExpiryStatus] = useState(false);
  const [notificationArray, setNotiArray] = useState([]);
  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    if (moment().unix() > Number(params.get("dat"))) {
      setExpiryStatus(true);
    }
    setVerificationData({
      ...verificationData,
      upn: params.get("upn"),
      dat: params.get("dat"),
    });
  }, []);

  const onFormChange = (e) => {
    setVerificationData({
      ...verificationData,
      newPassword: e.target.value,
    });
  };

  const resetPw = () => {
    _resetPassword(verificationData).then((res) =>
      setNotiArray(res.data.message)
    );
  };

  return (
    <div
      style={{ height: "500px", width: "600px" }}
      className="flex-column-center-center hundredhundred primary-font"
    >
      <Toast
        position="top-right"
        interval={2000}
        notificationArray={notificationArray}
      />
      {!expiryStatus && (
        <Input
          type="password"
          placeholder={"Password"}
          onChange={onFormChange}
        />
      )}
      {!expiryStatus && (
        <Button
          onClick={resetPw}
          value={"Reset Password"}
          type="primary"
          size="regular"
        />
      )}
      {expiryStatus && <h1>INVALID</h1>}
    </div>
  );
}

export default ResetPassword;
