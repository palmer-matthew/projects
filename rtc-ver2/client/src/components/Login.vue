<template>
  <div class="m-auto min-w-1/3 min-h-modal bg-primary rounded-md flex flex-col items-center">
    <Logo />
    <form 
      @submit.prevent=handleSubmit 
      class="w-full flex flex-col"
    >
      <div 
        class="px-10 flex flex-col mb-10"
      >
        <label 
          for="username" 
          class="font-rh font-medium text-white text-lg mb-2"
        >
          Username:
        </label>
        <input 
          v-model="username"
          name="username" 
          type="text" 
          class="rounded-md h-12 px-2 focus:border-accent focus:border-4"
        />
      </div>
      <div 
        class="px-10 flex flex-col mb-10"
      >
        <label 
          for="password" 
          class="font-rh font-medium text-white text-lg mb-2"
        >
          Password:
        </label>
        <input 
          v-model="password"
          name="password" 
          type="text" 
          class="rounded-md h-12 px-2 focus:border-accent focus:border-4"
        />
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
      username: "",
      password: "",
    }
  },
  methods: {
    titleCase(msg){
      const result = msg.split("").map((value, index) => {
        return index == 0 ? value.toUpperCase() : value;
      });
      return result.join("");
    },
    handleSubmit(event){
      console.log(this.username)
      console.log(this.password)
      // console.log("submitted")
      // console.log(event.target)
      // this.$router.push('chat');
    }
  }
}
</script>
