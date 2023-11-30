<template>
    <div class="md:p-10 xl:p-20 p-2 w-fit">
        <nuxt-link to="/" class="flex items-center w-auto">
            <img src="../assets/images/storage-linkers-logo.png" class="h-20 mr-4" alt="Cloud Linker Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Cloud Linker</span>
        </nuxt-link>
    </div>
    <div class="grid p-2 items-center min-h-[500px]
                md:grid-cols-2 md:p-10 md:h-fit
                xl:p-20">
        <div class="h-fit hidden md:block">
            <div class="p-4 md:mt-10">
                <ul>
                    <li class="subpixel-antialiased">
                        <div class="flex">
                            <span class="text-xl">
                                <client-only>
                                    <font-awesome-icon icon="fa-circle-check fa-solid" />
                                </client-only>
                            </span>
                            <div class="w-fit ml-2">
                                <span class="text-xl font-bold">
                                    Support any business model
                                </span>
                                <p>Host code that you don't want to share with the world in private.</p>
                            </div>
                        </div>
                    </li>
                    <li class="subpixel-antialiased">
                        <div class="flex">
                            <span class="text-xl">
                                <client-only>
                                    <font-awesome-icon icon="fa-circle-check fa-solid" />
                                </client-only>
                            </span>
                            <div class="w-fit ml-2">
                                <span class="text-xl font-bold">
                                    Support any business model
                                </span>
                                <p>Host code that you don't want to share with the world in private.</p>
                            </div>
                        </div>
                    </li>
                    <li class="subpixel-antialiased">
                        <div class="flex">
                            <span class="text-xl">
                                <client-only>
                                    <font-awesome-icon icon="fa-circle-check fa-solid" />
                                </client-only>
                            </span>
                            <div class="w-fit ml-2">
                                <span class="text-xl font-bold">
                                    Support any business model
                                </span>
                                <p>Host code that you don't want to share with the world in private.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="h-fit">
            <slot></slot>
        </div>
    </div>
</template>
<script>
</script>