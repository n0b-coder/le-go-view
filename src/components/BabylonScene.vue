<template>
  <div style="width: 100%" class="has-text-left">
    <canvas ref="bjsCanvas" style="width: 100%" />
  </div>
</template>

<script>
import { createScene } from '../scenes/MyFirstScene';

export default {
  name: 'BabylonScene',

  mounted() {
    const { bjsCanvas } = this.$refs;
    if (bjsCanvas) {
      createScene(bjsCanvas);
    }
  },
};
</script>
