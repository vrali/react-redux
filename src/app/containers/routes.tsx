import { Redirect, Route, Switch } from "react-router-dom";
import * as React from "react";
import Roster from "../../roster/components/Roster";
import { UserContainer } from "../../user/containers/userContainer";
import { App } from "./appContainer";

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

export const Routes = props => (
  <Switch>
    <PrivateRoute path="/roster" user={props.user} component={Roster} />
    <Route component={UserContainer} />
  </Switch>
);
