import * as validator from "validator";

export class FormClientValidator {
  constructor(private validations: ValidationRule[] = []) {}
  private _result: ValidationResult;

  get validationState(): ValidationResult {
    //if state not already present then send an initial state with
    //invalid formlevel state and valid field level state
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
      this._result = { isValid: true, ...validation } as any;
    }
    return this._result;
  }
  _validate = () => {
    let isValid = true;
    let validation = this.validationState;
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
  };

  _validateField(state, fieldName) {
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
        ? this.validationState[rule.field].messages
        : [];
      if (validation_method(field_value, ...args, state) != rule.validWhen) {
        atleastOneRuleInvalid = true;
        messages.push(rule.message);
      }
      this.validationState[rule.field] = {
        isDirty: true,
        isInvalid: atleastOneRuleInvalid,
        messages: messages
      };
    });
  }

  validate = (
    state?: any,
    fieldNames?: string | string[]
  ): ValidationResult => {
    if (state && fieldNames) {
      if (Array.isArray(fieldNames)) {
        fieldNames.forEach(fieldName => {
          this._validateField(state, fieldName);
        });
      } else {
        this._validateField(state, fieldNames);
      }
    }
    this._validate();
    return this.validationState;
  };
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
  addPasswordRequiredValidation = (
    passwordField?: string
  ): FormClientValidator => {
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

  addPasswordComplexityValidation = (
    passwordField?: string
  ): FormClientValidator => {
    let field = passwordField || "password";
    this.validations.push({
      field,
      method: validator.matches,
      args: [/.{6,}/],
      message: "Password did not meet requirements",
      validWhen: true,
      strict: true
    });
    return this;
  };

  addMobilePhoneValidation = (phoneNumber?: string): FormClientValidator => {
    let field = phoneNumber || "phoneNumber";
    this.validations.push({
      field,
      method: validator.isMobilePhone,
      args: ["en-US"],
      message: "Enter Valid Phone Number",
      validWhen: true
    });
    return this;
  };
  addFieldValidationToResult = (
    field: string,
    fieldResult: FieldValidationResult
  ): void => {
    if (this._result.hasOwnProperty(field)) {
      fieldResult.messages = Object.assign(
        [],
        fieldResult.messages,
        this._result[field].messages
      );
      Object.assign(this._result[field], fieldResult);
    } else {
      this._result[field] = Object.assign(
        {
          isDirty: true,
          isInvalid: false,
          messages: []
        },
        fieldResult
      );
    }
    this.validate(this.validationState);
  };
}
