import { Component, Input, OnInit, Injector } from '@angular/core';
import { SampleComponentBaseDirective } from '../../component-base';

@Component({
  selector: 'l-no-data',
  template: `
    <span class="no-result-data">
      <i *ngIf="icon" [class]="icon"></i>
      <span>{{ text }}</span>
    </span>
  `,
  styleUrls: ['./no-data.component.less'],
  preserveWhitespaces: false,
})
export class NoDataComponent extends SampleComponentBaseDirective implements OnInit {
  // region fields
  /**
   * 显示文本
   */
  @Input()
  text: string;

  /**
   * 图标
   */
  @Input()
  icon = 'iconfont icon-frown-o';

  // endregion
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    if (!this.text) {
      this.text = this.l('NoData');
    }
  }
}
