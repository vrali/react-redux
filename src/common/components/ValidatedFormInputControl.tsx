import { Redirect, Route, Switch } from "react-router-dom";
import * as React from "react";
import { UserContainer } from "../../user/containers/userContainer";
import { FormControl, InputLabel, Input, FormHelperText } from "material-ui";
import { InputProps } from "material-ui/Input";

interface Props extends InputProps {
  textFieldClass: string;
  fieldName: string;
  validations: ValidationResult;
}
type ValidatedFormInputProps = Props & NamedProps<any>;

export const ValidatedFormInputControl = (props: ValidatedFormInputProps) => {
  let { label, textFieldClass, fieldName, validations, ...rest } = props;
  var inInvalid = (validations[fieldName] || { isInvalid: false }).isInvalid;
  return (
    <FormControl required={rest.required} error={inInvalid}>
      <InputLabel htmlFor={fieldName}>{label}</InputLabel>
      <Input
        id={fieldName}
        className={textFieldClass}
        name={fieldName}
        {...rest}
      />
      {inInvalid &&
        validations[fieldName].messages.map((message, index) => (
          <FormHelperText key={index} error>
            {message}
          </FormHelperText>
        ))}
    </FormControl>
  );
};
