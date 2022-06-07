/*
This File Holds All the Form Validators
*/

export const required = (value) => (value ? undefined : "Required");
export const mustBeNumber = (value) =>
  isNaN(value) ? "Must be a number" : undefined;
export const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
export const minLength = (min) => (value) =>
  value.length >= min ? undefined : `Minimum ${min} Character`;
export const maxLength = (max) => (value) =>
  value.length <= max ? undefined : `Maximum ${max} Character`;
export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
