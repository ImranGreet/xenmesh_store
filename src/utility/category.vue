<template>
    <section class="w-64 bg-gray-500 px-4 py-2 text-gray-900">
        <div class="flex flex-col items-start justify-start gap-y-3">
            <router-link
                class="uppercase tracking-wider text-white"
                :to="{ name: `category`, params: { category: cat } }"
                v-for="(cat, index) in categories"
                :key="index">
                {{ cat }}
                <span class="text-xs"><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
            </router-link>
        </div>
    </section>
</template>

<script>
    import useCategories from '@/composables/categories';
    export default {
        name: 'category',
        setup() {
            const { categories } = useCategories();
            return {
                categories,
            };
        },
    };
</script>
