<template>
  <main class="m-auto min-w-1/3 min-h-modal">
    <div v-if="message" :class="'text-center text-lg font-rf font-medium mb-10 p-3 rounded-md ' + design">
      {{ message }}
    </div>
    <div class="w-full h-full bg-primary rounded-md flex flex-col items-center pb-10">
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
        <div class="px-10 flex justify-center" >
          <button type="submit" class="mr-5 bg-accent text-white font-rh text-lg font-medium px-14 py-3 rounded-md">Login</button>
          <button @click="signUp" type="button" class="bg-white text-primary font-rh text-lg font-medium px-10 py-3 rounded-md">Create Account</button>
        </div>
      </form>
    </div>
  </main>
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
      message: "",
      username: "",
      password: "",
      design: "",
      success: "bg-green-200 border-4 border-green-600 text-green-600",
      error: "bg-red-200 border-4 border-red-600 text-red-600"
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

      const BASE_URL = 'http://localhost:8888/api/';
      const route = BASE_URL + 'login';

      const request = new Request(route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username:  this.username,
          password: this.password
        })
      });

      fetch(request)
      .then(response => response.json())
      .then(data => {
        if(data.status >= 400){
          this.popup(data.message, this.error);
        }else{
          this.popup(data.message, this.success);
          setTimeout(() => {
            this.$router.push({
              name: 'chat',
              params: {
                username: data.username,
                isLoggedin: data.loggedIn
              }
            })
          }, 2500);
        }
      }).catch(err => {
        this.popup("Something went wrong. Please try again later.", this.error);
      });;
    },
    signUp(){
      const BASE = 'http://localhost:8888/api/';
      const route = BASE + 'signup';

      const request = new Request(route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username:  this.username,
          password: this.password
        })
      });

      fetch(request)
      .then(response => response.json())
      .then(data => {
        if(data.status >= 400){
          this.popup(data.message, this.error);
        }else{
          this.popup(data.message, this.success);
        }
      }).catch(err => {
        this.popup("Something went wrong. Please try again later.", this.error);
      });
    },
    popup(message, design){
      this.message = message;
      this.design = design;
      setTimeout(() => {
        this.message = "";
        this.design = "";
      }, 2500);
    }
  }
}
</script>
