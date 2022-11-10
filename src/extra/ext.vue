<template>
    <section
        class="flex w-full flex-col items-center justify-center bg-emerald-800/50 text-gray-900">
        <div class="text-center md:text-left">
            <h1
                class="my-5 text-lg font-semibold capitalize leading-relaxed tracking-widest text-white md:my-0 md:text-2xl xl:text-4xl">
                Registration to xenmesh
            </h1>
        </div>
        <div class="mx-auto my-5 flex w-11/12 flex-col items-center justify-center gap-y-3">
            <form
                @submit.prevent="onSubmit"
                class="mx-auto w-full space-y-4 rounded-md border border-white px-4 py-6 shadow-md md:w-5/6 md:shadow-none xl:w-3/5">
                <!-- personal information -->
                <div class="w-full text-center">
                    <h2
                        class="my-2 inline-block border-b border-indigo-600 px-2 py-1.5 text-center text-xl font-semibold tracking-widest text-white md:text-left">
                        Personal Information
                    </h2>
                    <div class="flex w-full flex-col items-center justify-between gap-y-2">
                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <label for="firstname">First Name</label>
                                <input
                                    v-model="firstname"
                                    type="text"
                                    name="firstname"
                                    id=""
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.firstname }}</ErrorMesseage>
                            </div>
                            <div class="flex w-full flex-col">
                                <label for="lastname">Last Name</label>
                                <input
                                    v-model="lastname"
                                    type="text"
                                    name="lastname"
                                    id=""
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.lastname }}</ErrorMesseage>
                            </div>
                        </div>
                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <label for="email">Email</label>
                                <input
                                    v-model="email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.email }}</ErrorMesseage>
                            </div>
                            <div class="flex w-full flex-col">
                                <label for="username">Username</label>
                                <input
                                    v-model="username"
                                    type="text"
                                    name="username"
                                    id="username"
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.username }}</ErrorMesseage>
                                <p></p>
                            </div>
                        </div>
                        <div class="flex w-full flex-col">
                            <label for="phone">Phone Number</label>
                            <input
                                v-model="phoneNumber"
                                type="tel"
                                name="phone"
                                id="phone"
                                class="form-input w-full rounded-md" />
                            <ErrorMesseage>{{ errors.phoneNumber }}</ErrorMesseage>
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
                                <label for="city">City</label>
                                <input
                                    v-model="city"
                                    type="text"
                                    name="city"
                                    id="city"
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.city }}</ErrorMesseage>
                            </div>

                            <div class="flex w-full flex-col">
                                <label for="street">Strret name</label>
                                <input
                                    v-model="streetName"
                                    type="text"
                                    name="street"
                                    id="street_name"
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.streetName }}</ErrorMesseage>
                            </div>
                        </div>

                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <label for="number">strret number</label>
                                <input
                                    v-model="streetNumber"
                                    type="number"
                                    name="number"
                                    id="street_number"
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.streetNumber }}</ErrorMesseage>
                            </div>

                            <div class="flex w-full flex-col">
                                <label for="zipcode">Zipcode</label>
                                <input
                                    v-model="zipCode"
                                    type="text"
                                    name="zipcode"
                                    id="zipcode"
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.zipCode }}</ErrorMesseage>
                            </div>
                        </div>

                        <div class="flex w-full flex-col justify-between gap-x-2 md:flex-row">
                            <div class="flex w-full flex-col">
                                <label for="lat">Latitude</label>
                                <input
                                    v-model="latitude"
                                    type="text"
                                    name="lat"
                                    id="lat"
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.latitude }}</ErrorMesseage>
                            </div>
                            <div class="flex w-full flex-col">
                                <label for="long">Longitude</label>
                                <input
                                    v-model="longitude"
                                    type="text"
                                    name="long"
                                    id=""
                                    class="form-input w-full rounded-md" />
                                <ErrorMesseage>{{ errors.longitude }}</ErrorMesseage>
                            </div>
                        </div>
                    </div>

                    <SubmitButton type="submit">Submit</SubmitButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    /*composition api*/
    import { computed } from 'vue';

    /*composables*/
    import { userRegistrationProperties } from '@/composables/auth';
    /*components*/
    import ErrorMesseage from '@/components/user/slots/ErrorMesseage.vue';
    import SubmitButton from '@/components/user/slots/SubmitButton.vue';

    export default {
        name: 'RegistrationForm',
        components: { ErrorMesseage, SubmitButton },
        setup() {
            /*personal information*/
            const { personalInformation } = userRegistrationProperties.registrationInformation;
            const { name } = personalInformation;
            const { address } = userRegistrationProperties.registrationInformation;
            const { geolLocation } = address;

            return {};
        },
    };
</script>
