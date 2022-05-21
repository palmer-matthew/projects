<template>
    <div class="flex justify-center items-center mt-4 mb-5">
        <span class="text-white text-2xl font-rh font-semibold">{{ name }}</span>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: ["name"]
}
</script>