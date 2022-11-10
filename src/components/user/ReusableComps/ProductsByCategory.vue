<template>
   <section>
      <div class="grid w-full grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-5">
         <ProductInfo
            v-for="product in productsByCategory"
            :key="product.id"
            :productDetails="product" />
      </div>
   </section>
</template>

<script>
import useCategories from '@/composables/categories';
import { onBeforeRouteUpdate } from 'vue-router';

export default {
   name: 'ProductsByCategory',
   setup() {
      const { productsByCategory } = useCategories();

      onBeforeRouteUpdate();

      return {
         productsByCategory,
      };
   },
};
</script>
