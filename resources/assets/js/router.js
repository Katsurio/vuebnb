import Vue from 'vue';
import VueRouter from 'vue-router';
import ListingPage from '../components/ListingPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        // { path: '/', component: HomePage }, // Doesn't exist yet
        {path: '/listing/:listing', component: ListingPage}
    ]
});