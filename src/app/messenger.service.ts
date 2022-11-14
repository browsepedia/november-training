import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  public message = '';

  setMessage(message: string): void {
    this.message = message;
  }
}
