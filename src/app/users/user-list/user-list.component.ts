import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserDataService } from '../user.data-service';
import { User } from 'src/app/users.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, interval, Subscription, tap } from 'rxjs';
import { UserListFacade } from './user-list.facade';
import { AutoUnsubscribe } from 'src/app/auto-unsubscribe';

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
  providers: [UserListFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@AutoUnsubscribe()
export class UserListComponent {
  constructor(private _store: UserListFacade) {
    this._searchValue$ = this.searchCtrl.valueChanges
      .pipe(
        debounceTime(1000),
        tap((value) => _store.setSearchValue(value))
      )
      .subscribe();
  }

  protected searchCtrl = new FormControl('', { nonNullable: true });
  protected filteredUsers$ = this._store.filteredUsers$;

  private _searchValue$: Subscription;
}
