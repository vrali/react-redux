import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../rootReducer';
import Navigation from '../components/Navigation';
import { AppBar, Toolbar, IconButton, createMuiTheme } from "material-ui";
import {MuiThemeProvider} from "material-ui/styles";

import  { PaletteOptions } from "material-ui/styles/createPalette";
import Roster from '../../roster/components/Roster';
import Account from "../../account/containers/accountContainer"

const theme = createMuiTheme({
  palette: {
    primary: { 
      light : "#3a4a61",
      dark: "#000012",
      main: "#102337",
      contrastText : "#ffffff"
     },
    secondary: { 
      light : "#ff8c7d",
      dark: "#b72427",
      main: "#f05a50",
      contrastText : "#ffffff"
     },

  } as PaletteOptions
});

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    account : any,
  }

  export interface State {
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {

  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider theme={theme} >      
          <Navigation  auth={this.props.account} > 
            <PrivateRoute path="/roster" auth={this.props.account} component={Roster}></PrivateRoute>
            <Route path="/login" component={Account}></Route>
          </Navigation>    
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: RootState ) {
  return {
    account : state.account,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const PrivateRoute = ({ component: Component, auth:auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
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
