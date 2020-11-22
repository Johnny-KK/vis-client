<template>
  <div class="main-lay">
    <img :src="logo" class="logo" />
    <div class="title">VIS助手</div>
    <div v-if="status === 'default'">
      <span @click="changeStatus('login')">登录</span>
      <span @click="changeStatus('register')">注册</span>
      <span>设置</span>
    </div>

    <login-form v-else-if="status === 'login'" @close="changeStatus('default')"></login-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LoginForm from './components/login-form.vue';

export default defineComponent({
  name: 'login',
  components: { [LoginForm.name]: LoginForm },
  data() {
    return {
      logo: require('@/assets/logo.png'),
      status: 'default'
    };
  },
  methods: {
    // 改变页面当前显示状态
    changeStatus(status: string) {
      this.status = status;
    }
  }
});
</script>

<style lang="scss" scoped>
.main-lay {
  text-align: center;
}

.logo {
  width: 100px;
  height: auto;
}
</style>
