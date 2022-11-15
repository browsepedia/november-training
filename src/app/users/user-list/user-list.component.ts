import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserDataService } from '../user.data-service';
import { User } from 'src/app/users.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  ],
})
export class UserListComponent {
  constructor(private _dataService: UserDataService) {
    this._dataService.fetchUsers().subscribe((users) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  protected users: User[] = [];
  protected filteredUsers: User[] = [];

  protected onSearchChange(value: string): void {
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
  }
}
