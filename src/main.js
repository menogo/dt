import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/js/axios';

import './assets/css/app.css';
import './assets/css/swiper.min.css';

Vue.config.productionTip = false;

const app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

window.app = app;
