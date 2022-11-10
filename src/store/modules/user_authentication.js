import axios from 'axios';

const state = {
    loginMessage: {
        success: 'Successfully Login to Xenmesh',
        error: 'Login Failed ,Try Again',
        authentication: false,
    },
    registrationMessage: {
        success: 'Successfully Regesterd to Xenmesh',
        error: 'Registration Failed ,Try Again',
        authentication: false,
    },
};
const getters = {};
const mutations = {
    GET_REGISTRATION_DETAILS(state, payload) {
        state.registrationMessage = payload;
    },
};
const actions = {
    async regInToXenmesh({ commit }, payload) {
        const reg = await axios.post('https://fakestoreapi.com/users', payload);
        console.log(reg);
        commit('GET_REGISTRATION_DETAILS');
    },
    async loginToXenmesh(payload) {
        await axios.post('https://fakestoreapi.com/auth/login', payload);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
