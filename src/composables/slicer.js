import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useSlicer = function () {
    const store = useStore();
    const categories = store.state.products.categories;
    const allProducts = store.state.products.allProducts;
    const showRightButton = ref(true);
    const showLeftButton = ref(false);
    const initialState = ref(0);
    const finalState = ref(5);

    /*computed*/
    const rightSide = computed(() => showRightButton.value);
    const leftSide = computed(() => showLeftButton.value);

    const rightSlicer = function (productsByCategory = 6) {
        initialState.value += 1;
        finalState.value += 1;
    };
    const leftSlicer = function (productsByCategory = 6) {
        initialState.value -= 1;
        finalState.value -= 1;
    };

    return {
        /*properties*/
        initialState,
        finalState,
        categories,
        allProducts,
        showRightButton,
        showLeftButton,
        rightSide,
        leftSide,
        /*methods*/
        rightSlicer,
        leftSlicer,
    };
};

export default useSlicer;
