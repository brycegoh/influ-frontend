import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Heading from "./heading";
import "../layout.css";
import "./landingpage.css";

function LandingPage() {
  const history = useHistory();

  return (
    <div className="flex-column-start-center primary-font">
      <Heading />
    </div>
  );
}

export default LandingPage;
