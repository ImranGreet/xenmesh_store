<template>
     <section>
          <div
               class="flex h-auto w-full flex-col justify-center self-auto px-8 py-6 md:justify-between">
               <div
                    class="flex w-full grow flex-col-reverse items-start justify-between gap-y-4 sm:flex-row md:items-center md:gap-y-0">
                    <div class="grid w-2/3 grid-cols-1 capitalize md:grid-cols-3">
                         <div class="flex flex-col space-y-3">
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >xenmesh business</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >xenmesh store</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >get the app</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >about us</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >contact us</router-link
                              >
                         </div>

                         <div class="flex flex-col space-y-3">
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >careers</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >blog</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >help and support</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >affilate</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >investors</router-link
                              >
                         </div>

                         <div class="flex flex-col space-y-3">
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >terms</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >privacy policy</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >cookie settings</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >sitemap</router-link
                              >
                              <router-link
                                   to="#"
                                   class=":lg:hover:underline-offset-1 lg:hover:underline"
                                   >accessibility statement</router-link
                              >
                         </div>
                    </div>

                    <!-- language link -->
                    <button
                         class="place-self-start border-2 border-gray-300 px-3 py-2 uppercase tracking-widest lg:hover:bg-gray-700">
                         <span>
                              <font-awesome-icon icon="fa-solid fa-globe" />
                         </span>
                         English
                    </button>
                    <!-- end language link -->
               </div>

               <div class="flex w-full grow-0 items-center justify-between">
                    <router-link
                         to="/"
                         class="text-3xl capitalize tracking-wider">
                         xenmesh
                    </router-link>

                    <div>
                         <p>
                              <span>&copy;</span>
                              <span>{{ currentYear }}</span> xenmesh, inc
                         </p>
                    </div>
               </div>
          </div>
     </section>
</template>

<script>
export default {
     name: 'FooterPartTwo',
     setup() {
          const period = new Date();
          const currentYear = period.getFullYear();
          return { currentYear };
     },
};
</script>
