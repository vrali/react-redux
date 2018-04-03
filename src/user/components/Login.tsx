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
import { ValidatedFormInputControl } from "../../common/components/ValidatedFormInputControl";

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
  login = () => {
    this.validateBeforeSubmit().then(() => {
      if (this.state.validations.isValid) {
        this.props.handleLogin(this.state.userName, this.state.password);
      }
    });
  };

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
            <ValidatedFormInputControl
              label="Email"
              textFieldClass={classes.textField}
              validations={this.state.validations}
              fieldName={this.stateKeys.userName}
              onBlur={this.validateOnBlur}
              onChange={this.handleInputChange}
              required={true}
            />

            <br />
            <ValidatedFormInputControl
              label="Password"
              textFieldClass={classes.textField}
              validations={this.state.validations}
              fieldName={this.stateKeys.password}
              onBlur={this.validateOnBlur}
              onChange={this.handleInputChange}
              type="password"
              required={true}
            />
            <div className={classes.buttonContainer}>
              <Button variant="raised" color="secondary" onClick={this.login}>
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
