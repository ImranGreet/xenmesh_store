<template>
    <section class="w-full divide-y-2 divide-gray-600/10 shadow-lg">
        <SearchAndCartNav />
        <SearchNavigationSmall class="block xl:hidden" />
        <CategoryNavigation />
    </section>
</template>

<script>
    import SearchAndCartNav from '@/components/user/Navigation/SearchAndCartNav.vue';
    import CategoryNavigation from '@/components/user/Navigation/categoryNavigation.vue';
    import SearchNavigationSmall from '@/components/user/Navigation/searchNavigationSmall.vue';
    export default {
        name: 'Navigation',
        components: { SearchAndCartNav, CategoryNavigation, SearchNavigationSmall },
        setup() {
            return {};
        },
    };
</script>
