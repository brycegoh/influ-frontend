import React from "react";

function Input(props) {
  let { placeholder, onChange, type, errorStatus = false, errorMsg } = props;

  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={onChange} />
      {errorStatus && <div>{errorMsg}</div>}
    </div>
  );
}

export default Input;
