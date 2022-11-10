<template>
    <section
        class="flex w-full flex-col items-center justify-center bg-emerald-800/50 text-gray-900 md:py-6">
        <div class="text-center md:text-left">
            <h1
                class="my-5 text-lg font-semibold capitalize leading-relaxed tracking-widest text-white md:my-0 md:text-2xl xl:text-4xl">
                Registration to xenmesh
            </h1>
        </div>
        <div class="mx-auto my-5 flex w-11/12 flex-col items-center justify-center gap-y-3">
            <FormKit
                type="form"
                @submit="useUserRegistration()"
                :actions="false"
                :form-class="'mx-auto w-full space-y-4 rounded-md border border-white px-4 py-6 shadow-md md:w-5/6 md:shadow-none xl:w-3/5'">
                <!-- personal information -->
                <div class="w-full text-center">
                    <h2
                        class="my-2 inline-block border-b border-indigo-600 px-2 py-1.5 text-center text-xl font-semibold tracking-widest text-white md:text-left">
                        Personal Information
                    </h2>
                    <div class="flex w-full flex-col items-center justify-between gap-y-2">
                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="firstname"
                                    label="First Name"
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    validation="required|length:2,20"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>
                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="lastname"
                                    label="Last Name"
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    validation="required|length:3,20"
                                    validation-visibility="live"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>
                        </div>
                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="email"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    validation="required|email"
                                    validation-visibility="submit"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>
                            <div class="flex w-full flex-col">
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
                        </div>
                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="phoneNumber"
                                    label="Phone Number"
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    validation="required|length:3,20|number"
                                    validation-visibility="live"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>
                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="passwords"
                                    label="Passwords"
                                    type="password"
                                    name="password"
                                    id="pass"
                                    validation="required|password|length:5,20"
                                    validation-visibility="live"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- address information -->
                <div class="w-full text-center">
                    <h2
                        class="my-2 inline-block border-b border-indigo-600 px-2 py-1.5 text-center text-xl font-semibold tracking-widest text-white">
                        Address
                    </h2>
                    <div class="flex w-full flex-col items-center justify-between gap-y-2">
                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="city"
                                    label="City"
                                    type="text"
                                    name="city"
                                    id="city"
                                    validation="required|length:3,20"
                                    validation-visibility="live"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>

                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="streetName"
                                    label="Street name"
                                    type="text"
                                    name="street"
                                    id="street_name"
                                    validation="required|length:3,20"
                                    validation-visibility="live"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>
                        </div>

                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="streetNumber"
                                    label="Street Number"
                                    type="number"
                                    name="number"
                                    id="street_number"
                                    validation="required|length:3,20|number"
                                    validation-visibility="live"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>

                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="zipCode"
                                    label="Zip Code"
                                    type="text"
                                    name="zipcode"
                                    id="zipcode"
                                    validation="required|length:3,20"
                                    validation-visibility="live"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>
                        </div>

                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="latitude"
                                    disabled="true"
                                    label="Latitude"
                                    type="text"
                                    name="lat"
                                    id="lat"
                                    validation="required"
                                    validation-visibility="live"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>
                            <div class="flex w-full flex-col">
                                <FormKit
                                    v-model="longitude"
                                    disabled="true"
                                    label="Longitude"
                                    type="text"
                                    name="long"
                                    id="long"
                                    validation="required"
                                    validation-visibility="live"
                                    outer-class="mb-3"
                                    label-class="block mb-1 font-normal tracking-wide text-base md:text-lg xl:text-xl text-left"
                                    inner-class="w-full border border-gray-800 rounded-lg"
                                    input-class="w-full py-3 form-input text-base text-gray-900 rounded-lg"
                                    message-class="text-red-700 text-base md:text-base italic text-left tracking-wide" />
                            </div>
                        </div>
                    </div>

                    <SubmitButton>Submit</SubmitButton>
                    <div class="flex flex-col items-center justify-between">
                        <p class="my-1.5 rounded-sm px-2 py-0.5 text-red-700">
                            I Have already an account
                        </p>
                        <router-link
                            :to="{ name: `login` }"
                            class="my-1.5 rounded-sm px-2 py-0.5 text-slate-800 underline underline-offset-4">
                            Login
                        </router-link>
                    </div>
                </div>
            </FormKit>
        </div>
    </section>
</template>

<script>
    import { userRegistrationProperties, useUserRegistration } from '@/composables/auth';
    import SubmitButton from '@/components/user/slots/SubmitButton.vue';
    import { FormKit } from '@formkit/vue';

    export default {
        name: 'RegistrationForm',
        components: { FormKit, SubmitButton },
        setup() {
            const {
                personalInformation: {
                    email,
                    username,
                    passwords,

                    name: { firstname, lastname },
                },
                address: {
                    city,
                    streetName,
                    streetNumber,
                    zipCode,
                    geolLocation: { longitude, latitude },
                },

                phoneNumber,
            } = userRegistrationProperties.registrationInformation;

            return {
                email,
                username,
                passwords,
                phoneNumber,
                firstname,
                lastname,
                city,
                streetName,
                streetNumber,
                zipCode,
                longitude,
                latitude,
                /*user registration method*/
                useUserRegistration,
            };
        },
    };
</script>
