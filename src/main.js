import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import { plugin, defaultConfig } from '@formkit/vue';

/*font awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faStar, faHeart, faBell } from '@fortawesome/free-regular-svg-icons';

import {
    faCartPlus,
    faChevronLeft,
    faChevronRight,
    faUsers,
    faMagnifyingGlass,
    faGlobe,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
library.add(
    faFacebook,
    faStar,
    faHeart,
    faCartPlus,
    faChevronLeft,
    faChevronRight,
    faUsers,
    faMagnifyingGlass,
    faBell,
    faGlobe,
    faBars
);
/*font awesome end*/
//global components
import ProductInfo from './components/user/ReusableComps/ProductInfo.vue';
import LoadMoreButton from './components/user/slots/LoadMoreButton.vue';

createApp(App)
    .use(plugin, defaultConfig)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('ProductInfo', ProductInfo)
    .component('LoadMoreButton', LoadMoreButton)
    .use(store)
    .use(router)
    .mount('#app');
