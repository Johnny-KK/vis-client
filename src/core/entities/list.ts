// 任务清单实体
export interface IList {
  // 主键
  id: number | null;
  // 清单名称
  name: string;
  // 清单颜色
  color: string | null;
  // 排序
  order: number;
  // 所属文件夹
  folderId: number | null;
}

// 任务清单可选颜色列表
export const listColorList: string[][] = [
  ['#86180F', '#CF4B41', '#DC6E6A', '#E28684', '#B29B90'],
  ['#A96324', '#DA954B', '#E8B35D', '#F2CDA2', '#C5B59F'],
  ['#B89230', '#E9C451', '#F9DA78', '#FBE6A2', '#BEB8A0'],
  ['#73762E', '#A5BA4A', '#DEE36E', '#D2D7AD', '#BEC2B1'],
  ['#48742B', '#7FBC69', '#9DC284', '#BCD6AC', '#B9C4B2'],
  ['#4B9167', '#61B484', '#7CCEAA', '#8FE6C0', '#B0C3BC'],
  ['#254D5A', '#53A3BE', '#6DB6CF', '#98EAEA', '#AEBCC3'],
  ['#214291', '#4874DD', '#6690F1', '#92BEEB', '#A6AEC5'],
  ['#431E70', '#8D47E3', '#9450E7', '#C16BEF', '#AAA6B4'],
  ['#692260', '#AF4580', '#C35A92', '#DD77A3', '#A5949D']
];
