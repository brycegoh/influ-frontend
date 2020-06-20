import React from "react";

function Input(props) {
  let { placeholder, value, onChange } = props;

  return <input placeholder={placeholder} value={value} onChange={onChange} />;
}

export default Input;
