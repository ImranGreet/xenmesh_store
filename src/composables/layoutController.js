import { computed } from 'vue';
import { useRoute } from 'vue-router';

const useFullWidth = computed(() => {
    const route = useRoute();
    const routeNames = ['singular', 'login', 'registration'];
    const fullWidth = [...routeNames].includes(route.name) ? true : false;
    return fullWidth;
});

export { useFullWidth };
