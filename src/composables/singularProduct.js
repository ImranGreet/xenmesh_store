import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const useSingularproduct = () => {
     const store = useStore();
     const route = useRoute();

     const productDetails = computed(
          () => store.state.products.singularProduct
     );
     onMounted(async () => {
          await store.dispatch(
               'products/retrieveSingularProduct',
               route.params.id
          );
     });
     const {
          id,
          title,
          description: details,
          image: productThumbnail,
          category,
          price,
          rating: userReview,
     } = productDetails.value;

     return {
          id,
          title,
          details,
          productThumbnail,
          category,
          userReview,
          price,
          //full property
          productDetails,
     };
};

export default useSingularproduct;
