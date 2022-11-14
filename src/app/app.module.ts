import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterOddNumbersPipe } from './filter-odd-numbers.pipe';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HoverBackgroundDirective } from './hover-background.directive';
import { PerforatePipe } from './perforate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HoverBackgroundDirective,
    FilterOddNumbersPipe,
    PerforatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
