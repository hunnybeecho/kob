<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import router from '@/router'

export default {
  name: 'App',
  components: {
    NavBar
  },
  created() {
    router.replace('/home')
  },
}
</script>

<style>
body {
  /* background-image: url("./assets/background.png");
  background-size: cover; */
  font-family: MainFont;
}
</style>
