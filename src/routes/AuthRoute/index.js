import React from "react";
import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return auth.logged ? (
    <Redirect to="/prontuarios" />
  ) : (
    <Route {...rest} render={(props) => <Component {...props} />}></Route>
  );
};

export default AuthRoute;
