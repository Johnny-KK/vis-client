// 任务实体
export interface ITask {
  // 主键
  id: number | null;
  // 标题
  title: string;
  // 内容
  content: string;
  // 状态
  status: TaskStatus;
  //
}

// 任务状态
export enum TaskStatus {
  未完成,
  已完成
}
