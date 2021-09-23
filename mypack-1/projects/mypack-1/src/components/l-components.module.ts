import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzDividerModule} from 'ng-zorro-antd/divider';


import {NoDataComponent} from './no-data';


const NG_ZORRO_MODULES = [
  NzSelectModule,
  NzDropDownModule,
  NzSpinModule,
  NzAlertModule,
  NzDividerModule,
];

const ENTRY_COMPONENTS = [
];

const ALL_COMPONENTS = [
  NoDataComponent,

  ...ENTRY_COMPONENTS
];

/** 自定义组件模块 */
@NgModule({
  imports: [
    CommonModule,
    ...NG_ZORRO_MODULES
  ],
  declarations: [
    ...ALL_COMPONENTS
  ],
  exports: [
    ...ALL_COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class LComponentsModule {

}
