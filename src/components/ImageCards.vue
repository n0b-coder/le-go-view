<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-5by3">
      <img :src="imgUrl">
    </figure>
  </div>
</div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
