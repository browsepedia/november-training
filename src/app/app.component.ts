import { Component } from '@angular/core';

interface Employee {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  public title = 'november-training';

  public nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  public employee: Employee = {
    firstName: 'Gigel',
    lastName: 'Bucur',
  };

  onButtonClick(message: string): void {
    alert(message);
  }

  onMouseEnter(event: MouseEvent): void {
    console.log(event);
  }
}
