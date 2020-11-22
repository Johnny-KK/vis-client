<template>
  <div class="task-cell">
    <!-- 标题栏 -->
    <div class="task-cell__title">
      <van-checkbox v-model="checked" shape="square">复选框</van-checkbox>
      <div>title</div>
    </div>

    <!-- 内容栏 -->
    <div class="task-cell__content" v-if="simple">task cell content task cell content task cell content task cell content task cell content</div>
  </div>
</template>

<script lang="ts">
/**
 * task-cell 为任务列表组件
 */
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'task-cell',
  props: {
    // 是否简单模式
    simple: { type: Boolean, default: true, required: false }
  },
  data() {
    return {
      checked: false
    };
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
  font-size: 14px;
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
  }

  .task-cell__content {
    font-size: 10px;
    line-height: 16px;
    margin-top: 4px;
    color: grey;
  }
}
</style>
