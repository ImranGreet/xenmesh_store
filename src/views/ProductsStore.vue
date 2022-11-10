<template>
   <section>
      <div class="grid w-full grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-5">
         <ProductInfo
            v-for="product in productsInLimit"
            :key="product.id"
            :productDetails="product" />
      </div>
      <button
         @click="loadProductsInLimit()"
         class="my-8 w-36 bg-gray-800 px-3 py-2 text-white lg:hover:bg-gray-800/75">
         See More
      </button>
   </section>
</template>

<script>
import useProductStore from '@/composables/products_store';

export default {
   name: 'ProductsStore',
   setup() {
      const { productsInLimit, loadProductsInLimit } = useProductStore();
      return { productsInLimit, loadProductsInLimit };
   },
};
</script>
