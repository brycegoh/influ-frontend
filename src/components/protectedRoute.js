import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const authenticated = false;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/protected"} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
