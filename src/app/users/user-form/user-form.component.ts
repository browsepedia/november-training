import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createUserForm } from './user-form.form';
import { MatSelectModule } from '@angular/material/select';
import {
  MatchValidator,
  MinLengthValidator,
  RequiredField,
} from './user-form.validators';
import { tap } from 'rxjs';
import { User } from 'src/app/users.models';

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
    MatSelectModule,
  ],
})
export class UserFormComponent {
  constructor() {
    this.form.controls['statuses'].valueChanges
      .pipe(
        tap(() =>
          this.form.controls['password'].setValue({
            password: '',
            confirm: '',
          })
        )
      )
      .subscribe();
  }

  @Input() public set user(user: User) {
    this.form.patchValue(user);
  }

  protected form = createUserForm();

  protected onSubmit(): void {
    console.log(this.form);
  }

  protected get statusesCtrl(): FormGroup[] {
    return (this.form.controls['statuses'] as FormArray)
      .controls as FormGroup[];
  }

  protected onAddStatus(): void {
    const statusesCtrl = this.form.controls['statuses'] as FormArray;
    statusesCtrl.push(
      new FormGroup({
        id: new FormControl(1),
        status: new FormControl('Mid', { nonNullable: true }),
      })
    );
  }
}
