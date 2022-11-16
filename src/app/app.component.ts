import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  protected numbers: number[] = [1, 2, 3, 4, 5];

  addNumber(): void {
    this.numbers = [...this.numbers, this.numbers.length + 1];
  }
}
