import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPack1Moudle } from '@esamples/mypack-1';
import { MyPack2Moudle } from '@esamples/mypack-2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyPack1Moudle,
    MyPack2Moudle,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
