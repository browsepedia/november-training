import { Directive } from '@angular/core';

@Directive({
  selector: '[appChild]',
})
export class ChildDirective {
  constructor() {}

  private _test = 'test';
}
