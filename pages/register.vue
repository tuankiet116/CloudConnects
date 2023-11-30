<template>
    <div class="border-solid border-2 rounded-xl">
        <form class="p-4">
            <h1 class="p-2 text-xl font-bold">Register</h1>
            <div class="p-2">
                <label class="font-bold text-md">Email:</label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                            focus-visible:border-blue-500 focus-visible:ring-blue-500
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            dark:focus:ring-blue-500 dark:focus:border-blue-500
                            dark:focus-visible:border-blue-500 dark:focus-visible:ring-blue-500 outline-none"
                    type="email" />
            </div>
            <div class="p-2">
                <label class="font-bold text-md">Password:</label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                            focus-visible:border-blue-500 focus-visible:ring-blue-500
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            dark:focus:ring-blue-500 dark:focus:border-blue-500
                            dark:focus-visible:border-blue-500 dark:focus-visible:ring-blue-500 outline-none"
                    type="password" />
            </div>
            <div class="p-2">
                <button type="submit" @click.prevent="handleLogin" class="text-white bg-blue-700 hover:bg-blue-800
                            focus:outline-none focus-visible:outline-none focus:ring-blue-300 font-medium 
                            rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
                            text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                            dark:focus:ring-blue-800">
                    Login
                </button>
                <p class="text-center">
                    Don't have an account?
                    <nuxt-link :to="'/register'">
                        Register here!
                    </nuxt-link>
                </p>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: "user-auth"
});

</script>