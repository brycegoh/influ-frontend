import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../layout.css";

function Heading() {
  return (
    <div className="flex-column-center-center tag-line-container">
      <div className="tag-line tag-line-main">
        Empowering marketing capabilities for every individual
      </div>
      <div className="tag-line tag-line-sub">
        {"To create a community of free for all marketing opportunities at "}
        <mark className="highlight">lowest cost</mark> {"& "}
        <mark className="highlight">zero risk</mark>
      </div>
    </div>
  );
}

export default Heading;
