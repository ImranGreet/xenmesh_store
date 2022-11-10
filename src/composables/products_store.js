import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const useProductStore = () => {
    const store = useStore();
    const productsInLimit = computed(() => {
        store.state.products.productsInLimit;
    });

    const loadProductsInLimit = async (payload) =>
        await store.dispatch('products/retrieveAllProductsInLimit', payload);

    onMounted(async () => {
        await store.dispatch('products/retrieveAllProductsInLimit', 10);
    });

    return {
        productsInLimit,
        /*methods*/
        loadProductsInLimit,
    };
};
export default useProductStore;
