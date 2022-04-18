<template>
  <main>
    <h1>Testing D3 in Vue</h1>
    <h4>First Chart Test</h4>
    <Ex1 />
    <h4>Second Chart Test</h4>
    <Ex2 />
  </main>
</template>

<script>
import Ex1 from "@/components/Ex1.vue";
import Ex2 from "@/components/Ex2.vue";

export default {
  name: 'App',
  components: {
    Ex1,
    Ex2,
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

main{
  display:flex;
  flex-direction: column;
  justify-content: space-around;
}

h4{
  text-decoration: underline;
}
</style>
