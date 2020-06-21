import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../subcomponents//button/button";
import Burgerbar from "./burgerbar";
import "../../layout.css";
import "./navbar.css";

function Navbar(props) {
  let { tabs, links, onBurgerBar } = props;

  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };
  return (
    <div className="flex-row-space-between-center navbar-container">
      <Burgerbar onBurgerBar={onBurgerBar} />
      <div
        onClick={() => redirectTo("/")}
        className="flex-column-center-center navbar-logo"
      >
        <div>LOGO</div>
      </div>
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => redirectTo(`/${links[tab]}`)}
          className="flex-column-center-center navbar-items"
        >
          {tab}
        </div>
      ))}
      <div className="flex-row-space-between-center navbar-button">
        <Button
          onClick={() => redirectTo("/login")}
          value={"Login"}
          type="primary"
          size="regular"
        />
        <div className="spacer" />
        <Button
          onClick={() => redirectTo("/register")}
          value={"Register"}
          type="primary"
          size="regular"
        />
      </div>
    </div>
  );
}

export default Navbar;
