import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-g-blank-show',
  templateUrl: './g-blank-show.component.html',
  styleUrls: ['./g-blank-show.component.less']
})
export class GBlankShowComponent implements OnInit {
  // 使用HostBinding装饰器
  @HostBinding('class.sflex') clz = true;

  constructor() { }

  ngOnInit() {
  }

}
