<template>
  <div class="p-6">
    <div class="columns is-multiline">
      <div v-for="imageCard in images.galleryImages" :key="imageCard.id"
      class="is-one-quarter-desktop column is-clickable">
        <image-cards
          :imgUrl = "imageCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ImageCards from '../components/ImageCards.vue';

export default {
  components: { ImageCards },
  computed: {
    ...mapState([
      'images',
    ]),
  },
};
</script>

<style lang="scss" scoped>

</style>
