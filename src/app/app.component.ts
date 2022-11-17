import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@models';
import { excludeValue } from '@utils';
import { fromEvent, interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  @ViewChild('myButton')
  private set _myButton(ref: ElementRef<HTMLButtonElement>) {
    fromEvent(ref.nativeElement, 'click').subscribe(console.log);
  }
}
