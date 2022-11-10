<template></template>

<script>
    /*composition api*/
    import { ref } from 'vue';
    /*composables*/
    import useCategories from '@/composables/categories';
    export default {
        name: 'modalCategory',

        setup() {
            const { categories } = useCategories();
            const modalToShow = ref([...categories]);
            return { modalToShow };
        },
    };
</script>
