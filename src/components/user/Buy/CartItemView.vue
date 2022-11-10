<template>
    <div class="my-8 flex w-full gap-x-5">
        <img
            :src="imageText"
            alt=""
            class="h-20 w-20 rounded-md md:h-36 md:w-44" />
        <div class="flex flex-col gap-x-8 leading-7 md:flex-row">
            <div>
                <h1 class="text-base font-semibold tracking-wider md:text-xl">
                    How to Implement a Mouseover or Hover in Vue
                </h1>
                <h4>
                    <span>Category :</span>
                    Electroincs
                </h4>
                <!-- ratings -->
                <div>
                    <p>
                        <span>4.5</span>
                        <span>*****</span>
                        <span>(1250)</span>
                    </p>
                </div>
            </div>
            <!-- operation button -->
            <div class="flex w-full flex-row gap-x-1 md:flex-col">
                <button class="underline decoration-1 underline-offset-2">Remove</button>

                <button class="underline decoration-1 underline-offset-2">move to wishlist</button>
            </div>
        </div>
        <!-- price tag -->
        <div>
            <h1 class="text-xl font-semibold">$199.99</h1>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'ItemView',
        setup() {
            const imageText = ref(
                'https://images.unsplash.com/photo-1662581872342-3f8e0145668f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
            );
            return {
                imageText,
            };
        },
    };
</script>
