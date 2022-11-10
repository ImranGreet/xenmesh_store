<template>
    <section class="antialiased">
        <Navigation />

        <div
            class="mx-auto my-8 h-fit px-3 md:max-w-6xl xl:px-0 2xl:max-w-7xl"
            :class="{ 'my-0 max-w-full px-0': fullWidth }">
            <router-view />
        </div>

        <Footer />
    </section>
</template>

<script>
    /*components*/
    import Footer from '@/views/Footer.vue';
    import Navigation from '@/views/Navigation.vue';
    /*composables*/
    import useCategories from '@/composables/categories';
    import { useFullWidth } from '@/composables/layoutController';

    export default {
        name: 'UserLayout',
        components: {
            Footer,
            Navigation,
        },
        setup() {
            const { categories } = useCategories();
            const fullWidth = useFullWidth;
            return {
                categories,
                fullWidth,
            };
        },
    };
</script>
