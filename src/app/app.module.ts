import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImabhinavComponent } from './imabhinav/imabhinav.component';

@NgModule({
  declarations: [
    AppComponent,
    ImabhinavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
