import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

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

type ValidatorFnClosure = (minLength: number) => ValidatorFn;

export const MinLengthValidator: ValidatorFnClosure =
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

export const MatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const form = control as FormGroup;
  const passwordCtrl = form.controls['password'];
  const confirmCtrl = form.controls['confirm'];

  if (!passwordCtrl || !confirmCtrl) {
    return null;
  }

  if (passwordCtrl.value === confirmCtrl.value) {
    return null;
  }

  return {
    match: true,
  };
};
