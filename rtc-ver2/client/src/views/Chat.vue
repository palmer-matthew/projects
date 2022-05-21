<template>
    <main>
        <div class="h-screen grid grid-cols-12">
            <section class="col-span-5 grid grid-cols-12">
                <MenuBar selection="chats" />
                <ChatList />
            </section>
            <ChatSection />
        </div>
    </main>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue';
import ChatList from '@/components/ChatList.vue';
import ChatSection from '@/components/ChatSection.vue';

export default {
    name: 'Chat',
    components: {
        MenuBar,
        ChatList,
        ChatSection
    }
}
</script>

<style>

</style>