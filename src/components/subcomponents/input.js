import React, { forwardRef } from "react";

const Input = React.forwardRef((props, ref) => {
  let { placeholder, onChange, type, errorStatus = false, errorMsg } = props;

  return (
    <div>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errorStatus && <div>{errorMsg}</div>}
    </div>
  );
});

export default Input;
