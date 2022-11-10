<template>
    <section
        class="flex w-full items-center justify-between bg-inherit px-10 text-center shadow-xl shadow-gray-900/20">
        <div class="text-2xl">
            <span><font-awesome-icon icon="fa-solid fa-bars" /></span>
        </div>
        <router-link
            to="#"
            class="text-2xl">
            xenmesh
        </router-link>
        <div>
            <span class="text-base">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </span>
            <router-link
                to="#"
                class="text-base">
                <span class="text-base">
                    <font-awesome-icon icon="fa-solid fa-cart-plus" />
                    (2)
                </span>
            </router-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SearchNavigationSmall.vue',
    };
</script>
