<template>
    <section class="flex flex-col items-center justify-between gap-y-12">
        <SortProducts />
        <div
            v-for="cat in categories"
            :key="cat"
            class="space-y-6">
            <h1 class="text-xl font-semibold uppercase leading-7 tracking-wider">
                {{ cat }}
            </h1>
            <ProductsGallery :category="cat"></ProductsGallery>
        </div>
    </section>
</template>

<script>
    import { useStore } from 'vuex';
    /*components*/

    import ProductsGallery from '@/components/user/ReusableComps/ProductsGallery.vue';
    import SortProducts from '@/views/SortProducts.vue';

    export default {
        name: 'HomeView',
        components: { ProductsGallery, SortProducts },
        setup() {
            const store = useStore();
            const categories = store.state.products.categories;

            return {
                categories,
            };
        },
    };
</script>
