<template>
  <div class="home">
    <splide>
      <splide-slide v-for="image in images.carouselImages" :key="image.id">
        <img style="width: 100%" class="image" :src="image">
      </splide-slide>
    </splide>
    <div class="container">
      <section class="hero is-medium">
        <div class="hero-body">
          <p class="lego-titles title has-text-left pb-3">
            Encuentra el modelo Lego
          </p>
          <div class="columns is-multiline is-justify-content-space-between">
      <div v-for="imageCard in images.models" :key="imageCard.id"
      class="is-one-quarter-desktop column is-clickable"
      @click="updateCurrentModel(imageCard)">
      <router-link to="/visualize-object">
        <image-cards
          :imgUrl = "imageCard.image"
        />
      </router-link>
      </div>
    </div>
        </div>
      </section>
      <section class="hero is-medium">
        <div class="hero-body">
          <div class="is-flex is-flex-direction-row-reverse is-align-items-center">
            <p class="pl-6 title has-text-right lego-titles">
              Visualiza el vídeo demostración
            </p>
            <template>
                <LazyYoutube aspectRatio="16:9" src="https://www.youtube.com/watch?v=l34EihmVzTI" />
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
    ...mapState([
      'images',
    ]),
  },
  methods: {
    ...mapActions([
      'updateCurrentModel',
    ]),
  },
};
</script>
