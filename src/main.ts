import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// vant
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App)
  .use(store)
  .use(Vant)
  .use(router)
  .mount("#app");
  