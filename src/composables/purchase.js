import { ref } from 'vue';
import { useStore } from 'vuex';

export default class usePurchaseDetails {
    constructor() {
        const store = useStore();
        this.allProducts = store.state.products.allProducts;
    }
    addTocart(id, category) {
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
        }
        products.push(
            this.allProducts.find((product) => product.id === id && product.category === category)
        );
        localStorage.setItem('products', JSON.stringify(products));
    }
    addToWishList(id, category) {
        let products = [];
        if (localStorage.getItem('wished-products')) {
            products = JSON.parse(localStorage.getItem('wished-products'));
        }
        products.push(
            this.allProducts.find((product) => product.id === id && product.category === category)
        );
        localStorage.setItem('wished-products', JSON.stringify(products));
    }
    removeFromCart(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        products.splice(0);
    }
    moveToWishList(id, category) {
        console.log(id, category);
    }
    buyProduct(id, category) {
        console.log(id, category);
    }
}
