import { CommonModule } from '@angular/common';
import { Component, Input, Type } from '@angular/core';
import { FieldType } from '../field-type.models';
import { CheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { TextFieldComponent } from './text-field/text-field.component';

type FieldComponentType =
  | TextFieldComponent
  | DateFieldComponent
  | CheckboxFieldComponent;

@Component({
  selector: 'app-field-host',
  template: `<ng-container *ngComponentOutlet="component"> </ng-container>`,
  standalone: true,
  imports: [CommonModule],
})
export class FieldHostComponent {
  @Input() public set fieldType(fieldType: FieldType) {
    switch (fieldType) {
      case 'checkbox':
        this.component = CheckboxFieldComponent;
        break;
      case 'text':
        this.component = TextFieldComponent;
        break;
      case 'date':
        this.component = DateFieldComponent;
        break;
    }
  }

  public component: Type<FieldComponentType> = TextFieldComponent;
}
