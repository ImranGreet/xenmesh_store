<template>
    <div
        class="z-20 w-full rounded-lg bg-white shadow-none md:w-[250px] md:border md:border-r-gray-800 md:shadow-lg xl:w-[350px]">
        <img
            :src="imageText"
            alt=""
            class="animate-wiggle h-72 w-full rounded-t-lg" />

        <div class="space-y-4 px-3 py-2">
            <h1 class="text-xl font-bold tracking-wide md:text-2xl lg:text-3xl">
                ${{ productPrice }}
            </h1>
            <div class="flex w-full justify-between gap-x-2">
                <button class="w-3/4 bg-purple-800 text-base capitalize text-white md:text-xl">
                    add to cart
                </button>
                <button class="w-1/4 bg-slate-200/80 px-1 py-2 text-2xl xl:px-2 xl:py-3">
                    <font-awesome-icon icon="fa-regular fa-heart" />
                </button>
            </div>
            <button
                class="w-full bg-stone-800 px-1 py-2 text-xl tracking-wider text-white xl:px-2 xl:py-3">
                Buy now
            </button>
        </div>
        <!-- description -->
        <DescriptionBox class="px-3 text-slate-800" />
    </div>
</template>

<script>
    import { ref, inject } from 'vue';
    import DescriptionBox from './DescriptionBox.vue';

    export default {
        name: 'Card',
        components: { DescriptionBox },
        setup() {
            const imageText = inject('image');
            const productPrice = inject('price');
            return {
                imageText,
                productPrice,
            };
        },
    };
</script>
