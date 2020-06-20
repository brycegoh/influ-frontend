import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

const redirectToLogin = () => {
  this.props.history.push("/login");
};

function LandingPage() {
  const history = useHistory();
  const redirectToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <h1>LAIE</h1>
      <button onClick={redirectToLogin}> login </button>
    </div>
  );
}

export default LandingPage;
