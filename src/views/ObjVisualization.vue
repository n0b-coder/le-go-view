<template>
  <div>
    <babylon-scene/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BabylonScene from '@/components/BabylonScene.vue';

export default {
  name: 'ObjVisualization',
  components: {
    BabylonScene,
  },
  computed: {
    ...mapState(['currentModel']),
  },
};
</script>

<style lang="scss" scoped></style>
