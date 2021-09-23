import { Injector, Input, Directive } from '@angular/core';
import { ALAIN_I18N_TOKEN, AlainI18NService } from '@delon/theme';

@Directive()
export abstract class SampleComponentBaseDirective {

  /** 加载状态 */
  @Input() loading: boolean;

  constructor(
    public injector: Injector,
  ) {

  }

  /**
   * 本地化
   * @param key 本地化key
   * @param args 本地化参数
   * @returns 本地化结果
   */
  l(key: string, ...args: any[]): string {
    return abp.localization.localize(key, abp.localization.defaultSourceName);
  }

  /**
   * 权限列表验证
   * @param permissions 权限名称列表
   * @returns 是否拥有此权限
   */
  isGranted(permissions: string | string[]): boolean {
    if (!permissions) {
      return true;
    }

    return abp.auth.isGranted(permissions[0]);
  }

  /**
   * 权限列表验证
   * @param permissions 权限名称列表
   * @returns 是否拥有此权限
   */
  isGrantedAny(...permissions: string[]): boolean {
    if (!permissions) {
      return false;
    }
    for (const permission of permissions) {
      if (this.isGranted(permission)) {
        return true;
      }
    }
    return false;
  }
}
