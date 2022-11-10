import { createStore } from 'vuex';

import products from './modules/products';
import * as auth from './modules/user_authentication';
import cart from './modules/cart';

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        products,
        auth,
        cart,
    },
});
