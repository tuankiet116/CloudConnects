<template>
    <div class="container-md pt-md-10 p-lg-20 p-2 h-fit">
        <nuxt-link to="/" class="d-flex align-items-center">
            <img src="../assets/images/storage-linkers-logo.png" class="me-md-4 me-2 logo-image" alt="Cloud Linker Logo" />
            <h1 class="fs-2">Cloud Linker</h1>
        </nuxt-link>
    </div>
    <div class="container align-items-center mt-5">
        <div class="row mt-md-10">
            <div class="d-md-block d-none col">
                <div class="p-4">
                    <ul class="list-unstyled">
                        <li v-for="item in descriptions" class="">
                            <div class="d-flex">
                                <span class="fs-5 icon">
                                    <client-only>
                                        <font-awesome-icon icon="fa-circle-check fa-solid"/>
                                    </client-only>
                                </span>
                                <div class="ms-2">
                                    <span class="text-xl fs-5">
                                        <strong>
                                            {{ item.title }}
                                        </strong>
                                    </span>
                                    <p class="fs-6">{{ item.desc }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
const descriptions = [
    {
        title: "Support any business model",
        desc: "Host code that you don't want to share with the world in private."
    },
    {
        title: "Support any business model",
        desc: "Host code that you don't want to share with the world in private."
    },
    {
        title: "Support any business model",
        desc: "Host code that you don't want to share with the world in private."
    }
];
</script>
<style scoped>
.logo-image {
    height: 75px;
}

.icon {
    color: blue;
}


</style>