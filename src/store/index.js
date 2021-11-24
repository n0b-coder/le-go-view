import Vue from 'vue';
import Vuex from 'vuex';

import image1 from '@/assets/models/imgs/lego_camion_v1.1.jpg';
import image2 from '@/assets/models/imgs/nave.jpg';
import image3 from '@/assets/models/imgs/lego_carr_front.jpg';
import image4 from '@/assets/models/imgs/car.jpg';
import image5 from '@/assets/models/imgs/taxi.jpg';
import image6 from '@/assets/models/imgs/figure.jpg';

import carouselImage1 from '@/assets/imgs/banner/ban1.jpeg';
import carouselImage2 from '@/assets/imgs/banner/ban2.jpg';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: {
      carouselImages: [
        carouselImage2,
        'https://www.lego.com/cdn/cs/set/assets/blt793defaf276bafe5/Classic-BI_main-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1',
        carouselImage1,
      ],
      models: [
        {
          image: image1,
          model: 'truck.glb',
          url: 'https://youtu.be/kzqCYkkVPzE',
        },
        {
          image: image3,
          model: 'car.glb',
          url: 'https://youtu.be/8abEpbIOivc',
        },
      ],
      galleryImages: [
        {
          image: image4,
          model: 'minicar.glb',
          url: 'https://youtu.be/ZWpAxo6AlqE',
        },
        {
          image: image2,
          model: 'nave.glb',
          url: 'https://youtu.be/xxgZNL799nI',
        },
        {
          image: image5,
          model: 'taxi.glb',
          url: 'https://youtu.be/nWBlw4HWEkE',
        },
        {
          image: image6,
          model: 'figure.glb',
          url: 'https://youtu.be/6m-TMispAWc',
        },
      ],
    },
    currentModel: {
      image: '',
      url: '',
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
      window.localStorage.setItem('modelData', JSON.stringify({ model: payload.model, image: payload.image, url: payload.url }));
      // eslint-disable-next-line no-restricted-globals
      window.location.reload();
    },
  },
});
