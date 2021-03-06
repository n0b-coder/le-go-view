import Vue from 'vue';
import Vuex from 'vuex';

import image1 from '@/assets/models/imgs/lego_camion_v1.1.jpg';
import image2 from '@/assets/models/imgs/nave.jpg';
import image3 from '@/assets/models/imgs/lego_carr_front.jpg';
import image4 from '@/assets/models/imgs/car.jpg';
import image5 from '@/assets/models/imgs/taxi.jpg';
import image6 from '@/assets/models/imgs/figure.jpg';
import image7 from '@/assets/models/imgs/legoCar.png';
import image8 from '@/assets/models/imgs/hotRod.jpg';
import image9 from '@/assets/models/imgs/driver.jpg';
import image10 from '@/assets/models/imgs/ghost.jpg';

import carouselImage1 from '@/assets/imgs/banner/ban1.jpeg';
import carouselImage2 from '@/assets/imgs/banner/ban2.jpg';
import carouselImage3 from '@/assets/imgs/banner/ban3.jpeg';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: {
      carouselImages: [
        carouselImage2,
        carouselImage3,
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
        {
          image: image7,
          model: 'legoCar.glb',
          url: '',
        },
        {
          image: image8,
          model: 'hotRod.glb',
          url: '',
        },
        {
          image: image9,
          model: 'driver.glb',
          url: 'https://youtu.be/mHNX6Lr_n6I',
        },
        {
          image: image10,
          model: 'ghost.glb',
          url: 'https://youtu.be/9T0_zAyrbiI',
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
      console.log('commit mutation');
      // window.location.reload();
      console.log('after reload');
    },
  },
  actions: {
    updateCurrentModel({ commit }, payload) {
      console.log('action');
      commit('setCurrentModel', payload);
      window.localStorage.setItem('modelData', JSON.stringify({ model: payload.model, image: payload.image, url: payload.url }));
    },
  },
});
