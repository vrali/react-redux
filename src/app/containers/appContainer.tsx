import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { RootState } from "../rootReducer";
import Navigation from "../components/Navigation";
import { AppBar, Toolbar, IconButton, createMuiTheme } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";

import { PaletteOptions } from "material-ui/styles/createPalette";
import Roster from "../../roster/components/Roster";
import { Routes } from "./routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#3a4a61",
      dark: "#000012",
      main: "#102337",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ff8c7d",
      dark: "#b72427",
      main: "#f05a50",
      contrastText: "#ffffff"
    }
  } as PaletteOptions
});

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    user: any;
  }

  export interface State {}
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Navigation user={this.props.user}>
          <Routes {...this.props} />
        </Navigation>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
