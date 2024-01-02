<template>
    <nav class=" bg-header-navbar">
        <div class="container-lg d-flex .flex-shrink-1 align-items-center 
                justify-content-between mx-auto px-md-4 h-100">
            <nuxt-link to="/" class="d-flex align-items-center ml-md-0 ml-2 h-100">
                <img src="../assets/images/storage-linkers-logo.png" class="logo h-100 mr-3"
                    :alt="runtimeConfig.public.appName + ' Logo'" />
                <h1 class="self-center fs-md-3 fs-4 bold whitespace-nowrap">
                    {{ runtimeConfig.public.appName }}
                </h1>
            </nuxt-link>
            <button type="button" class="p-2 d-md-none h-100 btn-offcanvas border-0" data-bs-toggle="offcanvas"
                href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <svg class="w-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="d-md-block d-none h-100">
                <ul class="fs-5-md list-group list-group-horizontal menu-items-horizontal border-0 h-100">
                    <nuxt-link v-for="item in links" :to="item.to" class="d-block h-100" aria-current="page">
                        <li class="p-4 align-items-center list-group-item h-100">
                            {{ item.name }}
                        </li>
                    </nuxt-link>
                </ul>
            </div>
            <!-- OffCanvas Menu -->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <slot />
    <footer></footer>
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
<style scoped lang="scss">
nav {
    height: 75px;
    background-color: #ffba00
}

.menu-items-horizontal {
    background-color: #ffba00;

    li,
    a {
        border: none;
        background-color: #ffba00;

        &:hover {
            background-color: $primary;
            color: white;
        }
    }
}

.btn-offcanvas {
    background-color: $navbar;
    width: 50px;

    &:hover, :focus {
        background-color: $primary !important;
        color: white;
    }
}</style>