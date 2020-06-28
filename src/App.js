import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Route,
  useHistory,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./components/landingpage/landingPage";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./components/login/login";
import Backdrop from "./components/subcomponents/backdrop/backdrop";
import EmailVerification from "./components/emailVerification/emailVerification.js";
import ForgetPassword from "./components/forgetPassword/forgetPassword.js";
import ResetPassword from "./components/resetPassword/resetPassword.js";
import Register from "./components/register/register.js";
import { _getSession } from "./services";
import ProtectedRoute from "./components/protectedRoute";

function App(props) {
  const { userId, email, userType } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    _getSession()
      .then((res) => {
        axios.defaults.headers.common["csrf-token"] = res.data["_csrf"];
        if (res.data && res.data.user) {
          let { userId, email, userType } = res.data.user;
          dispatch({
            type: "INITIAL_ADD_USER",
            payload: { userId, email, userType },
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const tabs = ["About Us", "Blog", "Contact Us"];
  const links = {
    "About Us": "about-us",
    Blog: "blog",
    "Contact Us": "contact-us",
  };

  const [sideDrawerStatus, setSideDrawerStatus] = useState(false);
  const onBurgerBar = () => {
    console.log("rans");
    return setSideDrawerStatus(!sideDrawerStatus);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <BrowserRouter>
        <Navbar tabs={tabs} links={links} onBurgerBar={onBurgerBar} />
        <Sidebar
          sideDrawerStatus={sideDrawerStatus}
          onBurgerBar={onBurgerBar}
          tabs={tabs}
          links={links}
        />
        {sideDrawerStatus && <Backdrop onClick={onBurgerBar} />}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/verify-email/" component={EmailVerification} />
          <Route exact path="/forget-password" component={ForgetPassword} />
          <Route exact path="/reset-password/" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
