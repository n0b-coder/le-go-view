import Vue from 'vue';
import Vuex from 'vuex';

import image1 from '@/assets/models/imgs/lego_camion_v1.1.jpg';
import image2 from '@/assets/models/imgs/lego_carr_front.jpg';

import carouselImage1 from '@/assets/imgs/banner/ban1.jpeg';
import carouselImage2 from '@/assets/imgs/banner/ban2.webp';
import carouselImage3 from '@/assets/imgs/banner/ban3.jpg';

// import model1 from '@/assets/models/3D/lego_camion.fbx';

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
          model: 'model1',
        },
        {
          image: image2,
          model: 'model2',
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
      name: '',
      modelUrl: '',
    },
  },
  mutations: {
    setCurrentModel(state, payload) {
      state.currentModel = payload;
    },
  },
  actions: {
    updateCurrentModel({ commit }, payload) {
      commit('setCurrentModel', payload);
    },
  },
});
