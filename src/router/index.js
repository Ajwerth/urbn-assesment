import { createRouter, createWebHashHistory } from 'vue-router';
import Cards from '../views/Cards.vue';

const routes = [
  {
    path: '/cards',
    name: 'Cards',
    component: Cards,
  },
  {
    path: '/deck',
    name: 'Deck',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Deck.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
