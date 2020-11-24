import { createApp } from 'vue';
import App from './App.vue';

// 加载app配置
// TODO 将配置写入配置文件
window.document.documentElement.setAttribute('data-theme', 'theme-pink');

// router
import router from './router';

// vuex
import store from './store';

// 整体样式
import '@/styles/index.scss';

// icon
import './icons/index';

// vant
import Vant from 'vant';
import 'vant/lib/index.css';

// components
import { componentsPlugin } from '@/components/index';

createApp(App)
  .use(store)
  .use(Vant)
  .use(componentsPlugin)
  .use(router)
  .mount('#app');
