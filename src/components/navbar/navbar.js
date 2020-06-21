import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../subcomponents/button";
import Burgerbar from "./burgerbar";
import "../../layout.css";
import "./navbar.css";

function Navbar(props) {
  const [currentTab, setCurrentTab] = useState(null);

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
          onClick={() => redirectTo(`/${links[tab]}`)}
          className="flex-column-center-center navbar-items"
        >
          {tab}
        </div>
      ))}
      <div className="flex-row-center-center navbar-button">
        <Button onClick={redirectTo} value={"Login"} />
        <Button onClick={redirectTo} value={"Register"} />
      </div>
    </div>
  );
}

export default Navbar;
