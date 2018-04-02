import * as React from "react";
import {
  WithStyles,
  TextField,
  Button,
  withStyles,
  Paper,
  StyleRulesCallback
} from "material-ui";
import { styles } from "./Register.style";
import { Redirect } from "react-router-dom";

interface Props {
  handleLogin: (userName, password) => void;
  redirectToRegister: () => void;
  authenticated: boolean;
  referrerLocation: string;
}

class Register extends React.Component<
  Props &
    WithStyles<"container" | "textField" | "loginForm" | "buttonContainer">
> {
  redirectIfAuthenticated() {
    if (this.props.authenticated) {
      return <Redirect to={this.props.referrerLocation} />;
    }
  }
  handleClick() {}

  render() {
    const { theme, classes } = this.props;

    return (
      <div>
        {this.redirectIfAuthenticated()}
        <form className={classes.loginForm} noValidate autoComplete="off">
          <Paper className={classes.container}>
            <TextField
              label="Email"
              placeholder="Email"
              className={classes.textField}
              margin="normal"
            />
            <br />
            <TextField
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            <br />
            <TextField
              label="First Name"
              placeholder="First Name"
              className={classes.textField}
              margin="normal"
            />
            <br />
            <TextField
              label="Last Name"
              placeholder="Last Name"
              className={classes.textField}
              margin="normal"
            />
            <br />
            <TextField
              label="Phone Number"
              placeholder="Phone Number"
              className={classes.textField}
              margin="normal"
            />
            <br />
            <div className={classes.buttonContainer}>
              <Button
                variant="raised"
                color="secondary"
                onClick={event => this.handleClick()}
              >
                Signup
              </Button>
            </div>
          </Paper>
        </form>
      </div>
    );
  }
}

const decorate = withStyles(styles as StyleRulesCallback, { withTheme: true });

export default decorate<Props>(Register);
