<template>
  <section class="bg-cultured h-screen flex items-center">
    <Login />
  </section>
</template>

<script>
import Login from '@/components/Login.vue'
import socket from "@/utils/socket.js";

export default {
  name: 'Home',
  components: {
    Login
  },
  mounted(){
    // socket.connect();
    // socket.disconnect();
  }
}
</script>
