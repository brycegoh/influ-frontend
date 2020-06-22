import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  useHistory,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "./components/landingpage/landingPage";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./components/login";
import Backdrop from "./components/subcomponents/backdrop/backdrop";
import { _getTokens } from "./services";
import ProtectedRoute from "./components/protectedRoute";

function App(props) {
  console.log(props);
  useEffect(() => {
    console.log("REFRESHING TOKENS");
    _getTokens()
      .then((res) => {
        let { userId, email, userType } = res.data;
        let cfToken = res.headers["cf-token"];
        props.setReduxUserDataAndCfToken({
          userId,
          email,
          userType,
          cfToken,
        });
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
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(
  (state) => state.user,
  (dispatch) => {
    return {
      setReduxUserDataAndCfToken: ({ userId, email, role, cfToken }) => {
        return dispatch({
          type: "ADD_USERID_EMAIL_ROLE_CSRFTOKEN",
          payload: {
            userId,
            email,
            role,
            cfToken,
          },
        });
      },
    };
  }
)(App);
