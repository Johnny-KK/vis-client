<template>
  <van-form @submit="onSubmit">
    <div class="form-header">
      <span>取消</span>
      <span class="title">添加清单</span>
      <span>确定</span>
    </div>

    <van-field v-model="form.name" name="名称" placeholder="名称" />
    <van-field v-model="form.color" name="颜色" label="颜色" placeholder="颜色" />
    <van-field v-model="form.folderId" name="文件夹" label="文件夹" placeholder="文件夹" />
  </van-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'list-form',
  data() {
    return {
      form: {
        name: '',
        color: '',
        folderId: null
      }
    };
  },
  methods: {
    onSubmit() {
      //
    }
  }
});
</script>

<style lang="scss" scoped>
.form-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 16px;
  @include color(main-bg-color);

  & > .title {
    color: grey;
    font-size: 1.2rem;
  }
}
</style>
