<template>
     <section
          class="relative hidden w-full bg-slate-800 px-3 py-2 text-white md:block md:px-10 md:py-12 xl:px-36 xl:py-24">
          <div class="w-full space-y-6 md:w-3/5">
               <h1 class="text-lg font-bold leading-[38px] tracking-wider md:text-2xl xl:text-4xl">
                    {{ productDetails.title }}
               </h1>
               <h3 class="text-sm font-medium leading-7 tracking-wide md:text-base xl:text-xl">
                    {{ productDetails.description }} ...
               </h3>
               <div class="space-x-2 text-yellow-500">
                    <span>4.8</span>
                    <div class="inline">
                         <span
                              v-for="(star, index) in 5"
                              :key="index">
                              <font-awesome-icon icon="fa-regular fa-star" />
                         </span>
                    </div>
                    <span class="tracking-wider">(75214)</span>
               </div>
               <h4 class="font-bold capitalize tracking-widest">
                    <span class="font-normal tracking-tight">Category :</span>
                    {{ productDetails.category }}
               </h4>
          </div>
          <Card class="absolute top-16 right-4 hidden md:block xl:top-24 xl:right-24"></Card>
     </section>
</template>

<script>
     import { inject } from 'vue';
     import Card from './Card.vue';
     import RelatedProducts from './RelatedProducts.vue';
     export default {
          name: 'Showcase',
          components: { Card, RelatedProducts },
          setup() {
               const productDetails = inject('productInformation');

               return {
                    productDetails,
               };
          },
     };
</script>
