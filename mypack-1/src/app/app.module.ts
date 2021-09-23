import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPack1Module } from '@esamples/mypack-1';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
    MyPack1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
