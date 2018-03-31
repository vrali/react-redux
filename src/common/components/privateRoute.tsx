import { Redirect, Route, Switch } from "react-router-dom";
import * as React from "react";
import Roster from "../../roster/components/Roster";
import { UserContainer } from "../../user/containers/userContainer";

export const PrivateRoute = ({ component: Component, user: user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
