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
import { styles, LoginStyle } from "./Login.style";
import { Redirect } from "react-router";
import { FormComponent } from "../../common/components/formComponent";

interface Props {
  handleLogin: (userName, password) => void;
  redirectToRegister: () => void;
  authenticated: boolean;
  referrerLocation: string;
}
interface State {
  userName?: string;
  password?: string;
}
class Login extends FormComponent<Props & WithStyles<LoginStyle>, State> {
  constructor(props) {
    super(props);
    this.stateKeys = { userName: "userName", password: "password" };
    this.validator
      .addEmailValidation(this.stateKeys.userName, true)
      .addPasswordRequiredValidation();
    this.state = { validations: this.validator.validationState };
  }

  redirectIfAuthenticated() {
    if (this.props.authenticated) {
      return <Redirect to={this.props.referrerLocation} />;
    }
  }

  render() {
    let { handleLogin, theme, classes } = this.props;
    let { userName, password } = this.state;
    let invalidPassword = this.state.validations[this.stateKeys.password]
      .isInvalid;
    let invalidEmail = this.state.validations[this.stateKeys.userName]
      .isInvalid;

    return (
      <div>
        {this.redirectIfAuthenticated()}
        <form className={classes.loginForm} noValidate autoComplete="off">
          <Paper className={classes.container}>
            <FormControl required={true} error={invalidEmail}>
              <InputLabel htmlFor={this.stateKeys.userName}>Email</InputLabel>
              <Input
                id={this.stateKeys.userName}
                className={classes.textField}
                name={this.stateKeys.userName}
                onBlur={this.handleInputChange}
              />
              {invalidEmail &&
                this.state.validations[this.stateKeys.userName].messages.map(
                  (message, index) => (
                    <FormHelperText key={index} error>
                      {message}
                    </FormHelperText>
                  )
                )}
            </FormControl>
            <br />
            <FormControl required={true}>
              <InputLabel htmlFor={this.stateKeys.password}>
                Password
              </InputLabel>
              <Input
                id={this.stateKeys.password}
                type="password"
                className={classes.textField}
                name={this.stateKeys.password}
                onChange={this.handleInputChange}
                onBlur={this.handleInputChange}
              />
              {invalidPassword &&
                this.state.validations[this.stateKeys.password].messages.map(
                  (message, index) => (
                    <FormHelperText key={index} error>
                      {message}
                    </FormHelperText>
                  )
                )}
            </FormControl>
            <div className={classes.buttonContainer}>
              <Button
                variant="raised"
                color="secondary"
                onClick={event => this.props.handleLogin(userName, password)}
                disabled={!this.state.validations.isValid}
              >
                Login
              </Button>
              <Button
                variant="raised"
                color="secondary"
                onClick={event => this.props.redirectToRegister()}
              >
                Register
              </Button>
            </div>
            {/* <Divider ></Divider> */}
            {/* <div className={classes.buttonContainer}>
             <Button variant="raised" color="secondary"  onClick={(event) => this.handleClick(event)}>
             Login with Gmail
             </Button>
             <Button variant="raised" color="secondary"  onClick={(event) => this.handleClick(event)}>
             Login with Facebook
             </Button>
        </div> */}
          </Paper>
        </form>
      </div>
    );
  }
}

const decorate = withStyles(styles as StyleRulesCallback, { withTheme: true });

export default decorate<Props>(Login);
