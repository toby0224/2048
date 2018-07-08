import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppController }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppController ],
  bootstrap:    [ AppController ]
})
export class AppModule { }
