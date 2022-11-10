import axios from 'axios';
const state = {
    categories: null,
    productsAccordingToCategory: [],
    allProducts: [],
    singularProduct: null,
    relatedProducts: [],
    productsInSort: [],
    productsInLimit: [],
};

const getters = {};
const mutations = {
    GET_CATEGORIES(state, payload) {
        state.categories = payload;
    },
    GET_PRODUCTSBY_CATEGORY(state, payload) {
        state.productsAccordingToCategory = payload;
    },

    GET_ALLPRODUCTS(state, payload) {
        state.allProducts = payload;
    },

    GET_SINGULAR_PRODUCT_DETAILS(state, payload) {
        state.singularProduct = payload;
    },

    GET_PRODUCTS_INSORT(state, payload) {
        state.productsInSort = payload;
    },

    GET_PRODUCTS_IN_LIMIT(state, payload) {
        state.productsInLimit = payload;
    },
};
const actions = {
    async retrieveCategories({ commit }) {
        let categories = await axios.get(`https://fakestoreapi.com/products/categories`);
        const category = categories.data;
        commit('GET_CATEGORIES', category);
    },

    async retrieveProductsByCategory({ commit }, payload) {
        let productsByCat = await axios.get(
            `https://fakestoreapi.com/products/category/${payload}`
        );
        const products = productsByCat.data;
        commit('GET_PRODUCTSBY_CATEGORY', products);
    },

    async retrieveAllProducts({ commit }) {
        let productsStore = await axios.get(`https://fakestoreapi.com/products`);
        const Allproducts = productsStore.data;
        commit('GET_ALLPRODUCTS', Allproducts);
    },

    async retrieveSingularProduct({ commit }, payload) {
        let productInfo = await axios.get(`https://fakestoreapi.com/products/${payload}`);
        const singularProduct = productInfo.data;
        commit('GET_SINGULAR_PRODUCT_DETAILS', singularProduct);
        localStorage.setItem('fullWidth', true);
    },

    async retrieveAllProductsInLimit({ commit }, payload) {
        let productsStore = await axios.get(`https://fakestoreapi.com/products?limit=${payload}`);
        const Allproducts = productsStore.data;
        commit('GET_PRODUCTS_IN_LIMIT', Allproducts);
    },

    async retrieveProductsInSort({ commit }) {
        let productsStore = await axios.get(`https://fakestoreapi.com/products?sort=asc`);
        const productsInSort = productsStore.data;
        commit('GET_PRODUCTS_INSORT', productsInSort);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
