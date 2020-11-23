<template>
  <svg class="vis-icon" aria-hidden="true" @click="$emit('click')">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vis-icon',
  props: {
    name: { type: String, default: 'sync' }
  }
});
</script>

<style lang="scss" scoped>
.vis-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
