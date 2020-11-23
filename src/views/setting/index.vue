<template>
  <van-cell-group>
    <van-cell title="功能模块" is-link></van-cell>
    <van-cell title="主题" is-link @click="theme">
      <template #default>
        <div class="color-block" :style="{ 'background-color': 'red' }"></div>
      </template>
    </van-cell>
    <van-cell title="字体大小" value="标准" is-link></van-cell>
    <van-cell title="关于" value="v0.0.1" is-link></van-cell>
    <van-cell title="检查更新" is-link></van-cell>
    <van-cell title="更新日志" is-link></van-cell>
    <van-cell title="退出登录" is-link @click="show = true"></van-cell>
  </van-cell-group>

  <van-action-sheet v-model:show="show" title="你确定要退出登录吗" cancel-text="否" :actions="actions" @select="onSelect" teleport="body" :closeable="false" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'setting',
  data() {
    return {
      show: false,
      actions: [{ name: '是', color: 'red' }]
    };
  },
  methods: {
    theme() {
      this.$router.push({ name: 'setting-theme' });
    },
    onSelect() {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.color-block {
  display: inline-block;
  height: 12px;
  width: 12px;
  line-height: 24px;
}
</style>
