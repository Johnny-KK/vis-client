import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 整体样式
import '@/styles/index.scss';

// vant
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App)
  .use(store)
  .use(Vant)
  .use(router)
  .mount("#app");
  