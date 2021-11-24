import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Visualize from '../views/ObjVisualization.vue';

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

export default router;
