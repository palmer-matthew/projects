<template>
  <main class="max-h-screen">
      <div class="flex justify-center items-center mt-4 mb-5">
          <span class="text-white text-2xl font-rh font-semibold">Messages</span>
      </div>
      <div class=" h-4/5 overflow-y-auto px-5">
        <ChatCard class="mb-2" />
        <ChatCard class="mb-2" />
        <ChatCard class="mb-2" />
        <ChatCard class="mb-2" />
        <ChatCard class="mb-2" />
        <ChatCard class="mb-2" />
        <ChatCard class="mb-2" />
        <ChatCard class="mb-2" />
      </div>
      <div class="h-16 flex justify-center items-center ">
          <button class="h-10 bg-grey rounded-md px-4 text-white font-rh">New Conversation</button>
      </div>
  </main>
</template>

<script>
import ChatCard from '@/components/ChatCard.vue';

export default {
    name: "ChatList",
    components: {
        ChatCard
    },
    methods: {}
}
</script>