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
      },
      {
        path: ':userId/details',
        loadComponent: () =>
          import('./user-details/user-details.component').then(
            (m) => m.UserDetailsComponent
          ),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./user-form/user-form.component').then(
            (m) => m.UserFormComponent
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
