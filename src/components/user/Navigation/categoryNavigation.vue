<template>
    <section class="hidden w-full items-center justify-between px-10 py-2.5 xl:flex">
        <router-link
            class="uppercase tracking-wide"
            :to="{ name: `category`, params: { category: cat } }"
            v-for="(cat, index) in categories"
            :key="index">
            {{ cat }}
        </router-link>

        <router-link
            class="uppercase tracking-wide"
            :to="{ name: `login` }">
            Login
        </router-link>

        <router-link
            class="uppercase tracking-wide"
            :to="{ name: `registration` }">
            Registration
        </router-link>
    </section>
</template>

<script>
    import useCategories from '@/composables/categories';

    export default {
        name: 'CategoryNavigation',
        setup() {
            const { categories } = useCategories();
            return {
                categories,
            };
        },
    };
</script>
