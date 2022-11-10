import store from '@/store';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        async beforeEnter() {
            await store.dispatch('products/retrieveCategories');
            await store.dispatch('products/retrieveAllProducts');
        },
        component: () => import('@/layouts/UserLayout.vue'),

        children: [
            {
                path: '/',
                name: 'home',

                component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
            },
            {
                path: '/products/:category',
                name: 'category',
                async beforeEnter(to, from, next) {
                    await store.dispatch(`products/retrieveProductsByCategory`, to.params.category);

                    next();
                },
                component: () =>
                    import(
                        /* webpackChunkName: "category" */ '@/components/user/ReusableComps/ProductsByCategory.vue'
                    ),
            },
            {
                path: '/products/allproducts',
                name: 'allProducts',

                component: () =>
                    import(/* webpackChunkName: "products_store" */ '@/views/ProductsStore.vue'),
            },
            {
                path: '/productinfo/:id',
                name: 'singular',

                async beforeEnter(to, from, next) {
                    await store.dispatch(`products/retrieveSingularProduct`, to.params.id);

                    next();
                },
                component: () =>
                    import(/* webpackChunkName: "singular" */ '@/views/ProductDetails.vue'),
            },
            {
                path: '/cart',
                name: 'cart',
                component: () => import('@/views/CartItems.vue'),
            },
            {
                path: '/wish',
                name: 'wish',
                component: () => import('@/views/WishedItems.vue'),
            },
            {
                path: '/auth/userlogin',
                name: 'login',
                component: () => import('@/auth/LoginForm.vue'),
            },
            {
                path: '/auth/reg',
                name: 'registration',
                component: () => import('@/auth/RegistrationForm.vue'),
            },
        ],
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
