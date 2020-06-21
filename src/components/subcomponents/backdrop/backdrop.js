import React from "react";
import "./backdrop.css";

function Backdrop(props) {
  return <div onClick={props.onClick} className="backdrop" />;
}

export default Backdrop;
