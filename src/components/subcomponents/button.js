import React from "react";

function Button(props) {
  let { onClick, value } = props;

  return <button onClick={onClick}>{value}</button>;
}

export default Button;
