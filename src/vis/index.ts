import { App } from 'vue';
import Card from './card/index';

const version = '0.0.1';

const components = [Card];

const install = (app: App) => {
  components.forEach(x => app.component(x.name, x));
};

export default { version, install, Card };
