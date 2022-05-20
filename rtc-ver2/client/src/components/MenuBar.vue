<template>
  <div class="flex flex-col px-auto">
    <MainIcon
        class="mx-auto mb-10 mt-2.5"
        width="45px"
        height="45px"
    />
    <div class="bg-white h-10 w-10 rounded-md mx-auto flex justify-center items-center mb-5">
        <ChatIcon
          width="24px"
          height="24px"
          :color="selection == 'chats' ? selected : regular"
        />
    </div>
    <div 
        class="bg-white h-10 w-10 rounded-md mx-auto flex justify-center items-center"
    >
        <GroupIcon
          width="24px"
          height="24px"
          :color="selection == 'groups' ? selected : regular"
        />
    </div>   
  </div>
</template>

<script>
import ChatIcon from "@/components/svg/ChatIcon.vue";
import GroupIcon from "@/components/svg/GroupIcon.vue";
import MainIcon from "@/components/svg/MainIcon.vue";

export default {
    props: ["selection"],
    components: {
        ChatIcon,
        GroupIcon,
        MainIcon,
    },
    data(){
        return {
            selected: '#27B281',
            regular: '#01101B',
            // selection: 'group',
        }
    }
}
</script>