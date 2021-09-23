import { NgModule, Type } from '@angular/core';
import { AbpModule } from 'abp-ng2-module';
import { LComponentsModule } from '../components';

const ALL_MODULES: Type<any>[] = [
  AbpModule,
  LComponentsModule,
];

@NgModule({
  imports: [
    ...ALL_MODULES,
  ],
  declarations: [

  ],
  entryComponents: [

  ],
  exports: [
    ...ALL_MODULES,
  ],
  providers: [

  ],
})
export class MyPack1Module { }
