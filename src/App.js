import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar";
import Login from "./components/login";
import "./App.css";
import { _getTokens } from "./services";

function App() {
  useEffect(() => {
    _getTokens()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
