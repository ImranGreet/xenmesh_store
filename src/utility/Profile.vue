<template>
    <section class="h-auto w-96 divide-y-2 divide-gray-400/20 py-6 shadow-2xl">
        <div class="flex items-start justify-start gap-x-6 p-4">
            <img
                :src="profilePhoto"
                alt=""
                class="h-24 w-24 rounded-full shadow-md shadow-pink-500" />
            <div class="space-y-2">
                <router-link
                    to="#"
                    class="text-lg font-bold tracking-wide text-gray-900">
                    {{ username }}
                </router-link>
                <p>{{ email }}</p>
            </div>
        </div>
        <div class="flex flex-col items-start justify-start gap-y-2 p-4">
            <router-linkyarn
                class="text-lg capitalize tracking-wider"
                to="#"
                v-for="(link, index) in cart"
                :key="index">
                {{ link }}
            </router-linkyarn>
        </div>
        <!-- account -->
        <div class="flex flex-col items-start justify-start gap-y-2 p-4">
            <router-link
                class="text-lg capitalize tracking-wider"
                to="#"
                v-for="(link, index) in settings"
                :key="index">
                {{ link }}
            </router-link>
        </div>
        <!-- auth -->
        <div class="flex flex-col items-start justify-start gap-y-2 p-4">
            <router-link
                class="text-lg capitalize tracking-wider"
                to="#"
                v-for="(link, index) in auth"
                :key="index">
                {{ link }}
            </router-link>
        </div>
    </section>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'Profile',
        setup() {
            const profileInformation = ref({
                id: 1,
                name: 'Imran',
                e_mail: 'greetimran@gmail.com',
                imageText:
                    'https://img-c.udemycdn.com/notices/featured_banner/image_udlite/cb0c039f-ce07-43bd-a3ce-67da3b9b1600.jpg',
                cart: ['cart', 'wish', 'store'],
                account_settings: ['account-setting', 'payment methods', 'xenmesh credits'],
                user_auth: ['edit profile', 'logout'],
            });
            const {
                id,
                name: username,
                e_mail: email,
                imageText: profilePhoto,
                cart,
                account_settings: settings,
                user_auth: auth,
            } = profileInformation.value;
            return {
                username,
                email,
                profilePhoto,
                cart,
                settings,
                auth,
            };
        },
    };
</script>
