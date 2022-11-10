import { ref } from 'vue';
import { useStore } from 'vuex';
import useLocationProperties from './location';

const store = useStore();

const userLoginProperties = {
    loginInformation: {
        username: ref(''),
        passwords: ref(''),
    },
};

const userRegistrationProperties = {
    registrationInformation: {
        personalInformation: {
            name: {
                firstname: ref(''),
                lastname: ref(''),
            },
            email: ref(''),
            username: ref(''),
            passwords: ref(''),
        },
        address: {
            city: ref(''),
            streetName: ref(''),
            streetNumber: ref(''),
            zipCode: ref(''),
            geolLocation: {
                latitude: useLocationProperties().lat,
                longitude: useLocationProperties().long,
            },
        },
        phoneNumber: ref(''),
    },
};

const useUserRegistration = async (payload) => {
    await store.dispatch('auth/regInToXenmesh', payload);
};
const useUserLogin = () => {
    console.log('Login');
};

export { userLoginProperties, userRegistrationProperties, useUserRegistration, useUserLogin };
