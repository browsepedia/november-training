import { Component } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
})
export class SiblingComponent {
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
