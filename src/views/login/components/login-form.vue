<template>
  <van-form @submit="onSubmit">
    <van-field v-model="form.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
    <van-field v-model="form.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
    <div class="btn-list" style="margin: 16px;">
      <van-button block type="primary" native-type="submit">提交</van-button>
      <van-button block type="default">忘记密码</van-button>
      <van-button block type="default" @click="back">返回</van-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'login-form',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit(values: object) {
      //
      console.log('submit', values);
      this.$router.push('/layout');
    },
    back() {
      this.$emit('close');
    }
  }
});
</script>

<style lang="scss" scoped>
.btn-list {
  margin: 16px;

  & > .van-button {
    margin-top: 10px;
  }

  & > .van-button:first-child {
    margin-top: 0;
  }
}
</style>
