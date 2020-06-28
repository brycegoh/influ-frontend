import React from "react";
import "./button.css";

function Button(props) {
  let { onClick, value, type, size, refer } = props;

  const buttonTypes = {
    success: "button-success",
    error: "button-error",
    warning: "button-warning",
    secondary: "button-secondary",
    primary: "button-primary",
  };
  const buttonSize = {
    xsmall: "button-xsmall",
    small: "button-small",
    large: "button-large",
    xlarge: "button-xlarge",
    regular: "",
  };

  return (
    <button
      ref={refer}
      onClick={onClick}
      className={`pure-button primary-font ${buttonTypes[type]} ${buttonSize[size]}`}
    >
      {value}
    </button>
  );
}
export default Button;
