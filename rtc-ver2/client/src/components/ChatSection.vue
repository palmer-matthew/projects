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
    <div class="h-4/5 overflow-y-auto px-5 pt-3 flex flex-col justify-end">
        <Message  
            v-for="(chat, i) in chats" 
            :key=i
            :chat="chat"
            :isUser="chat.sender == user"
            :color="chat.sender == user ? color2 : color"
        />
    </div>
    <div class="w-full px-5 flex items-center py-5">
      <input type="text" v-model="input" class="border-primary w-11/12 border-4 mr-2 h-11 rounded-md ">
      <div class="flex justify-center items-center bg-primary text-white text-lg font-rh font-semibold px-3 py-2 rounded-md cursor-pointer hover:bg-secondary">
          <SendIcon 
            width="24px"
            height="24px"
            color='white'
            class="mr-2"
          />
          Send
      </div>
    </div>
  </section>
</template>

<script>
import Message from "@/components/Message.vue";
import SendIcon from "@/components/svg/SendIcon.vue";

export default {
    name: "ChatSection",
    components: {
        Message,
        SendIcon,
    },
    data(){
        return {
            input: "",
            user: "Tim",
            sender: "Karen",
            color: "",
            color2: "",
            chats: [
                // { sender: "Karen", receiver: "Tim", message: "Hey", dateSent: "2022-02-01"},
                // { sender: "Tim", receiver: "Karen", message: "Hey", dateSent: "2022-02-01"},
                // { sender: "Karen", receiver: "Tim", message: "Hey", dateSent: "2022-02-01"},
                // { sender: "Tim", receiver: "Karen", message: "Hey", dateSent: "2022-02-01"},
                // { sender: "Tim", receiver: "Karen", message: "Hey", dateSent: "2022-02-01"},
                // { sender: "Tim", receiver: "Karen", message: "Hey", dateSent: "2022-02-01"},
                // { sender: "Tim", receiver: "Karen", message: "Hey", dateSent: "2022-02-01"},
                // { sender: "Tim", receiver: "Karen", message: "Hey", dateSent: "2022-02-01"},
                // { sender: "Tim", receiver: "Karen", message: "Hey", dateSent: "2022-02-01"},
                // { sender: "Tim", receiver: "Karen", message: "Hey", dateSent: "2022-02-01"},
            ]
        }
    },
    created(){
      this.color = '#' + Math.floor(Math.random() * 6777215).toString(16);
      this.color2 = '#' + Math.floor(Math.random() * 6777215).toString(16);
    },
    methods: {
        initial(name){
            return name.substring(0,1);
        }
    }

}
</script>