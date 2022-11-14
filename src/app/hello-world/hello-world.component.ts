import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
})
export class HelloWorldComponent {
  @Input() public title: string = 'default title';

  @Output() public buttonClick = new EventEmitter<string>();

  onButtonClick(message: string): void {
    this.buttonClick.emit(message);
  }
}
