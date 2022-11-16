import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@features/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('@features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
