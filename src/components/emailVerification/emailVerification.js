import React, { useState, useEffect } from "react";
import moment from "moment";
import { _resendEmailVerification, _verifyEmail } from "../../services/index";
import { useHistory } from "react-router-dom";
import { Button, Toast } from "../subcomponents";
import "../layout.css";

function EmailVerification(props) {
  const history = useHistory();
  const [verificationData, setVerificationData] = useState({
    token: null,
    date: null,
  });
  const [notificationArray, setNotiArray] = useState([]);
  const [expiryStatus, setExpiryStatus] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    if (moment().unix() > Number(params.get("dat"))) {
      setExpiryStatus(true);
      setVerificationData({
        token: params.get("upn"),
        date: params.get("dat"),
      });
    } else {
      setVerificationData({
        token: params.get("upn"),
        date: params.get("dat"),
      });
    }
  }, []);

  const resendEmail = () => {
    console.log(verificationData);
    _resendEmailVerification(verificationData)
      .then((res) => {
        setNotiArray(res.data.messasge);
      })
      .catch((e) => console.log(e));
  };
  const verifyEmail = () => {
    _verifyEmail(verificationData)
      .then((res) => {
        setNotiArray(res.data.message);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div
      style={{ height: "500px" }}
      className="flex-column-center-center hundredhundred primary-font"
    >
      <Toast
        position="top-right"
        interval={2000}
        notificationArray={notificationArray}
      />
      {expiryStatus ? (
        <Button
          onClick={resendEmail}
          value={"Resend to email"}
          type="primary"
          size="regular"
        />
      ) : (
        <Button
          onClick={verifyEmail}
          value={"Verify Email"}
          type="primary"
          size="regular"
        />
      )}
    </div>
  );
}

export default EmailVerification;
