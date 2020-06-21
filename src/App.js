import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./components/login";
import Backdrop from "./components/subcomponents/backdrop/backdrop";
import { _getTokens } from "./services";
import ProtectedRoute from "./components/protectedRoute";

function App(props) {
  useEffect(() => {
    _getTokens()
      .then((res) => {
        // let { userId, email, userType } = res.body;
        // let cfToken = res.header["cf-token"];
        // console.log(cfToken);
        console.log(res);
        // props.setReduxUserDataAndCfToken({
        //   userId,
        //   email,
        //   role: userType,
        //   cfToken,
        // });
      })
      .catch((err) => console.log(err));
  });

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
    <div style={{ height: "100%" }}>
      <BrowserRouter>
        <Navbar tabs={tabs} links={links} onBurgerBar={onBurgerBar} />
        <Sidebar
          sideDrawerStatus={sideDrawerStatus}
          onBurgerBar={onBurgerBar}
          tabs={tabs}
          links={links}
        />
        {sideDrawerStatus && <Backdrop onClick={onBurgerBar} />}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
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
          type: "",
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
