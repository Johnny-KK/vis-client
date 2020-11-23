<template>
  <div class="task-cell">
    <!-- 标题栏 -->
    <div class="task-cell__title">
      <van-checkbox v-model="checked" shape="square"></van-checkbox>
      <div>{{ task.title }}</div>
    </div>

    <!-- 内容栏 -->
    <div class="task-cell__content" v-if="simple">{{ task.content }}</div>
  </div>
</template>

<script lang="ts">
/**
 * task-cell 为任务列表组件
 */
import { defineComponent, ref } from 'vue';

import { ITask } from '@/core/entities/task';

export default defineComponent({
  name: 'task-cell',
  props: {
    // 是否简单模式
    simple: { type: Boolean, default: true, required: false },
    task: { type: Object as () => ITask, required: true }
  },
  setup() {
    const checked = ref(false);
    return { checked };
  }
});
</script>

<style lang="scss" scoped>
.task-cell {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #323233;
  font-size: $fs-n;
  line-height: 24px;
  padding: 10px 16px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: red;
    width: 4px;
  }

  &::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 16px;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    transform: scaleY(0.5);
  }

  .task-cell__title {
    display: flex;
    flex-direction: row;

    & > .van-checkbox {
      margin-right: 10px;
    }
  }

  .task-cell__content {
    font-size: 10px;
    line-height: 16px;
    margin-top: 4px;
    color: grey;
  }
}
</style>
