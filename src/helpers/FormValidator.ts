import * as validator from "validator";

export class FormClientValidator {
  constructor(private validations: ValidationRule[] = []) {}
  private _result: ValidationResult;

  get validationState(): ValidationResult {
    if (!this._result) {
      const validation = {};

      this.validations.map(
        rule =>
          (validation[rule.field] = {
            isInvalid: false,
            message: "",
            isDirty: false
          })
      );
      this._result = { isValid: false, ...validation } as any;
    }
    return this._result;
  }

  validate(state, fieldName): ValidationResult {
    let validation = this.validationState;
    let isValid = true;
    let atleastOneRuleInvalid = false;
    let fieldValidationRules = this.validations.filter(
      rule => rule.field === fieldName
    );
    fieldValidationRules.forEach((rule: ValidationRule) => {
      const field_value = (state[rule.field] || "").toString();
      const args = rule.args || [];
      const validation_method =
        typeof rule.method === "string" ? validator[rule.method] : rule.method;
      let messages = atleastOneRuleInvalid
        ? validation[rule.field].messages
        : [];
      if (validation_method(field_value, ...args, state) != rule.validWhen) {
        atleastOneRuleInvalid = true;
        messages.push(rule.message);
      }
      validation[rule.field] = {
        isDirty: true,
        isInvalid: atleastOneRuleInvalid,
        messages: messages
      };
    });
    for (var prop in validation) {
      if (validation.hasOwnProperty(prop) && prop != "isValid") {
        if (
          validation[prop].isInvalid &&
          validation[prop].isDirty &&
          !!this.validations
            .filter(rule => rule.field === prop)
            .find(
              rule =>
                validation[prop].messages &&
                validation[prop].messages.includes(rule.message) &&
                !!rule.strict
            )
        ) {
          isValid = false;
          break;
        }
      }
    }
    validation.isValid = isValid;
    return validation;
  }
  addValidationRule = (rule: ValidationRule): FormClientValidator => {
    this.validations.push(rule);
    return this;
  };
  addEmailValidation = (
    emailField?: string,
    required?: boolean
  ): FormClientValidator => {
    let field = emailField || "emailAddress";
    let strict = !!required;
    this.validations.push({
      field,
      method: validator.isEmail,
      message: "Not a valid email",
      validWhen: true,
      strict
    });
    this.validations.push({
      field,
      method: validator.isEmpty,
      message: "Email Required",
      validWhen: false,
      strict
    });
    return this;
  };
  addPasswordRequiredValidation = (passwordField?: string) => {
    let field = passwordField || "password";
    this.validations.push({
      field,
      method: validator.isEmpty,
      message: "Password Required",
      validWhen: false,
      strict: true
    });
    return this;
  };

  addPasswordComplexityValidation = (passwordField?: string) => {
    let field = passwordField || "password";
    this.validations.push({
      field,
      method: validator.matches,
      args: [/.{6,}/],
      message: "Password did not meet requirements",
      validWhen: true,
      strict: false
    });
    return this;
  };
  addPasswordConfirmationValidation = (
    confirmationPassword: string,
    passwordField?: string
  ): FormClientValidator => {
    let field = passwordField || "password";
    this.validations.push({
      field,
      method: validator.equals,
      args: [confirmationPassword],
      message: "Passwords do not Match",
      validWhen: true
    });
    return this;
  };
}
