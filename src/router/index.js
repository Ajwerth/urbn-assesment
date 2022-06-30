import { createRouter, createWebHashHistory } from 'vue-router';
import Cards from '../views/Cards.vue';
import Deck from '../views/Deck.vue';

const routes = [
  {
    path: '/cards',
    name: 'Cards',
    component: Cards,
  },
  {
    path: '/deck',
    name: 'Deck',
    component: Deck,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
