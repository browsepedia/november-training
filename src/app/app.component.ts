import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MatTabGroup } from '@angular/material/tabs';
import { ChildDirective } from './child.directive';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent implements AfterViewInit {
  constructor() {}

  @ViewChild(ChildDirective) private _viewChild: ChildDirective | undefined;

  ngAfterViewInit(): void {
    if (this._viewChild) {
      console.log(this._viewChild);
    }
  }

  public title = 'november-training';
  public showChild = true;
}
