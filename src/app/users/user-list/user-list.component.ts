import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserDataService } from '../user.data-service';
import { User } from 'src/app/users.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, Observable, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class UserListComponent {
  constructor(private _dataService: UserDataService) {
    this._dataService.fetchUsers();

    const search$ = this.searchCtrl.valueChanges.pipe(startWith(''));

    this.filteredUsers$ = combineLatest([
      _dataService.fetchUsers(),
      search$,
    ]).pipe(
      map(([users, searchValue]) => this._filterUsers(users, searchValue))
    );
  }

  protected searchCtrl = new FormControl('', { nonNullable: true });
  protected filteredUsers$: Observable<User[]>;

  private _filterUsers(users: User[], searchValue: string): User[] {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
