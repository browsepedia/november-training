import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterModule],
})
export class UserDetailsComponent {
  constructor(private _route: ActivatedRoute) {
    _route.params.subscribe((params: Params) => {
      this.userId = +params['userId'];
    });

    _route.title.subscribe(console.log);

    console.log(_route.snapshot.data);
    console.log(_route.snapshot.queryParams);
    console.log(_route.snapshot.fragment);
    console.log(_route.snapshot.url);
  }

  protected userId = 0;
}
