<template>
  <nav class="navbar is-fixed-top header" role="navigation" aria-label="main navigation">
    <div class="navbar-brand header">
      <a class="navbar-item" href="#">
        <router-link to="/">LOGO</router-link>
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item lego-text">
          <router-link to="/">Inicio</router-link>
        </a>
        <a class="navbar-item lego-text">
          <router-link to="/gallery">Galería</router-link>
        </a>
        <a class="navbar-item lego-text">
          <router-link to="/help">Ayuda (?)</router-link>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
