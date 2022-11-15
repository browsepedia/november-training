import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users.models';
import { UserDataService } from '../user.data-service';

@Injectable()
export class UserDetailsFacade {
  constructor(private _dataService: UserDataService) {}

  fetchUser(userId: number): Observable<User> {
    return this._dataService.fetchUser(userId);
  }
}
