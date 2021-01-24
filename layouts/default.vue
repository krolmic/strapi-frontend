<template>
  <div>
    <Nav/>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <!-- This is where all yours pages will be -->
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style>
html {
  background-color: black;
}
</style>
