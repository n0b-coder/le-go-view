import Vue from 'vue';
import Bulma from 'bulma';
import VueSplide from '@splidejs/vue-splide';
import vb from 'vue-babylonjs';

import App from './App.vue';
import router from './router';
import store from './store';

import './assets/scss/main.scss';

Vue.use(VueSplide);
Vue.use(Bulma);
Vue.use(vb);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
