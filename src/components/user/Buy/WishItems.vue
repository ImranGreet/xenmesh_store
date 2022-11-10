<template>
    <section class="flex flex-col sm:flex-row">
        <ProductInfo
            v-for="product in products"
            :key="product.id"
            :productDetails="product" />
    </section>
</template>

<script>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';

    export default {
        name: 'WishedItems',

        setup() {
            let products = ref([]);
            onMounted(async () => {
                let response = await axios.get(
                    'https://fakestoreapi.com/products/category/jewelery'
                );
                products.value = response.data;
            });
            return {
                products,
            };
        },
    };
</script>
