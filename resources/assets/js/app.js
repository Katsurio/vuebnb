//import "core-js/fn/object/assign";
import Vue from 'vue';
import {populateAmenitiesAndPrices} from "./helpers";
import ImageCarousel from '../components/ImageCarousel.vue';
import ModalWindow from '../components/ModalWindow.vue';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

let app = new Vue({
    el: '#app',
    data: Object.assign(model, {
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
        },
        contracted: true
    }),
    components: {
        ImageCarousel,
        ModalWindow
    },
    methods: {
        openModal() {
            this.$refs.imagemodal.modalOpen = true;
        }
    }
});