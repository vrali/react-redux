import * as React from "react";
import {
  WithStyles,
  Input,
  Checkbox,
  Select,
  Button,
  withStyles,
  Paper,
  Divider,
  StyleRulesCallback,
  InputLabel,
  FormControl,
  FormHelperText
} from "material-ui";
import { FormComponent } from "../../common/components/formComponent";
import { RegisterStyle, styles } from "./Register.style";
import { Redirect } from "react-router-dom";
import { ValidatedFormInputControl } from "../../common/components/ValidatedFormInputControl";

interface Props {
  handleRegister: (userName, password) => void;
  authenticated: boolean;
}
interface State {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirmmation?: string;
  phoneNumber?: string;
}

class Register extends FormComponent<Props & WithStyles<RegisterStyle>, State> {
  constructor(props) {
    super(props);
    this.stateKeys = {
      email: "email",
      password: "password",
      passwordConfirmmation: "passwordConfirmmation",
      firstName: "firstName",
      lastName: "lastName",
      phoneNumber: "phoneNumber"
    };
    this.validator
      .addEmailValidation(this.stateKeys.email, true)
      .addPasswordComplexityValidation(this.stateKeys.password)
      .addMobilePhoneValidation(this.stateKeys.phoneNumber);
    this.state = { validations: this.validator.validationState };
  }
  validateSamePasswords = event => {
    this.validator.addFieldValidationToResult(event.target.name, {
      isInvalid: this.state.password !== this.state.passwordConfirmmation,
      messages: ["Password do not match"]
    });
    this.updateValidationsInState();
  };

  redirectIfAuthenticated() {
    if (this.props.authenticated) {
      return <Redirect to="/" />;
    }
  }
  signUp = () => {
    this.validateBeforeSubmit();
  };

  render() {
    const { theme, classes } = this.props;
    let { email, password } = this.state;

    return (
      <div>
        {this.redirectIfAuthenticated()}
        <form className={classes.loginForm} noValidate autoComplete="off">
          <Paper className={classes.container}>
            <ValidatedFormInputControl
              label="Email"
              textFieldClass={classes.textField}
              validations={this.state.validations}
              fieldName={this.stateKeys.email}
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
              type="password"
              onBlur={this.validateOnBlur}
              onChange={this.handleInputChange}
              required={true}
            />
            <br />

            <ValidatedFormInputControl
              label="Password Confirmation"
              textFieldClass={classes.textField}
              validations={this.state.validations}
              fieldName={this.stateKeys.passwordConfirmmation}
              type="password"
              onBlur={this.validateSamePasswords}
              onChange={this.handleInputChange}
              required={true}
            />
            <br />
            <ValidatedFormInputControl
              label="First Name"
              textFieldClass={classes.textField}
              validations={this.state.validations}
              fieldName={this.stateKeys.firstName}
              onBlur={this.validateOnBlur}
              onChange={this.handleInputChange}
              required={true}
            />
            <br />
            <ValidatedFormInputControl
              label="Last Name"
              textFieldClass={classes.textField}
              validations={this.state.validations}
              fieldName={this.stateKeys.lastName}
              onBlur={this.validateOnBlur}
              onChange={this.handleInputChange}
              required={true}
            />
            <br />
            <ValidatedFormInputControl
              label="Phone"
              textFieldClass={classes.textField}
              validations={this.state.validations}
              fieldName={this.stateKeys.phoneNumber}
              onBlur={this.validateOnBlur}
              onChange={this.handleInputChange}
            />
            <br />
            <div className={classes.buttonContainer}>
              <Button variant="raised" color="secondary" onClick={this.signUp}>
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
