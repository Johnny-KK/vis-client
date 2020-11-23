import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
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
