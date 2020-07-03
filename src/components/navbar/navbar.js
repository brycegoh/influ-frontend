import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { _logout } from "../../services/index";
import { Button } from "../subcomponents";
import Burgerbar from "./burgerbar";
import "../layout.css";
import "./navbar.css";

function Navbar(props) {
  let { tabs, links, onBurgerBar } = props;

  const { userId, email, userType } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const logOut = () => {
    _logout().then((res) => {
      if (res.data["_csrf"]) {
        axios.defaults.headers.common["csrf-token"] = res.data["_csrf"];
      }
      dispatch({
        type: "DELETE_USER",
        payload: {},
      });
      history.push("/");
    });
  };

  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <div className="flex-row-space-between-center navbar-container primary-font">
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
      <div
        className={`flex-row-space-between-center ${
          userId ? "navbar-button-row-loggedin" : "navbar-button-row-loggedout"
        }`}
      >
        {userId ? (
          <Button
            onClick={() => redirectTo("/dashboard")}
            value={"Dashboard"}
            type="primary"
            size="regular"
          />
        ) : (
          <Button
            onClick={() => redirectTo("/login")}
            value={"Login"}
            type="primary"
            size="regular"
          />
        )}
        {userId ? (
          <Button
            onClick={() => logOut()}
            value={"Logout"}
            type="primary"
            size="regular"
          />
        ) : (
          <Button
            onClick={() => redirectTo("/register")}
            value={"Register"}
            type="primary"
            size="regular"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
