<template>
  <div class="p-6">
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
    <div class="columns is-multiline is-justify-content-space-between">
      <div
        v-for="imageCard in images.galleryImages"
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
</template>

<script>
import { mapState, mapActions } from 'vuex';

import ImageCards from '../components/ImageCards.vue';

export default {
  components: { ImageCards },
  computed: {
    ...mapState([
      'images',
    ]),
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

<style lang="scss" scoped>

</style>
