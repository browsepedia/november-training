import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { combineLatest, debounceTime, map } from 'rxjs';
import { MinLengthValidator, RequiredField } from './user-form.validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class UserFormComponent {
  constructor() {
    this.form.valueChanges.subscribe((formValue) => console.log(this.form));
  }

  protected form = new FormGroup({
    name: new FormControl('', { validators: RequiredField }),
    username: new FormControl('', {
      validators: [Validators.required, MinLengthValidator(5)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
  });

  protected onSubmit(): void {
    console.log(this.form);
  }
}
