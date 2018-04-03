/** Global definitions for developement **/

// for style loader
declare module "*.scss" {
  const styles: any;
  export = styles;
}
declare interface FieldValidationResult {
  isDirty?: boolean;
  isInvalid: boolean;
  messages?: string[];
}
declare interface NamedProps<T> {
  [name: string]: T;
}
declare type ValidationResult = ValidationBaseResult &
  NamedProps<FieldValidationResult>;
declare interface ValidationBaseResult {
  isValid?: boolean;
}

declare interface ValidationRule {
  field: string;
  method: Function;
  args?: any[];
  validWhen: boolean;
  message: string;
  strict?: boolean;
}
