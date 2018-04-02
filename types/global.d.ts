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
declare interface ValidationFieldResult {
  [name: string]: FieldValidationResult;
}
declare type ValidationResult = ValidationBaseResult & ValidationFieldResult;
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
