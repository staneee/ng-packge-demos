import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'abp-alain-pack';
  page = '';

  constructor() {
    this.page = abp.utils.formatString('当前 {0} 页/共 {1} 页，共 {2} 条/显示 {3}-{4} 条', [1, 20, 200, 1, 10]);
  }
}
