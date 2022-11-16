import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextFieldComponent),
    },
  ],
  imports: [ReactiveFormsModule],
})
export class TextFieldComponent implements ControlValueAccessor {
  constructor() {
    this.formCtrl.valueChanges.subscribe(
      (value) => this._onChange && this._onChange(value)
    );
  }

  protected formCtrl = new FormControl('', { nonNullable: true });
  private _onChange!: (value: string) => void;
  private _onTouched!: () => void;

  writeValue(value: string): void {
    this.formCtrl.setValue(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
