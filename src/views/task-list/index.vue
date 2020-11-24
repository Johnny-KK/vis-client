<template>
  <div class="task-header">
    <vis-icon class="icon" name="menu"></vis-icon>
    <span class="title">小助手</span>
    <vis-icon class="icon" name="swap"></vis-icon>
    <vis-icon class="icon" name="ellipsis"></vis-icon>
  </div>

  <van-collapse v-model="activeName">
    <van-collapse-item title="标题1" name="1" value="25">
      <van-cell title="单元格" value="内容" label="label" clickable />
      <van-cell title="单元格" value="内容" clickable />
      <van-cell title="单元格" value="内容" clickable>
        <template #icon>
          <van-checkbox name="item" />
        </template>
      </van-cell>
    </van-collapse-item>

    <van-collapse-item title="标题2" name="2">
      <task-cell v-for="task in taskList" :key="task.id" :task="task"></task-cell>
    </van-collapse-item>

    <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
  </van-collapse>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TaskCell from '@/components/task-cell/index.vue';

import { ITask, TaskStatus } from '@/core/entities/task';

const taskList: ITask[] = [
  { id: null, title: '配置eslint', content: '', status: TaskStatus.未完成 },
  {
    id: 12,
    title: '添加vant@3.0',
    content: 'task cell content task cell content task cell content task cell content task cell content',
    status: TaskStatus.已完成
  }
];

export default defineComponent({
  name: 'task-list',
  components: { [TaskCell.name]: TaskCell },
  data() {
    return {
      activeName: ['1', '2'],
      taskList
    };
  }
});
</script>

<style lang="scss" scoped>
/deep/ .van-collapse-item__title {
  background-color: #eceffb;
  color: #b7bbc8;
  font-size: 12px;
  padding: 5px 16px;
}

/deep/ .van-collapse-item__content {
  padding: 0;
}

.task-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  line-height: 33.6px;
  font-size: $fs-ll;

  & > .title {
    flex: 1;
  }

  & > *:not(:first-child) {
    margin-left: 10px;
  }
}
</style>
