<template>
  <div>
    <Scene>
      <Asset src="https://www.babylonjs-playground.com/scenes/skull.babylon" :scaling="[0.02, 0.02, 0.02]" :position="[0, 0.5, 0]"></Asset>
    </Scene>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ObjVisualization',
  computed: {
    ...mapState([
      'currentModel',
    ]),
  },
};
</script>

<style lang="scss" scoped>

</style>
