import Vue from 'vue';
import Vuex from 'vuex';

import image1 from '@/assets/models/imgs/lego_camion_v1.1.jpg';
import image2 from '@/assets/models/imgs/lego_carr_front.jpg';

import carouselImage1 from '@/assets/imgs/banner/ban1.jpeg';
import carouselImage2 from '@/assets/imgs/banner/ban2.webp';
import carouselImage3 from '@/assets/imgs/banner/ban3.jpg';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: {
      carouselImages: [
        carouselImage3,
        carouselImage2,
        carouselImage1,
      ],
      models: [
        {
          image: image1,
          model: 'truck.glb',
        },
        {
          image: image2,
          model: 'nave.glb',
        },
        {
          image: 'https://bulma.io/images/placeholders/800x480.png',
          model: 'model3',
        },
      ],
      galleryImages: [
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
      ],
    },
    currentModel: {
      image: '',
      model: '',
    },
  },
  mutations: {
    setCurrentModel(state, payload) {
      state.currentModel = payload;
    },
  },
  actions: {
    updateCurrentModel({ commit }, payload) {
      console.log(payload);
      commit('setCurrentModel', payload);
      window.localStorage.setItem('modelData', JSON.stringify({ model: payload.model, image: payload.image }));
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },
  },
});
