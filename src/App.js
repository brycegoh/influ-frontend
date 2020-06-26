import React, { useEffect, useState } from "react";
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
import { _getSession } from "./services";
import ProtectedRoute from "./components/protectedRoute";

function App(props) {
  const { userId, email, userType } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    _getSession()
      .then((res) => {
        if (res.data) {
          let { userId, email, userType } = res.data;
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
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
