<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="is-flex is-justify-content-space-between pr-6 pl-6">
          <babylon-scene/>
          <div class="is-flex is-align-items-center" style="width: 100%">
            <p class="title has-text-center lego-titles is-size-1" style="width: 100%">
              Modelo 3D
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="is-flex is-justify-content-space-between pr-6 pl-6">
          <div class="is-flex is-align-items-center" style="width: 100%;">
            <p class="pl-6 has-text-center title lego-titles is-size-1" style="width: 100%">
              Vídeo tutorial
            </p>
          </div>
          <template>
            <LazyYoutube max-width="50%" aspectRatio="16:9" :src="tutorialUrl" />
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { LazyYoutube } from 'vue-lazytube';
import BabylonScene from '@/components/BabylonScene.vue';

export default {
  name: 'ObjVisualization',
  components: {
    BabylonScene,
    LazyYoutube,
  },
  computed: {
    ...mapState(['currentModel']),
    tutorialUrl() {
      const model = JSON.parse(window.localStorage.getItem('modelData'));
      return model.url;
    },
  },
};
</script>

<style lang="scss">

</style>
