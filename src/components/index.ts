import { App } from 'vue';
import VisIcon from './vis-icon/index.vue';

export const componentsPlugin = {
  install: (app: App) => {
    app.component(VisIcon.name, VisIcon);
  }
};
