import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "components/Sidebar"

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return auth.logged || true ? (
    <Route {...rest} render={(props) => 
    <>
      <Sidebar/>
      <Component {...props} />
      
    </>
    }></Route>
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
