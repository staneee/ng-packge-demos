import { Injector , Directive, HostBinding } from '@angular/core';
import { SampleComponentBaseDirective } from '@esamples/mypack-1';

@Directive()
export abstract class EditComponentBaseDirective extends SampleComponentBaseDirective {
  // 使用HostBinding装饰器
  @HostBinding('class.sflex') clz = true;

  /** 当前业务实体类型 */
  entityType: string | undefined;

  /**
   * 构造函数
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }

  /** 设置当前业务实体的id */
  setEntityId(id: string) {

  }
}
