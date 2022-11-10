const state = {
    cartedItems: JSON.parse(localStorage.getItem('carted-items')),
};
const getters = {};
const mutations = {};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
