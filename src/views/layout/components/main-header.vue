<template>
  <div class="main-header">
    <span>vis助手</span>
    <span class="sperate"></span>

    <van-button @click="changeTheme('theme-blue')">blue</van-button>
    <van-button @click="changeTheme('theme-pink')">pink</van-button>

    <vis-icon name="line"></vis-icon>
    <vis-icon name="border"></vis-icon>
    <vis-icon name="close"></vis-icon>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef } from 'vue';

import { useStore } from 'vuex';

export default defineComponent({
  name: 'main-header',
  setup() {
    const store = useStore();

    const appTheme: ComputedRef<string> = computed(() => store.getters.appTheme);

    console.info(appTheme.value);

    function changeTheme(theme: string) {
      window.document.documentElement.setAttribute('data-theme', theme);
    }

    return { appTheme, changeTheme };
  }
});
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  flex-direction: row;
  @include background-color(main-bg-color);
  height: 34px;
  align-items: center;
  padding: 0 16px;

  & > .sperate {
    flex: 1;
  }
}
</style>
