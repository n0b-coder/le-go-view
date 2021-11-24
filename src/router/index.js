import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Visualize from '../views/ObjVisualization.vue';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue'),
  },
  {
    path: '/visualize-object',
    name: 'ObjVisualization',
    component: Visualize,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from, next) => {
  await store.dispatch('config/get');
  next();
});

export default router;
