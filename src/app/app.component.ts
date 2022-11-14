import { Component, OnChanges, OnInit } from '@angular/core';

interface Employee {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  constructor() {}
  public title = 'november-training';
  public showChild = true;
}
