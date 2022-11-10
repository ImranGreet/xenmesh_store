<template>
    <section
        class="flex min-h-fit w-full flex-col items-center justify-center bg-red-900 bg-emerald-800/50 py-8">
        <FormKit
            type="form"
            :actions="false"
            @submit="useUserLogin()"
            :form-class="'mx-auto w-11/12  md:w-5/12 space-y-4 rounded-lg border border-white px-3 py-4'">
            <div class="w-full">
                <h1
                    class="text-center text-xl font-bold uppercase leading-7 tracking-wide text-indigo-700">
                    Sign in to your account
                </h1>
            </div>
            <div class="relative">
                <FormKit
                    v-model="username"
                    label="Username"
                    type="text"
                    name="username"
                    id="username"
                    validation="required|length:3,20"
                    validation-visibility="live"
                    outer-class="mb-3"
                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                    inner-class="w-full border border-gray-800 rounded-lg"
                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
            </div>
            <div class="relative">
                <FormKit
                    v-model="passwords"
                    label="Passwords"
                    type="password"
                    name="password"
                    id="passwords"
                    validation="required|length:3,20"
                    validation-visibility="live"
                    outer-class="mb-3"
                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                    inner-class="w-full border border-gray-800 rounded-lg"
                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
            </div>
            <SubmitButton>Login</SubmitButton>
            <div class="flex flex-col items-center justify-center text-center">
                <p class="text-base tracking-wider text-red-700">I Have no account</p>
                <router-link
                    :to="{ name: `registration` }"
                    class="my-1.5 block text-slate-800 underline underline-offset-4 shadow-md">
                    Registration
                </router-link>
            </div>
        </FormKit>
    </section>
</template>

<script>
    import { FormKit } from '@formkit/vue';
    import { userLoginProperties } from '@/composables/auth';
    import SubmitButton from '@/components/user/slots/SubmitButton.vue';
    export default {
        name: 'LoginForm',
        setup() {
            const { username, passwords, useUserLogin } = userLoginProperties.loginInformation;
            return {
                username,
                passwords,
                /*methods*/
                useUserLogin,
            };
        },
        components: { FormKit, SubmitButton },
    };
</script>
