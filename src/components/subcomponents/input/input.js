import React, { forwardRef, Fragment } from "react";
import "./input.css";
const Input = React.forwardRef((props, ref) => {
  let { placeholder, onChange, type, errorStatus = false, errorMsg } = props;

  return (
    <Fragment>
      <input
        className="input-main"
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errorStatus && <p>{errorMsg}</p>}
    </Fragment>
  );
});

export default Input;
