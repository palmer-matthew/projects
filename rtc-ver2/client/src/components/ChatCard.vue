<template>
  <div class="bg-grey h-20 flex items-center pl-4">
    <div
      :style="{ 'background': color }"
      class="h-14 w-14 mr-3 rounded-full flex justify-center items-center font-rh font-bold text-xl text-white"
    >
         K
    </div>
    <div class="flex flex-col w-1/2">
      <span class="text-white ">Name of Contact</span>
      <span class="text-white text-xs  font-normal ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna ....
      </span>
    </div>
  </div>
</template>

<script>
export default {
    name: "ChatCard",
    props: ["name", "recent"],
    data(){
      return {
        color: "",
      }
    },
    created(){
      this.color = '#' + Math.floor(Math.random() * 6777215).toString(16);
    }
}
</script>