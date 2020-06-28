import React, { useState, useEffect } from "react";
import moment from "moment";
import { _resetPassword } from "../../services/index";
import { useHistory } from "react-router-dom";
import Button from "../subcomponents/button/button";
import Input from "../subcomponents/input";
import "../layout.css";

function ResetPassword(props) {
  const history = useHistory();
  const [verificationData, setVerificationData] = useState({
    upn: null,
    dat: null,
    newPassword: "",
  });
  const [expiryStatus, setExpiryStatus] = useState(false);
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
    _resetPassword(verificationData).then((res) => console.log(res));
  };

  return (
    <div
      style={{ height: "500px" }}
      className="flex-column-center-center hundredhundred primary-font"
    >
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
