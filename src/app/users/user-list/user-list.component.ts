import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users.models';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

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
  ],
})
export class UserListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  protected users: User[] = [
    {
      id: 1,
      name: 'Gigel',
    },
    {
      id: 2,
      name: 'Bucur',
    },
  ];
}
