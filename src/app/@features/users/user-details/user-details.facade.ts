import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models';
import { UserDataService } from '@data-services';

@Injectable()
export class UserDetailsFacade {
  constructor(private _dataService: UserDataService) {}

  fetchUser(userId: number): Observable<User> {
    return this._dataService.fetchUser(userId);
  }
}
