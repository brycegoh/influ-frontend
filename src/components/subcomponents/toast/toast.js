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
    console.log("render");
    setTimeout(() => {
      console.log("running");
      setStatus("outgoing");
    }, interval);

    return () => {
      setStatus("incoming");
    };
  }, [notificationArray]);

  return (
    <div className={`notification-container ${position} ${status}`}>
      {notiArray.map((notification, i) => {
        return (
          <div
            key={i}
            className={`primary-font flex-column-start-center notification ${position} ${notification.type} `}
          >
            <div className={`flex-row-start-center notification-title`}>
              <img
                src={icons[notification.type]}
                className="notification-icon"
              />
              <div>{notification.title}</div>
            </div>
            {notification.description && (
              <div className={`flex-row-start-center notification-description`}>
                <p>{notification.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default React.memo(Toast);
