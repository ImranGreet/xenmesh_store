import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const allProducts = store.state.products.allProducts;

/*operations button*/
const showRightButton = ref(true);
const showLeftButton = ref(false);
const loadMoreButton = ref(false);
/*end operations button*/

/*reload tracker*/
const initialState = ref(0);
const finalState = ref(0);
const resetChanger = ref(false);
/*reload tracker*/

const finalLength = allProducts.filter((product) => product.category === props.category).length;

/*computed*/
const start = computed(() => initialState.value);
const final = computed(() => finalState.value);
const rightButton = computed(() => showRightButton.value);
const leftButton = computed(() => showLeftButton.value);
/*computed end*/

const productsByCategory = computed(() =>
    allProducts
        .filter((product) => product.category === props.category)
        .slice(start.value, final.value)
);

/*controller*/
const windowWidthTracker = () => {
    if (window.innerWidth >= 1280) {
        finalState.value = 5;
        showRightButton.value = true;
        loadMoreButton.value = false;
        if (productsByCategory.value.length < 5) {
            showRightButton.value = false;
            loadMoreButton.value = false;
        }
    } else if (window.innerWidth >= 1024) {
        finalState.value = 3;
        loadMoreButton.value = false;
    } else if (window.innerWidth >= 765) {
        finalState.value = 2;
        loadMoreButton.value = false;
    } else {
        finalState.value = 3;
        loadMoreButton.value = true;
        showRightButton.value = false;
        showLeftButton.value = false;
    }
};

/*controller end*/

/*execute the function when window is risizing*/
window.addEventListener('resize', windowWidthTracker);
windowWidthTracker();
window.addEventListener('resize', () => {
    resetChanger.value ? window.location.reload() : null;
});

/*methods*/
const rightSlicer = () => {
    if (window.innerWidth >= 1280) {
        initialState.value += 1;
        finalState.value += 1;
        resetChanger.value = true;

        if (finalState.value === finalLength) {
            showRightButton.value = false;
            showLeftButton.value = true;
        }
    } else if (window.innerWidth >= 1024) {
        initialState.value += 3;
        finalState.value += 3;
        resetChanger.value = true;
        if (finalState.value === finalLength) {
            showRightButton.value = false;
            showLeftButton.value = true;
        }
    } else if (initialState.value > 2) {
        showRightButton.value = true;
        showLeftButton.value = false;
    }
};

const leftSlicer = () => {
    if (window.innerWidth >= 1280) {
        initialState.value -= 1;
        finalState.value -= 1;
        resetChanger.value = true;

        showLeftButton.value = false;
        showRightButton.value = true;
    } else if (window.innerWidth >= 1024) {
        initialState.value -= 2;
        finalState.value -= 2;
        resetChanger.value = true;
        if (finalState.value === finalLength) {
            showRightButton.value = true;
            showLeftButton.value = true;
        }
    }
};

const seeMore = () => {
    finalState.value = finalLength;
    (finalState.value = finalLength) ? (loadMoreButton.value = false) : true;
    resetChanger.value = true;
};
/*end methods*/
return {
    productsByCategory,
    finalLength,
    rightButton,
    leftButton,
    loadMoreButton,
    /*methods*/
    rightSlicer,
    leftSlicer,
    seeMore,
};
