import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../layout.css";
import handShakeLogo from "../../assets/handShakeLogo.svg";

function Heading() {
  return (
    <div className="flex-row-space-between-center tile-one-container">
      <div className="tile-one-block left-block-bg flex-column-center-center ">
        <div className="flex-row-space-between-center tile-one-rectangle">
          <div className="flex-column-center-center tile-one-logo">
            <img src={handShakeLogo} className="tile-one-handshake" />
          </div>
          <div className="flex-column-center-center tile-one-laico">LAICO</div>
        </div>
        <div className="flex-row-center-center tile-one-tagline">
          Empowering Marketing Capacilities for Everyone
        </div>
      </div>

      <div className="tile-one-block right-block-bg flex-column-center-start">
        <div className="flex-column-center-start">
          <div className="tile-one-welcome">Welcome</div>
          <div className="tile-one-intro">
            Since our opening, we have become masters of our craft. Our
            commitment to quality products, exceptional services and
            incomparable customer care keeps our community coming back for more.
          </div>
        </div>
        <div className="flex-column-center-start">
          <div className="flex-row-space-between-center tile-one-socials-bar">
            <div className="tile-one-social-logo"> instas </div>
            <div className="tile-one-social-logo"> fb </div>
            <div className="tile-one-social-logo"> twitter </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
