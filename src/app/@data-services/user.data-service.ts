import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private _http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  fetchUser(userId: number): Observable<User> {
    return this._http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
