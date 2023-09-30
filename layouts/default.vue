<template>
    <header class="w-full">
        <div class="flex">
            <img class="w-4" src="../assets/images/storage-linkers-logo.png"/>
            <div class="float-right">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/">About Us</nuxt-link>
                <nuxt-link to="login">Login</nuxt-link>
            </div>
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