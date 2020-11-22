<template>
  <van-collapse v-model="activeName">
    <van-collapse-item title="标题1" name="1" value="25">
      <van-cell title="单元格" value="内容" label="label" clickable />
      <van-cell title="单元格" value="内容" clickable />
      <van-cell title="单元格" value="内容" clickable />
      <van-cell title="单元格" value="内容" clickable />
      <van-cell title="单元格" value="内容" clickable />
      <van-cell title="单元格" value="内容" clickable />
      <van-cell title="单元格" value="内容" clickable />
      <van-cell title="单元格" value="内容" clickable>
        <template #icon>
          <van-checkbox name="item" />
        </template>
      </van-cell>
    </van-collapse-item>

    <van-collapse-item title="标题2" name="2">
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
      <task-cell></task-cell>
    </van-collapse-item>

    <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
  </van-collapse>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TaskCell from '@/components/task-cell/index.vue';

export default defineComponent({
  name: 'task-list',
  components: { [TaskCell.name]: TaskCell },
  data() {
    return {
      activeName: ['1', '2']
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
</style>
