<template>
   <section class="flex w-full flex-col items-center justify-between md:block">
      <Showcase class="order-2 w-full"></Showcase>
      <RelatedProducts
         class="order-3 ml-10 w-full md:my-6 md:ml-16 md:w-3/5 xl:ml-24">
      </RelatedProducts>
      <Card class="order-1 block md:hidden"></Card>
   </section>
</template>

<script>
import { provide } from 'vue';
/*components*/
import Showcase from '@/components/user/ProductDetails/Showcase.vue';
import Card from '@/components/user/ProductDetails/Card.vue';
import DescriptionBox from '../components/user/ProductDetails/DescriptionBox.vue';
import RelatedProducts from '@/components/user/ProductDetails/RelatedProducts.vue';

/*composables*/
import useSingularproduct from '@/composables/singularProduct';

export default {
   name: 'ProductDetails',
   components: { Showcase, Card, DescriptionBox, RelatedProducts },
   setup() {
      const {
         id,
         title,
         details,
         productThumbnail,
         category,
         userReview,
         price,
         // product details
         productDetails,
      } = useSingularproduct();

      //provide for reduce using of props
      provide('productDescription', details);
      provide('image', productThumbnail);
      provide('price', price);
      provide('pro-id', id);
      provide('pro-category', category);
      provide('productInformation', productDetails);
      provide('pro-title', title);
      return {
         id,
         title,
         details,
         productThumbnail,
         category,
         price,
         userReview,
         //methods
      };
   },
};
</script>
