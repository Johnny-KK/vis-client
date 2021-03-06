import { App } from 'vue';
import Card from './card.vue';

Card.install = (app: App) => {
  app.component(Card.name, Card);
};

export default Card;
