import React, { useState, Fragment, useEffect } from "react";
import "./toast.css";
import "../../layout.css";
const check = require("./icons/check.svg");
const error = require("./icons/error.svg");
const warning = require("./icons/warning.svg");

const Toast = (props) => {
  const { notificationArray, position, interval } = props;
  const icons = {
    error: error,
    success: check,
    warning: warning,
  };

  const [notiArray, setNotiArray] = useState([]);
  const [status, setStatus] = useState("incoming");

  useEffect(() => {
    setNotiArray(notificationArray);
    if (interval) {
      const intFunc = setInterval(() => {
        // let copy = [...notiArray];
        // copy.splice(0);
        // setNotiArray([]);
        setStatus("outgoing");
        return () => {
          clearInterval(intFunc);
          setNotiArray([]);
        };
      }, interval);
    }
  }, []);

  return (
    <div className={`notification-container ${position}`}>
      {notiArray.map((notification, i) => (
        <div
          key={i}
          className={`primary-font flex-column-start-center notification ${position} ${notification.type} ${status}`}
        >
          <div className={`flex-row-start-center notification-title`}>
            <img src={icons[notification.type]} className="notification-icon" />
            <div>{notification.title}</div>
          </div>
          <div className={`flex-row-start-center notification-description`}>
            <p>{notification.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default React.memo(Toast);
