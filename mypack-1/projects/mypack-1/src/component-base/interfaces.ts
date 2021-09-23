/**
 * 分页请求必须参数
 */
export class PagedResultDto {
  items: any[];
  totalCount: number;
}

/**
 * 实体主键dto
 */
export interface IEntityDto {
  id: number;
}

/**
 * 分页结果dto
 */
export class PagedRequestDto {
  skipCount: number;
  maxResultCount: number;
  sorting: string;
}
