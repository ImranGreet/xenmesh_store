import { computed } from 'vue';
import { useStore } from 'vuex';
export default function useCategories() {
     const store = useStore();
     const categories = store.state.products.categories;

     const productsByCategory = computed(
          () => store.state.products.productsAccordingToCategory
     );

     return {
          productsByCategory,
          categories,
     };
}
