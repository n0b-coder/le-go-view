<template>
  <div id="app">
    <div id="nav">
      <nav-bar class="pt-2 pb-2 pl-6 pr-6"/>
    </div>
    <router-view/>
    <footer class="footer footer-text">
      <div class="pl-6 pt-6 pr-6">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="lego-text--caption">© Le-go</p>
            </div>
          </div>
          <div class="level-center">
            <p class="lego-text lego-text--caption lego-text--caption--light">
              2021</p>
          </div>
          <div class="level-right">
            <div class="level-item">
              <a href="https://www.instagram.com/multirevels">
              <figure class="image is-32x32">
                <img src="./assets/imgs/ig.png">
              </figure>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  mounted() {
    this.$forceUpdate();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #18A0FB;
    }
  }
}
</style>
