<template>
    <div class="mt-5 mb-5 flex items-center">
        <img :src=icon alt="icon" class="w-16 mr-2">
        <span class='text-4xl text-white font-ks'>Eclipse</span>
    </div>
</template>

<script>
import icon from "@/assets/icons/bxs-adjust-alt.svg";

export default {
    name: "Logo",
    data() {
        return {
            icon : icon,
        }
    }
}
</script>