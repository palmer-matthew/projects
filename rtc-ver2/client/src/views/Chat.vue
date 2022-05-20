<template>
    <main>
        <div class="h-screen grid grid-cols-12">
            <section class="col-span-5 grid grid-cols-12">
                <MenuBar class="bg-grey col-span-2" selection="chats" />
                <ChatList class="bg-primary col-span-10" />
            </section>
            <div class="col-span-7">
                Hey
            </div>
        </div>
    </main>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue';
import ChatList from '@/components/ChatList.vue';

export default {
    name: 'Chat',
    components: {
        MenuBar,
        ChatList
    }
}
</script>

<style>

</style>