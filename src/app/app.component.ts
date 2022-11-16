import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@models';

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
