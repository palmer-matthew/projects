<template>
  <main>
    <Ex1 />
  </main>
</template>

<script>
import Ex1 from "@/components/Ex1.vue";

export default {
  name: 'App',
  components: {
    Ex1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
