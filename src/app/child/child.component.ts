import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  constructor(private _service: MessengerService) {
    console.log(this._service);
  }

  public get message(): string {
    return this._service.message;
  }

  sendMessage(text: string): void {
    this._service.setMessage(text);
  }
}
