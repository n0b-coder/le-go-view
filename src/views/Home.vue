<template>
  <div class="home">
    <splide>
      <splide-slide v-for="image in images.carouselImages" :key="image.id">
        <figure class="image is-3by1">
          <img :src="image">
        </figure>
      </splide-slide>
    </splide>
    <div class="container">
      <section class="hero is-medium">
        <div class="hero-body">
          <p class="lego-subtitles title has-text-center pb-3 is-size-1">
            La mejor guía para armar tus legos
          </p>
        </div>
      </section>
      <section class="hero is-medium">
        <div class="hero-body">
          <p class="lego-titles title has-text-center pb-3 is-size-1">
            Encuentra el modelo Lego
          </p>
          <div class="columns is-multiline is-justify-content-space-between">
            <div
              v-for="imageCard in images.models"
              :key="imageCard.id"
              class="is-half-desktop column is-clickable"
              @click="updateModel(imageCard)"
            >
              <router-link to="/visualize-object">
                <image-cards :imgUrl="imageCard.image" />
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <section class="hero is-small">
        <div class="hero-body">
          <div class="is-flex is-flex-direction-row-reverse is-align-items-center">
            <p class="pl-6 title has-text-right lego-titles is-size-1">
              Visualiza la demostración
            </p>
            <template>
              <LazyYoutube max-width="100%" aspectRatio="16:9" src="https://www.youtube.com/watch?v=l34EihmVzTI" />
            </template>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { LazyYoutube } from 'vue-lazytube';
import ImageCards from '@/components/ImageCards.vue';

export default {
  name: 'Home',
  data() {
    return {
      model: '',
    };
  },
  components: {
    ImageCards,
    LazyYoutube,
  },
  computed: {
    ...mapState(['images']),
  },
  methods: {
    ...mapActions(['updateCurrentModel']),
    async updateModel(payload) {
      await Promise.all([this.updateCurrentModel(payload)]);
      window.location.reload();
    },
  },
};
</script>
