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
import { Backdrop } from "./components/subcomponents";
import {
  EmailVerification,
  LandingPage,
  Navbar,
  Sidebar,
  Login,
  ForgetPassword,
  ResetPassword,
  Register,
  Blog,
  BlogEditor,
} from "./components";
import { _getSession } from "./services";
import "./App.css";

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
    <div>
      <BrowserRouter>
        <Navbar tabs={tabs} links={links} onBurgerBar={onBurgerBar} />
        <Sidebar
          sideDrawerStatus={sideDrawerStatus}
          onBurgerBar={onBurgerBar}
          tabs={tabs}
          links={links}
        />
        {sideDrawerStatus && <Backdrop onClick={onBurgerBar} />}
        <div className="body-container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/verify-email/" component={EmailVerification} />
            <Route exact path="/forget-password" component={ForgetPassword} />
            <Route exact path="/reset-password/" component={ResetPassword} />
            <Route exact path="/blog" component={Blog} />
            <Route
              exact
              path="/blog/editor/:draftInfo?"
              component={BlogEditor}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
