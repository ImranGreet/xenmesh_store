import { useStore } from 'vuex';

export default class usePurchaseDetails {
    constructor() {
        const store = useStore();
        this.allProducts = store.state.products.allProducts;
    }
    addTocart(id, category) {
        const productsToCart = this.allProducts.filter(
            (product) => product.id === id && product.category === category
        );
        localStorage.setItem('carted-items', JSON.stringify(...productsToCart));
    }
    addToWishList(id) {
        console.log(id);
    }
    removeFromCart(id) {
        console.log(id);
    }
    moveToWishList(id) {
        console.log(id);
    }
    buyProduct(id) {
        console.log(id);
    }
}
