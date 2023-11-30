<template>
    <div>
        <nav class="dark:bg-gray-900 bg-header-navbar h-20">
            <div class="max-w-screen-xl d-flex .flex-shrink-1 items-center justify-between mx-auto md:px-4 h-full">
                <nuxt-link to="/" class="flex items-center md:ml-0 ml-2">
                    <img src="../assets/images/storage-linkers-logo.png" class="h-10 w-10 mr-3"
                        :alt="runtimeConfig.public.appName + ' Logo'" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">
                        {{ runtimeConfig.public.appName }}
                    </span>
                </nuxt-link>
                <button type="button" class="inline-flex items-center p-2 w-20 justify-center text-sm 
                            text-gray-500 md:hidden 
                            hover:bg-gray-100 focus:outline-none focus:ring-2 
                            focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
                            dark:focus:ring-gray-600 h-full" data-drawer-target="drawer-example"
                    data-drawer-show="drawer-example" aria-controls="drawer-example">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto h-full" id="navbar-default">
                    <ul class="font-medium flex flex-col md:p-0 rounded-lg 
                        md:flex-row md:mt-0 md:border-0
                        dark:bg-gray-800 md:dark:bg-gray-900 h-full cursor-pointer">
                        <nuxt-link v-for="item in links" :to="item.to" class="h-full block bg-blue-700 rounded
                            md:bg-transparent md:p-0" aria-current="page">
                            <li class="p-4 hover:bg-primary hover:text-white 
                                text-black h-full flex items-center ">
                                {{ item.name }}
                            </li>
                        </nuxt-link>
                    </ul>
                </div>
            </div>
        </nav>
        <slot />
        <footer></footer>
    </div>
</template>
<script setup lang="ts">

const runtimeConfig = useRuntimeConfig();

const links = ref([
    {
        name: "Home",
        to: "/"
    },
    {
        name: "About",
        to: "/about"
    },
    {
        name: "Guide",
        to: "/guide"
    },
    {
        name: "Login",
        to: "/login"
    },
    {
        name: "Register",
        to: "/register"
    },
]);
</script>