<template>
  <main-header></main-header>
  <router-view></router-view>

  <van-popup v-model:show="show" position="left" style="height: 100%; width: 80%;">
    <vis-setting></vis-setting>
  </van-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MainHeader from './components/main-header.vue';
import Setting from '@/views/setting/index.vue';

export default defineComponent({
  name: 'layout',
  components: { [MainHeader.name]: MainHeader, 'vis-setting': Setting },
  data() {
    return {
      show: false
    };
  }
});
</script>

<style lang="scss" scope></style>
