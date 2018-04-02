import * as React from "react";
import { FormClientValidator } from "../../helpers/FormValidator";

export class FormComponent<P, S> extends React.Component<
  P,
  S & { validations: ValidationResult }
> {
  public validator: FormClientValidator;
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
    this.setState(
      {
        [name]: value
      },
      () => {
        this.setState({
          validations: this.validator.validate(this.state, name)
        });
      }
    );
  };
}
