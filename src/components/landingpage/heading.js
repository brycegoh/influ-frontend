import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../layout.css";

function Heading() {
  return (
    <div className="flex-column-center-center tag-line-container">
      <div className="tag-line tag-line-main">Robin Hood of marketing</div>
      <div className="tag-line tag-line-sub">
        {"Bringing back power to "}
        <mark className="highlight">Ordinary People</mark> {"& "}
        <mark className="highlight">Small to Medium Enterprises</mark>
      </div>
    </div>
  );
}

export default Heading;
