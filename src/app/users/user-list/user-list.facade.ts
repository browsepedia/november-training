import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, tap } from 'rxjs';
import { User } from 'src/app/users.models';
import { UserDataService } from '../user.data-service';

@Injectable()
export class UserListFacade {
  constructor(private _dataService: UserDataService) {
    this._fetchUsers();

    this.filteredUsers$ = combineLatest([this._users$, this._search$]).pipe(
      map(([users, searchValue]) => this._filterUsers(users, searchValue))
    );
  }

  public filteredUsers$: Observable<User[]>;

  public setSearchValue(searchValue: string): void {
    this._search$.next(searchValue);
  }

  private _users$ = new BehaviorSubject<User[]>([]);
  private _search$ = new BehaviorSubject<string>('');

  private _filterUsers(users: User[], searchValue: string): User[] {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  private _fetchUsers(): void {
    this._dataService
      .fetchUsers()
      .pipe(tap((users) => this._users$.next(users)))
      .subscribe();
  }
}
