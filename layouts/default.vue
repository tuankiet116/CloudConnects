<template>
    <header class="w-full">
        <div class="">
            <img class=" w-20" src="../assets/images/storage-linkers-logo.png"/>
            <nav class="flex justify-center gap-x-4">
                <nuxt-link class="border font-bold p-2" to="/">Home</nuxt-link>
                <nuxt-link class="border font-bold p-2" to="/">About Us</nuxt-link>
                <nuxt-link class="border font-bold p-2" to="login">Login</nuxt-link>
            </nav>
        </div>
    </header>
    <slot/>
</template>
<script lang="ts">
 
</script>
<style scoped>
header {
    max-height: 200px;
}
</style>