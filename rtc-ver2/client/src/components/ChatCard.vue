<template>
  <div :class="selected ? sdesign : design">
    <div
      :style="{ 'background': color }"
      class="h-14 w-14 mr-3 rounded-full flex justify-center items-center font-rh font-bold text-xl text-white"
    >
         {{ initial(person) }}
    </div>
    <div class="flex flex-col w-3/4 mr-2">
      <span class="text-white font-medium mb-1">{{ person }}</span>
      <span class="text-white text-xs font-light">{{ showMessage(message) }}</span>
    </div>
    <div class="mr-2">
      <div
        class="h-5 w-5 bg-accent rounded-full flex justify-center items-center font-rh font-bold text-sm text-white"
      >
         {{ this.toread }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ChatCard",
    props: ["name", "recent", "unread", "selected"],
    data(){
      return {
        person: "Karen",
        color: "",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna ....",
        toread: 3,
        design: "h-20 flex items-center pl-3 mb-2 hover:bg-secondary cursor-pointer",
        sdesign: "h-20 flex items-center pl-3 mb-2 border-r-4 border-accent hover:bg-secondary cursor-pointer",
      }
    },
    created(){
      this.color = '#' + Math.floor(Math.random() * 6777215).toString(16);
    },
    methods: {
      showMessage(message){
        return message.length > 50 ? message.substring(0,50) + "..." : message;
      },
      initial(name){
        return name.substring(0,1);
      }
    }
}
</script>