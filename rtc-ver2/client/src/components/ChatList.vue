<template>
  <main class="max-h-screen bg-primary col-span-10">
    <Header name="Messages" />
    <div class="h-4/5 overflow-y-auto px-5">
        <ChatCard selected="true"/>
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
    </div>
    <Base buttonName="New Conversation" />
  </main>
</template>

<script>
import ChatCard from '@/components/ChatCard.vue';
import Header from '@/components/Header.vue';
import Base from '@/components/Base.vue';

export default {
    name: "ChatList",
    components: {
        ChatCard,
        Header,
        Base
    },
    methods: {}
}
</script>