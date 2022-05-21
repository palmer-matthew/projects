<template>
    <div class="h-16 flex justify-center items-center ">
        <button class="h-10 bg-grey rounded-md px-4 text-white font-rh">{{ buttonName }}</button>
    </div>
</template>

<script>
export default {
    name: "Base",
    props: ["buttonName"]
}
</script>