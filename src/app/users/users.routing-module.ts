import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Route[] = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./user-list/user-list.component').then(
            (m) => m.UserListComponent
          ),
        title: 'User List',
      },
      {
        path: ':userId/details',

        data: {
          hellow: 'world',
        },
        title: 'User Details',
        loadComponent: () =>
          import('./user-details/user-details.component').then(
            (m) => m.UserDetailsComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
