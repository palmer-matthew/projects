<template>
  <section class="col-span-7 max-h-screen">
    <div class="h-16 flex justify-center items-center bg-grey">
        <div
            :style="{ 'background': color }"
            class="h-10 w-10 mr-5 rounded-full flex justify-center items-center font-rh font-bold text-lg text-white"
        >
            {{ initial(sender) }}
        </div>
        <span class="text-white text-xl font-medium">{{ sender }}</span>
    </div>
    <div class=" h-4/5 overflow-y-auto px-5 pt-3">
        <Message />
    </div>
  </section>
</template>

<script>
import Message from "@/components/Message.vue";

export default {
    name: "ChatSection",
    components: {
        Message,
    },
    data(){
        return {
            user: "Tim",
            sender: "Karen",
            color: "",
            chats: [
                { sender: "Karen", receiver: "Tim", message: "Hey", dateSent: "2022-02-01"},
                { sender: "Tim", receiver: "Karen", message: "Hey", dateSent: "2022-02-01"},
            ]
        }
    },
    created(){
      this.color = '#' + Math.floor(Math.random() * 6777215).toString(16);
    },
    methods: {
        initial(name){
            return name.substring(0,1);
        }
    }

}
</script>