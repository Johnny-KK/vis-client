<template>
  <div class="menu-list">
    <van-cell title="今天" :border="false"></van-cell>
    <van-cell title="本周"></van-cell>
    <van-cell title="日历"></van-cell>
    <van-cell title="收集箱"></van-cell>
    <!--  -->
    <van-collapse v-model="activeFolder">
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-cell title="日历"></van-cell>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    </van-collapse>
    <!--  -->
    <van-cell title="添加清单"></van-cell>
    <van-cell title="垃圾箱"></van-cell>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { IFolder } from '@/core/entities/folder';
import { IList } from '@/core/entities/list';

interface MFolder extends IFolder {
  list: IList[];
}

export default defineComponent({
  name: 'menu-list',
  data(): { activeFolder: string[]; flList: (MFolder | IList)[] } {
    return {
      activeFolder: ['1'],
      flList: []
    };
  },
  created() {
    this.flList = [
      { id: 1, name: '工作', order: 0, list: [] },
      { id: 1, name: '日常', color: '', order: 0, folderId: null }
    ];
  }
});
</script>

<style lang="scss" scoped>
.menu-list {
  background-color: red;
  height: 100%;
}
</style>
