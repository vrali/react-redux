import * as React from "react";
import { FormClientValidator } from "../../helpers/FormValidator";

export class FormComponent<P, S> extends React.Component<
  P,
  S & { validations: ValidationResult }
> {
  public validator: FormClientValidator;
  stateKeys: S;
  constructor(props, context?) {
    super(props, context);
    this.validator = new FormClientValidator();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      [name]: value
    });
  };
  updateValidationsInState() {
    this.setState({
      validations: { ...this.validator.validationState }
    });
  }
  validateOnBlur = event => {
    let name = event.target.name;
    this.validator.validate(this.state, name);
    this.updateValidationsInState();
  };
  validateBeforeSubmit = () => {
    return new Promise((resolve, reject) => {
      this.setState(
        {
          validations: {
            ...this.validator.validate(this.state, Object.keys(this.stateKeys))
          }
        },
        resolve
      );
    });
  };
  invalid;
}
