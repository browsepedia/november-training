import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const RequiredField: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (control.value) {
    return null;
  }

  return {
    requiredField: true,
  };
};

export const MinLengthValidator: (minLength: number) => ValidatorFn =
  (minLength: number): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    if (
      typeof control.value === 'string' &&
      control.value.length >= minLength
    ) {
      return null;
    }

    return {
      minLength: {
        minLength,
        actualLength: control.value.length,
      },
    };
  };
