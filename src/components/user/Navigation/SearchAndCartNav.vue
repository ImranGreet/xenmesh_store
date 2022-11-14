<template>
    <section
        class="hidden w-full grid-cols-12 items-center justify-items-center py-3 text-center xl:grid">
        <div class="relative col-span-2 flex gap-x-3">
            <router-link
                :to="{ name: `home` }"
                class="">
                xenmesh
            </router-link>
            <div class="group">
                <button aria-expanded="false">categories</button>
                <category class="absolute top-6 z-10 hidden lg:group-hover:block" />
            </div>
        </div>
        <!-- search form -->
        <form class="relative col-span-6 w-full">
            <input
                type="text"
                name=""
                id=""
                placeholder="Search for anything"
                class="form-input w-full rounded-3xl px-20" />
            <span class="absolute top-2.5 left-12">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </span>
        </form>
        <!-- store -->
        <div class="flex gap-x-4 lg:col-span-4">
            <div class="flex gap-x-3">
                <router-link
                    to="#"
                    class="lg:hover:text-purple-800">
                    Xenmesh Business
                </router-link>
                <router-link
                    to="#"
                    class="lg:hover:text-purple-800">
                    Instructor
                </router-link>
                <router-link
                    to="#"
                    class="lg:hover:text-purple-800">
                    Store
                </router-link>
            </div>
            <!-- cart and wish and profile -->
            <div class="flex gap-x-3">
                <router-link
                    :to="{ name: `wish` }"
                    class="text-xl">
                    <span class="font-serif text-xl">
                        <font-awesome-icon icon="fa-regular fa-heart" />
                    </span>
                    ({{ wishedItemsAmount }})
                </router-link>
                <router-link
                    :to="{ name: `cart` }"
                    class="text-xl">
                    <span class="font-serif text-xl">
                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                    </span>
                    ({{ cartedItemsAmount }})
                </router-link>
                <router-link to="#">
                    <span class="text-xl"><font-awesome-icon icon="fa-regular fa-bell" /></span>
                </router-link>
                <router-link
                    to="#"
                    class="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-gray-700 text-white">
                    <span class="text-xl">I</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import category from '@/utility/category.vue';
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    export default {
        name: 'SearchAndCartNav',
        components: { category },

        setup() {
            const store = useStore();
            const cartedItems = store.state.cart.cartedItems;
            const cartedItemsAmount = computed(() => {
                // const amount = JSON.parse(localStorage.getItem('products')).length;
                const amount = 5;
                return amount;
            });
            const wishedItemsAmount = computed(() => {
                // const amount = JSON.parse(localStorage.getItem('wished-products')).length || 0;
                // return amount;
            });
            return {
                cartedItems,
                cartedItemsAmount,
                wishedItemsAmount,
            };
        },
    };
</script>
