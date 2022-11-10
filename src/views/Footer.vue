<template>
  <section class="bg-slate-800 text-white">
    <FooterPartOne />
    <FooterPartTwo />
  </section>
</template>

<script>
import FooterPartOne from '@/components/user/Footer/FooterPartOne.vue';
import FooterPartTwo from '@/components/user/Footer/FooterPartTwo.vue';
export default {
  name: 'Footer',
  components: { FooterPartOne, FooterPartTwo },
};
</script>

<style></style>
