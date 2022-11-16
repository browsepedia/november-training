import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import {
  exhaustMap,
  filter,
  map,
  mergeMap,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { User } from '@models';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserDetailsFacade } from './user-details.facade';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    UserFormComponent,
  ],
  providers: [UserDetailsFacade],
})
export class UserDetailsComponent {
  constructor(_route: ActivatedRoute, _store: UserDetailsFacade) {
    this.user$ = _route.params.pipe(
      filter((params) => params['userId']),
      map((params: Params) => +params['userId']),
      switchMap((userId) => _store.fetchUser(userId))
    );
  }

  protected user$: Observable<User>;
}
