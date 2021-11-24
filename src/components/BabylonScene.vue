<template>
  <div>
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
    this.$forceUpdate();
    console.log('create scene');
  },
};
</script>
