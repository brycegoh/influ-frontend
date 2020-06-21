import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./components/login";
import Backdrop from "./components/subcomponents/backdrop/backdrop";
import { _getTokens } from "./services";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  // useEffect(() => {
  //   _getTokens()
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

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
        <ProtectedRoute exact path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
