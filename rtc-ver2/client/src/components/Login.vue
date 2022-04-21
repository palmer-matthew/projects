<template>
  <div class="m-auto min-w-1/3 min-h-modal bg-primary rounded-md flex flex-col items-center">
    <Logo />
    <form @submit.prevent=handleSubmit class="w-full flex flex-col">
      <div v-for="(item, i) in inputs" :key=i class="px-10 flex flex-col mb-10">
        <label :for=item class="font-rh font-medium text-white text-lg mb-2">{{ titleCase(item) }}:</label>
        <input :name=item type="text" class="rounded-md h-12 px-2 focus:border-accent focus:border-4"/>
      </div>
      <div class="px-10 flex" >
        <button type="submit" class="mr-5 bg-accent text-white font-rh text-lg font-medium px-14 py-3 rounded-md">Login</button>
        <button type="button" class="bg-white text-primary font-rh text-lg font-medium px-10 py-3 rounded-md">Create Account</button>
      </div>
    </form>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: 'Login',
  components: {
    Logo,
  },
  props: {
    msg: String
  },
  data(){
    return {
      inputs : ["username", "password"]
    }
  },
  methods: {
    titleCase(msg){
      const result = msg.split("").map((value, index) => {
        return index == 0 ? value.toUpperCase() : value;
      });
      return result.join("");
    },
    handleSubmit(){
      console.log("submitted")
    }
  }
}
</script>
