import * as React from "react";
import {
  WithStyles,
  TextField,
  Checkbox,
  Select,
  Button,
  withStyles,
  Paper,
  Divider,
  StyleRulesCallback,
  Input,
  InputLabel,
  FormControl,
  FormHelperText
} from "material-ui";
import { FormComponent } from "../../common/components/formComponent";
import { RegisterStyle, styles } from "./Register.style";
import { Redirect } from "react-router-dom";

interface Props {
  handleRegister: (userName, password) => void;
  authenticated: boolean;
}
interface State {
  userName?: string;
  password?: string;
}

class Register extends React.Component<
  Props & WithStyles<RegisterStyle>,
  State
> {
  redirectIfAuthenticated() {
    if (this.props.authenticated) {
      return <Redirect to="/" />;
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
