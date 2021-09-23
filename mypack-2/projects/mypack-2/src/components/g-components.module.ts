import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { MyPack1Module } from '@esamples/mypack-1';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { EllipsisModule } from '@delon/abc/ellipsis';


import { GBlankShowComponent } from './g-blank-show/g-blank-show.component';


const NG_ZORRO_MODULES = [
  NzInputModule,
  NzButtonModule,
  NzSelectModule,
  NzTableModule,
  NzToolTipModule,
  NzCheckboxModule,
  NzEmptyModule,
  NzCollapseModule,
  NzPaginationModule
];

const NG_ALAIN_MODULES = [
  EllipsisModule,
];


const ENTRY_COMPONENTS = [
];

const ALL_COMPONENTS = [
  GBlankShowComponent,
  ...ENTRY_COMPONENTS
];

/** 自定义组件模块 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,

    MyPack1Module,

    ...NG_ZORRO_MODULES,
    ...NG_ALAIN_MODULES
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
export class GComponentsModule {

}
