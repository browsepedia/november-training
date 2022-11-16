import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing-module';

@NgModule({
  imports: [UsersRoutingModule, MatButtonModule, MatCardModule],
  declarations: [UsersComponent],
})
export class UsersModule {}
