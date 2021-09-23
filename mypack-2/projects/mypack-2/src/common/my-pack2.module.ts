import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

const ALL_MODULES: Type<any>[] = [
  CommonModule
];

@NgModule({
  imports: [
    ...ALL_MODULES
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  exports: [
    ...ALL_MODULES
  ],
  providers: [

  ],
})
export class MyPack2Module { }

