<template>
  <div class="w-full flex flex-col">
    <div v-if="!isUser" class="self-start mb-5">
        <span class="font-rh text-xs text-grey">Sent at {{ chat.dateSent }}</span>
        <div class="flex mt-1">
          <div
              :style="{ 'background': color }"
              class="h-10 w-10 mr-3 rounded-full flex justify-center items-center font-rh font-bold text-sm text-white"
          >
              {{ initial(chat.sender) }}
          </div>
          <div class="bg-primary text-white text-sm whitespace-normal rounded-md max-w-xs px-4 py-2"> {{ chat.message }}</div>
        </div>
    </div>
    <div v-if="isUser" class="self-end mb-5">
        <span class="font-rh text-xs text-grey mb-10">Sent at {{ chat.dateSent }}</span>
        <div class="flex mt-1">
           <div class="bg-secondary text-white text-sm text-left whitespace-normal rounded-md max-w-xs px-4 py-2 mr-3"> {{ chat.message }}</div>
          <div
              :style="{ 'background': color }"
              class="h-10 w-10 rounded-full flex justify-center items-center font-rh font-bold text-sm text-white"
          >
              {{ initial(chat.sender) }}
          </div>
         
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["chat", "isUser", "color"],
  methods: {
    initial(name){
      return name.substring(0,1);
    }
  }
}
</script>