<template>
  <main-header></main-header>
  <router-view></router-view>

  <van-popup v-model:show="show" position="left" style="height: 100%; width: 80%;">
    <vis-setting v-if="false"></vis-setting>
    <menu-list></menu-list>
  </van-popup>

  <van-popup v-model:show="showForm" position="bottom" style="height: 90%; width: 100%;" round>
    <list-form></list-form>
  </van-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MainHeader from './components/main-header.vue';
import Setting from '@/views/setting/index.vue';
import MenuList from '@/views/menu-list/index.vue';
import ListForm from '@/views/list-form/index.vue';

export default defineComponent({
  name: 'layout',
  components: { [MainHeader.name]: MainHeader, [MenuList.name]: MenuList, [ListForm.name]: ListForm, 'vis-setting': Setting },
  data() {
    return {
      show: false,
      showForm: false
    };
  }
});
</script>

<style lang="scss" scope></style>
