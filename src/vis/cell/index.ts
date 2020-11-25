import { App } from 'vue';
import Cell from './cell.vue';

Cell.install = (app: App): void => {
  app.component(Cell.name, Cell);
};

export default Cell;
