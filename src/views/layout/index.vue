<template>
  <main-header></main-header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MainHeader from './components/main-header.vue';

export default defineComponent({
  name: 'layout',
  components: { [MainHeader.name]: MainHeader }
});
</script>
