import { Component, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from './field-type.models';
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';
import { DateFieldComponent } from './fields/date-field/date-field.component';
import { TextFieldComponent } from './fields/text-field/text-field.component';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  protected fieldType: FieldType = 'text';

  constructor() {
    this.formCtrl.valueChanges.subscribe((value) =>
      console.log(value, 'FROM APPCOMPONENT')
    );
  }
  protected formCtrl = new FormControl(3.5);
}
