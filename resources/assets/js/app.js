//import "core-js/fn/object/assign";
import Vue from 'vue';
import {populateAmenitiesAndPrices} from "./helpers";
import ImageCarousel from '../components/ImageCarousel.vue';
import ModalWindow from '../components/ModalWindow.vue';
import HeaderImage from '../components/HeaderImage.vue';
import FeatureList from '../components/FeatureList.vue';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

let app = new Vue({
    el: '#app',
    data: Object.assign(model, {
        contracted: true
    }),
    components: {
        ImageCarousel,
        ModalWindow,
        HeaderImage,
        FeatureList
    },
    methods: {
        openModal() {
            this.$refs.imagemodal.modalOpen = true;
        }
    }
});