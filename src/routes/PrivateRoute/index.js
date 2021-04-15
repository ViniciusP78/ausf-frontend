import React from "react";
import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const auth = useSelector((state) => state.auth);

  return auth.logged ? (
    <Route render={(props) => <Component {...props} />}></Route>
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
