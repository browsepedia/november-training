import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/users.models';
import {
  MatchValidator,
  MinLengthValidator,
  RequiredField,
} from './user-form.validators';

export const createUserForm = (user?: User): FormGroup =>
  new FormGroup({
    name: new FormControl('', { validators: RequiredField }),
    username: new FormControl('', {
      validators: [Validators.required, MinLengthValidator(5)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormGroup(
      {
        password: new FormControl(''),
        confirm: new FormControl(''),
      },
      { validators: MatchValidator }
    ),
    statuses: new FormArray([
      new FormGroup({
        id: new FormControl(0),
        status: new FormControl('Junior'),
      }),
    ]),
  });
